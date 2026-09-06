import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle({
  className = "",
  size = "icon",
}: {
  className?: string;
  size?: "default" | "sm" | "icon";
}) {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size={size}
        className={`size-11 rounded-lg border-border bg-background text-muted-foreground ${className}`}
        aria-label="Toggle color theme"
        disabled
      >
        <span className="size-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size={size}
      onClick={toggleTheme}
      className={`relative size-11 rounded-lg border-border bg-background/80 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative size-5">
        <Sun
          className={`absolute inset-0 size-5 text-amber-500 transition-all duration-300 ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 size-5 text-accent transition-all duration-300 ${
            isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
      </div>
      <span className="sr-only">
        {isDark ? "Current theme: Dark. Click for Light." : "Current theme: Light. Click for Dark."}
      </span>
    </Button>
  );
}

/**
 * Enhanced segmented controller for mobile menu drawer or settings
 */
export function ThemeSegmentedControl({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const options: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ];

  return (
    <div
      className={`grid grid-cols-3 gap-1 rounded-xl border border-border bg-muted/50 p-1 text-xs font-semibold ${className}`}
      role="radiogroup"
      aria-label="Color theme selection"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(value)}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-card text-foreground shadow-sm font-bold border border-border"
                : "text-muted-foreground hover:text-foreground hover:bg-card/40"
            }`}
          >
            <Icon className={`size-3.5 ${isActive ? "text-accent" : ""}`} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
