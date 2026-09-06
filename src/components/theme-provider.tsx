import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const THEME_STORAGE_KEY = "joint-plus-theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      return stored ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window === "undefined") return "light";
    if (theme === "system") return getSystemTheme();
    return theme;
  });

  // Apply theme to document element
  const applyTheme = useCallback((targetTheme: ResolvedTheme) => {
    const root = document.documentElement;
    if (targetTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setResolvedTheme(targetTheme);
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      } catch (e) {
        console.warn("Unable to persist theme to localStorage", e);
      }

      if (newTheme === "system") {
        applyTheme(getSystemTheme());
      } else {
        applyTheme(newTheme);
      }
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  // Sync with system preference changes when theme is set to 'system'
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        applyTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    if (theme === "system") {
      applyTheme(mediaQuery.matches ? "dark" : "light");
    } else {
      applyTheme(theme);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
