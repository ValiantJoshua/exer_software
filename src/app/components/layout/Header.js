"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between border-2 p-2 mt-3 mb-2 rounded-xl bg-slate-100">
      <div className="flex items-center gap-5">
        <Link className="text-primary font-extrabold text-xl " href={"/"}>
          TAHU BULAT
        </Link>
        <nav className=" items-center  flex gap-8 text-gray-500 font-semibold py-2 justify-start ml-4">
          {user ? (
            <Link
              className="hover:text-gray-800 hover:underline"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
          ) : (
            <Link className="hover:text-gray-800 hover:underline" href={"/"}>
              Home
            </Link>
          )}

          <a className="hover:text-gray-800 hover:underline" href="#Menu">
            Menu
          </a>
          <a className="hover:text-gray-800 hover:underline" href="#About">
            About
          </a>
          <a className="hover:text-gray-800 hover:underline" href="#Review">
            Review
          </a>
        </nav>
      </div>

      <nav className=" flex gap-4 items-center  text-gray-500 hover:text-gray-800 font-semibold">
        {user ? (
          <>
            <Link className="hover:underline" href={"/profile"}>
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className=" border-transparent bg-primary hover:bg-yellow-500 text-white rounded-full"
            >
              Logout
            </button>
          </>
        ) : (
          <nav className="my-2">
            <Link
              href={"/login"}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-500 "
            >
              Login
            </Link>
          </nav>
        )}
      </nav>
    </header>
  );
}
