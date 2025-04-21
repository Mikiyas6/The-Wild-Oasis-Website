import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

// This is a root layout for a Next.js application. It will Wrap the entire application so it will apply to all route.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-colors-primary-950 text-colors-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className="container mx-auto px-4">{children}</main>
        <footer>Copyright &copy; 2023 The Wild Oasis</footer>
      </body>
    </html>
  );
}
