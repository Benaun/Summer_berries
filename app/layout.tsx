import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const main = Montserrat({
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'latin'],
})

const alternates = Montserrat_Alternates({
  weight: ['600', '700'],
  variable: '--font-montserrat-alternates',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Summer Berries",
  description: "Create Benaun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${main.variable} ${alternates.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
