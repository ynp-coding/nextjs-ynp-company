import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import CookieConsentFull from "@/components/ui/cookie";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YNP Company | Home",
  description: "Description",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${ibmPlexSansThai.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>

        <CookieConsentFull />
      </body>
    </html>
  );
}
