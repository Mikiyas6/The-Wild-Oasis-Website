import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";

import { Josefin_Sans } from "next/font/google";

// This is a custom font from Google Fonts. It will be used in the entire application.
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// This is metadata for the entire application. It will be used in the <head> tag of the HTML document.
// It will be used for SEO and social media sharing.
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded  by beautiful mountains and dark forests",
};

// This is a root layout for a Next.js application. It will Wrap the entire application so it will apply to all route.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-900 text-primary-50 min-h-screen flex flex-col antialiased`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
