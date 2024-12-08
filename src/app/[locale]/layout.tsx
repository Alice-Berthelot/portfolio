import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/globals.css";
import Header from "@/components/header";
import TemporaryBanner from "@/components/temporarybanner";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-content",
});

const megatrans = localFont({
  src: "../../../public/fonts/megatrans/Megatrans-Regular-BF64e042c317003.otf",
  variable: "--font-title",
});

export const metadata = {
  title: "Alice Berthelot | Portfolio",
  description: "Alice Berthelot porfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!locale || typeof locale !== "string") {
    throw new Error("Locale is missing or invalid");
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${megatrans.variable} ${nunito.variable}`}>
      <body className="font-content">
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <TemporaryBanner />
            <Header />
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
