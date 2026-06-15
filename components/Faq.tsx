export default function Faq() {
  return (
    <section className="bg-zinc-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-black mb-2">
              Do I need an appointment?
            </h3>
            <p className="text-gray-600">
              Appointments are recommended, but walk-ins are also welcome.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-black mb-2">
              What are your salon timings?
            </h3>
            <p className="text-gray-600">
              We are open daily from 9:00 AM to 9:00 PM.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-black mb-2">
              Can I book online?
            </h3>
            <p className="text-gray-600">
              Yes, you can book your appointment directly from our website.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-black mb-2">
              Can I cancel my booking?
            </h3>
            <p className="text-gray-600">
              Booking cancellation is not allowed within 24 hours of the appointment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}