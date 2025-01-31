"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/profile");
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-4">
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleLogin}>
        {error && <p className="text-red-500">{error}</p>}
        <p className="font-semibold text-gray-700">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full border border-gray-300 rounded p-2 mb-4"
        />
        <p className="font-semibold text-gray-700">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full border border-gray-300 rounded p-2 mb-4"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-yellow-500"
        >
          Login
        </button>
      
        <div className="text-gray-500 flex my-4 justify-center">
          Don't have an account?
          <a
            href="/register"
            className="font-semibold text-gray-900 ml-1 hover:text-gray-600"
          >
            Register
          </a>
        </div>
      </form>
    </section>
  );
}
