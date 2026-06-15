"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm(e: any) {
    e.preventDefault();

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          phone,
          message,
        },
      ]);

if (error) {
  console.log(error);
  alert(error.message);
  return;
}

    alert("Message Sent Successfully!");

    setName("");
    setPhone("");
    setMessage("");
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Contact Us
        </h2>

        <form
          onSubmit={submitForm}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-3 rounded h-32"
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}