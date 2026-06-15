"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("appointments")
        .insert([
          {
            full_name: fullName,
            phone: phone,
            service: service,
            booking_date: bookingDate,
            booking_time: bookingTime,
          },
        ])
        .select();

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        alert("ERROR: " + error.message);
        return;
      }

      alert("Appointment Booked Successfully!");

      setFullName("");
      setPhone("");
      setService("");
      setBookingDate("");
      setBookingTime("");
    } catch (err) {
      console.error(err);
      alert("Unexpected Error");
    }
  };

  return (
    <section className="bg-zinc-100 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border p-3 rounded-lg text-black"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded-lg text-black"
            required
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border p-3 rounded-lg text-black"
            required
          >
            <option value="">Select Service</option>
            <option>Facial</option>
            <option>Wax</option>
            <option>Threading</option>
            <option>Cleanup</option>
            <option>Manicure</option>
            <option>Pedicure</option>
          </select>

          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full border p-3 rounded-lg text-black"
            required
          />

          <input
            type="time"
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
            className="w-full border p-3 rounded-lg text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}