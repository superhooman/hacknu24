import "@src/styles/reset.css";
import "@radix-ui/themes/styles.css";
import "@src/styles/global.css";

import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Binoculars",
  description: "Найди лучший кэшбэк",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <Providers>
          <div vaul-drawer-wrapper="">{children}</div>
          <div id="vaul" />
        </Providers>
      </body>
    </html>
  );
}
