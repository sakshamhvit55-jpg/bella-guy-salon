export default function Reviews() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
            <p>
              Amazing salon experience. Very professional staff and great service.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
            <p>
              One of the best salons in Wave City. Highly recommended.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
            <p>
              Clean environment, affordable pricing and excellent results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}