export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Why Choose Bella & Guy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">
              Professional Staff
            </h3>
            <p className="text-gray-600">
              Experienced beauty professionals for premium salon services.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">
              Premium Products
            </h3>
            <p className="text-gray-600">
              High quality products for skin, hair and beauty treatments.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">
              Hygienic Environment
            </h3>
            <p className="text-gray-600">
              Clean, safe and comfortable salon experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}