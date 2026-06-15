export default function Services() {
  const services = [
    {
      name: "Facial",
      price: "Starting ₹600",
      duration: "45 Min",
    },
    {
      name: "Wax",
      price: "Starting ₹50",
      duration: "15 Min",
    },
    {
      name: "Threading",
      price: "Starting ₹30",
      duration: "10 Min",
    },
    {
      name: "Cleanup",
      price: "Starting ₹500",
      duration: "30 Min",
    },
    {
      name: "Manicure",
      price: "Starting ₹300",
      duration: "30 Min",
    },
    {
      name: "Pedicure",
      price: "Starting ₹550",
      duration: "45 Min",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Our Premium Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {service.name}
              </h3>

              <p className="text-yellow-400 mb-2">
                {service.price}
              </p>

              <p className="text-gray-400 mb-6">
                {service.duration}
              </p>

              <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}