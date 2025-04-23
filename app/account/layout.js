import "@/app/_styles/globals.css";
import SideNavigation from "../_components/SideNavigation";

// This is a root layout for a Next.js application. It will Wrap the entire application so it will apply to all route.
export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
