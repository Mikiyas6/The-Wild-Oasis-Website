import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "A place to relax and unwind",
};

// This is a root layout for a Next.js application. It will Wrap the entire application so it will apply to all route.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
