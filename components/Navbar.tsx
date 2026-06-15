import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Bella & Guy"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h1 className="font-bold text-lg">Bella & Guy</h1>
          <p className="text-yellow-500 text-xs">Unisex Salon</p>
        </div>
      </div>

      <div className="hidden md:flex gap-6">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}