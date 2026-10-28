import { ScreenSizeProvider } from "./ScreenContext";
import "./globals.css";

const description = "Rashed Al-Awamleh is a Computer Science graduate and full-stack web and mobile developer in Amman, Jordan, building practical applications, AI integrations, and automation tools.";

export const metadata = {
  title: "Rashed Al-Awamleh | Full-Stack Web & Mobile Developer",
  description,
  keywords: ["Rashed Al-Awamleh", "Full-Stack Developer", "Flutter Developer", "FastAPI", "AI Integration", "Amman Jordan"],
  authors: [{ name: "Rashed Al-Awamleh" }],
  creator: "Rashed Al-Awamleh",
  openGraph: { title: "Rashed Al-Awamleh | Full-Stack Web & Mobile Developer", description, type: "website", siteName: "Rashed Al-Awamleh Portfolio", images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Rashed Al-Awamleh — Full-Stack Web & Mobile Developer" }] },
  twitter: { card: "summary_large_image", title: "Rashed Al-Awamleh | Full-Stack Web & Mobile Developer", description, images: ["/og.svg"] },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
      </body>
    </html>
  );
}
