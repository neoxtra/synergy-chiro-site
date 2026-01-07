"use client";

import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState(500);

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // simple validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !industry ||
      !message
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        industry,
        message,
        budget,
      }),
    });

    if (res.ok) {
      setStatus("success");

      // Clear fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setIndustry("");
      setMessage("");
      setBudget(500);

      // popup or toast
      alert("Message delivered successfully!");
    } else {
      setStatus("error");
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 pt-32 pb-20">
      <div className="max-w-2xl mx-auto">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* FIRST & LAST NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
          </div>

          {/* INDUSTRY */}
          <div>
            <label className="block mb-2 font-semibold">Industry</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
          </div>

          {/* BUDGET */}
          <div>
            <label className="block mb-2 font-semibold">
              Budget: ${budget}
            </label>
            <input
              type="range"
              min={500}
              max={10000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 font-semibold">Additional Notes & Desired Specs</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 h-32 rounded bg-white/10 border border-white/20 text-white"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 transition text-white px-6 py-3 rounded font-semibold text-lg"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
