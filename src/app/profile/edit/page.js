"use client"; 
import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

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
        .select("name, city, country")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile data.");
      } else {
        setName(data.name || "");
        setCity(data.city || "");
        setCountry(data.country || "");
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        city,
        country,
      })
      .eq("id", user.id);

    if (error) {
      console.error("Error", error.message);
      setError("Failed to update profile.");
    } else {
      router.push("/profile"); 
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <section className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-primary text-center">Edit Profile</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSave}>
        <label className="block mt-4">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />
        
        <label className="block mt-4">City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />

        <label className="block mt-4">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}