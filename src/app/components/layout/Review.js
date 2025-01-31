"use client";

import UserReview from "@/app/components/layout/UserReview";

export default async function ReviewPage() {
  const res = await fetch("https://randomuser.me/api/?results=6"); //mengambil 6 random user
  const data = await res.json();
  const reviews = data.results;

  return (
    <section id="Review" className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-4">
        User Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((user, index) => (
          <div
            key={index}
            className="p-6 bg-gray-300 rounded-lg shadow-md text-center  hover:bg-slate-200 hover:shadow-lg hover:shadow-black/25 transition-all"
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="rounded-full w-20 h-20 mx-auto"
            />
            <h3 className="mt-4 font-semibold text-lg">{`${user.name.first} ${user.name.last}`}</h3>
            <p className="text-gray-700 text-sm italic">
              "{user.location.city}, {user.location.country}"
            </p>
            <p className="text-gray-500 mt-2">
              This is the best Tahu Bulat I've eaten so far in Indonesia. 100%
              recommended. Mantapp
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
