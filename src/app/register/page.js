"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/callback",
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // memasukan data user ke database
    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: data.user.id, email: data.user.email }]);

      if (profileError) {
        setError("Failed to create profile: " + profileError.message);
      } else {
        setMessage(
          "Registration successful! Please check your email for confirmation."
        );
        router.push("/dashboard"); // Redirect ke dashboard
      }
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-4">
        Register
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleRegister}>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
        <p className="font-semibold text-gray-700">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <p className="font-semibold text-gray-700">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="mt-4 hover:bg-yellow-500" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
