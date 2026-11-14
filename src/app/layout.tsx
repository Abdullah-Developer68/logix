import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logixofficial.site"),
  title: "Logix — Software that moves your business forward",
  description: "Logix designs, builds and scales digital products for ambitious businesses.",
  openGraph: {
    type: "website",
    siteName: "Logix",
    url: "https://logixofficial.site",
    title: "Logix — Software that moves your business forward",
    description: "Logix designs, builds and scales digital products for ambitious businesses.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Dark is the default theme; it intentionally does not follow the OS setting.
  themeColor: "#080e1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/*
          Always open in dark mode, regardless of the OS light/dark preference.
          Light mode is only used when the visitor explicitly picks it with the
          header theme toggle (persisted as theme=light in localStorage).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var root = document.documentElement;
                if (localStorage.getItem('theme') === 'light') {
                  root.classList.remove('dark');
                } else {
                  root.classList.add('dark');
                }
                var meta = document.querySelector('meta[name="theme-color"]');
                if (meta) meta.setAttribute('content', root.classList.contains('dark') ? '#080e1a' : '#ffffff');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${geistSans.className} min-h-full flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-200`}>{children}</body>
    </html>
  );
}
