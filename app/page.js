import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";
export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill // will make the image cover the entire screen
        alt="Mountains and forests with two cabins"
        quality={80} // quality of the image
        placeholder="blur" // will make the image blurry until it loads
        className="object-cover " // object-cover: to preserve the dimensions of the image to the aspect ratio
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
