// app/providers.tsx
"use client";

import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      value={{
        light: "light",
        dark: "dark",
        contrast: "contrast",
      }}
    >
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}
