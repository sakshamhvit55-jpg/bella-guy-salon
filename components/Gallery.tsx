import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Gallery
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Explore Bella & Guy Salon
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/team.jpg"
              alt="Team"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/interior1.jpg"
              alt="Interior"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/interior2.jpg"
              alt="Salon"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/reception.jpg"
              alt="Reception"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/salon-front.jpg"
              alt="Salon Front"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="bg-yellow-500 rounded-xl flex items-center justify-center text-black font-bold text-2xl">
            Bella & Guy
          </div>
        </div>
      </div>
    </section>
  );
}