"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace("/dashboard");
      } else {
        router.replace("/login");
      }

      setLoading(false);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          router.replace("/dashboard");
        } else {
          router.replace("/login");
        }
      }
    );

    checkSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return (
    <p>
      {loading ? "Confirming your account, Please wait..." : "Redirecting..."}
    </p>
  );
}
