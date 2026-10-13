import { useCallback, useState } from "react";

type Theme = "light" | "dark";

/** The initial theme is set by the inline script in index.html before paint. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable; the theme still applies for this visit.
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
