"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
const [bookings, setBookings] = useState<any[]>([]);

useEffect(() => {
fetchBookings();
}, []);

async function fetchBookings() {
const { data } = await supabase
.from("appointments")
.select("*")
.order("id", { ascending: false });

if (data) setBookings(data);

}

async function updateStatus(id: number, status: string) {
await supabase
.from("appointments")
.update({ status })
.eq("id", id);

fetchBookings();

}

async function deleteBooking(id: number) {
if (!confirm("Are you sure you want to delete this booking?")) return;

await supabase
  .from("appointments")
  .delete()
  .eq("id", id);

fetchBookings();

}

return (
  <div className="min-h-screen bg-zinc-950 text-white p-8">
    <h1 className="text-4xl font-bold mb-2">
      Bella & Guy Admin Panel
    </h1>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">

  <div className="bg-zinc-900 p-4 rounded-xl">
    <h3 className="text-zinc-400">Total</h3>
    <p className="text-3xl font-bold">
      {bookings.length}
    </p>
  </div>

  <div className="bg-yellow-900 p-4 rounded-xl">
    <h3>Pending</h3>
    <p className="text-3xl font-bold">
      {bookings.filter(b => b.status === "Pending").length}
    </p>
  </div>

  <div className="bg-blue-900 p-4 rounded-xl">
    <h3>Confirmed</h3>
    <p className="text-3xl font-bold">
      {bookings.filter(b => b.status === "Confirmed").length}
    </p>
  </div>

  <div className="bg-green-900 p-4 rounded-xl">
    <h3>Completed</h3>
    <p className="text-3xl font-bold">
      {bookings.filter(b => b.status === "Completed").length}
    </p>
  </div>

  <div className="bg-red-900 p-4 rounded-xl">
    <h3>Cancelled</h3>
    <p className="text-3xl font-bold">
      {bookings.filter(b => b.status === "Cancelled").length}
    </p>
  </div>

</div>

    <div className="overflow-auto rounded-xl border border-zinc-700">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr>
            <th className="p-4 border">Name</th>
            <th className="p-4 border">Phone</th>
            <th className="p-4 border">Service</th>
            <th className="p-4 border">Date</th>
            <th className="p-4 border">Time</th>
            <th className="p-4 border">Status</th>
            <th className="p-4 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((item) => (
            <tr key={item.id}>
              <td className="p-4 border">{item.full_name}</td>
              <td className="p-4 border">{item.phone}</td>
              <td className="p-4 border">{item.service}</td>
              <td className="p-4 border">{item.booking_date}</td>
              <td className="p-4 border">{item.booking_time}</td>

              <td className="p-4 border">
                <select
                  value={item.status || "Pending"}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                  className="bg-zinc-800 text-white px-3 py-2 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>

              <td className="p-4 border">
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/91${item.phone}`,
                      "_blank"
                    )
                  }
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded mr-2"
                >
                  WhatsApp
                </button>

                <button
                  onClick={() => deleteBooking(item.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}