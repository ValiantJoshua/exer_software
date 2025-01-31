"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabaseClient";

export default function UserReviews() {
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Error fetching user reviews:", error);
      } else {
        setUserReviews(data);
      }
      setLoading(false);
    };

    fetchUserReviews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {userReviews.map((review) => (
        <div
          key={review.id}
          className="p-6 bg-gray-300 rounded-lg shadow-md text-center hover:bg-slate-200 hover:shadow-lg hover:shadow-black/25 transition-all"
        >
          <h3 className="mt-4 font-semibold text-lg">{review.name}</h3>
          <p className="text-gray-700 text-sm italic">
            "{review.city}, {review.country}"
          </p>
          <p className="text-gray-500 mt-2">{review.content}</p>
        </div>
      ))}
    </div>
  );
}

