"use client"; 
import Link from "next/link";

import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabaseClient";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.log("Error fetching profile:", error);
      } else {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!profile) {
    return <p>No profile data found.</p>;
  }

  return (
    <section className="mt-8 flex-col justify-center max-w-md mx-auto">
      
        <h1 className=" text-primary text-4xl font-semibold my-4 text-center">
          Profile
        </h1>
        <div className="justify-center font-semibold text-gray-700 items-center ">
          <div>
            Email:
            <p className="rounded-lg text-gray-600 font-normal bg-gray-300 p-2 my-2">
              {profile.email || "Not set"}
            </p>
          </div>
          <div>
            Name:
            <p className="rounded-lg bg-gray-300 p-2  my-2 text-gray-600 font-normal">
              {profile.name || "Not set"}
            </p>
          </div>
          <div>
            {" "}
            City:
            <p className="rounded-lg bg-gray-300 p-2  my-2 text-gray-600 font-normal">
              {profile.city || "Not set"}
            </p>
          </div>
          <div>
            {" "}
            Country:
            <p className="rounded-lg bg-gray-300 p-2  my-2 text-gray-600 font-normal">
              {profile.country || "Not set"}
            </p>
          </div>
        </div>
        <div >
          <Link
            href={"/profile/edit"}
            className="mt-4 bg-primary text-white px-8 py-2  hover:bg-yellow-500  rounded-md font-semibold flex justify-center "
          >
            Edit
          </Link>
        </div>
      
    </section>
  );
}
