import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem("theme");
      if (userPref) {
        return userPref;
      }
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
    }
    return "light"; // Default to light if window is not available (e.g., during SSR)
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const userPref = window.localStorage.getItem("theme");
      const newMode = userPref
        ? userPref
        : mediaQuery.matches
        ? "dark"
        : "light";
      setMode(newMode);
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange(); // Set initial mode

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
