import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh]">
      <Image
        src="/images/salon-front.jpg"
        alt="Bella & Guy"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          BELLA & GUY
        </h1>

        <p className="text-xl mb-4">
          Luxury Unisex Salon in Wave City
        </p>

        <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
          Book Appointment
        </button>
      </div>
    </section>
  );
}