import Link from "next/link";

export const metadata = {
  title: "Guest area",
  keywords: ["account", "settings", "profile"],
  description: "Manage your account settings",
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, Mikiyas
      </h2>
      <ul>
        <li>
          <Link href="/account/reservations">Reservations</Link>
        </li>
        <li>
          <Link href="/account/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
