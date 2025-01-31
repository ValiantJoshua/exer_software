"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Hero from "../components/layout/Hero";
import Menu from "../components/layout/Menu";
import About from "../components/layout/About";
import ReviewPage from "../components/layout/Review";
import UserReview from "../components/layout/UserReview";

export default function Dashboard() {
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          
          router.replace("/login");
        } else {
          
          setLoading(false);
        }
      } catch (err) {
        console.error("Error checking session:", err);
        router.replace("/login"); 
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section>
      <Hero />
      <Menu />
      <About />
      <div className="my-8 text-center font-semibold">
        <Link
          href={"/addReview"}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-500 "
        >
          Add your review
        </Link>
      </div>
      <UserReview />
    </section>
  );
}
