import '@src/styles/reset.css';
import '@radix-ui/themes/styles.css';
import '@src/styles/global.css';

import { Inter } from 'next/font/google';

import { Providers } from './providers';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
});

export const metadata = {
    title: 'Binoculars',
    description: 'Найди лучший кэшбэк',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="ru" className="dark" style={{ colorScheme: 'dark' }}>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f1bf42" />
                <meta name="msapplication-TileColor" content="#f1bf42" />
                <meta name="theme-color" content="#f1bf42" />
            </head>
            <body className={inter.className}>
                <Providers>
                    <div vaul-drawer-wrapper="">{children}</div>
                    <div id="vaul" />
                </Providers>
            </body>
        </html>
    );
}
