"use client";
import UserReviews from "../components/layout/UserReview";
import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";

export default function addReview() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setError("Plese log in first");
      return;
    }

    // Masukan data ke database
    const { error: insertError } = await supabase
      .from("reviews")
      .insert([{ user_id: user.id, name, city, country, content }]);

    if (insertError) {
      setError("Failed to submit review: " + insertError.message);
    } else {
      setMessage("Review submitted");
      setName("");
      setCity("");
      setCountry("");
      setContent("");
    }
  };

  return (
    <section id="Review" className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-4">
        User Reviews
      </h1>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Review</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>

      <UserReviews />
    </section>
  );
}
