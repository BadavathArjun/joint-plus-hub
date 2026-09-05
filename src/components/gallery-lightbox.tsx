import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag?: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = selectedIndex !== null;

  const handleOpen = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((current) => (current === null ? null : current === 0 ? items.length - 1 : current - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((current) => (current === null ? null : current === items.length - 1 ? 0 : current + 1));
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width="1400"
                height="900"
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <button
                type="button"
                onClick={(e) => handleOpen(index, e)}
                className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`View enlarged image: ${item.caption}`}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold text-foreground shadow-md backdrop-blur">
                  <ZoomIn className="size-4 text-accent" />
                  Enlarge Image
                </span>
              </button>
            </div>
            <div className="p-5">
              {item.tag ? (
                <span className="inline-block rounded bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {item.tag}
                </span>
              ) : null}
              <h3 className="mt-2 text-base font-bold leading-snug text-foreground">
                {item.caption}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.alt}</p>
            </div>
          </article>
        ))}
      </div>

      {isOpen && currentItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl">
            {/* Header / controls */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Clinical Care Gallery
                </span>
                <p className="text-xs text-muted-foreground">
                  Image {(selectedIndex ?? 0) + 1} of {items.length}
                </p>
              </div>
              <Button
                ref={closeButtonRef}
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="size-10 rounded-full text-foreground hover:bg-muted"
                aria-label="Close lightbox"
              >
                <X className="size-5" />
              </Button>
            </div>

            {/* Main Image Area */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black/95 p-4 sm:p-6">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain shadow-md"
              />

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 grid size-11 place-items-center rounded-full bg-background/80 text-foreground shadow-lg backdrop-blur transition hover:bg-background hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 grid size-11 place-items-center rounded-full bg-background/80 text-foreground shadow-lg backdrop-blur transition hover:bg-background hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Footer with caption */}
            <div className="border-t border-border bg-background p-5 sm:px-8">
              <h4 className="text-base font-bold text-foreground sm:text-lg">
                {currentItem.caption}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {currentItem.alt}
              </p>
              <p className="mt-3 text-[11px] text-muted-foreground/80">
                * Note: Illustrative clinical representation for general patient education. Imagery does not depict individual patient claims or outcome guarantees.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
