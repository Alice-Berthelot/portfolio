import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../../../src/globals.css";
import Header from "@/components/header";

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
    <html lang={locale}>
      <body>
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
