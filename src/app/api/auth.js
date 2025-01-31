import { supabase } from "@/lib/supabaseClient";

export const registerUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Sign-up error:", error.message);
    return { data: null, error };
  }


  let { data: sessionData } = await supabase.auth.getSession();
  let user = sessionData?.session?.user;

  if (!user) {
    console.error("User ID not found after signup, retrying");
    return { data: null, error: "User ID not found after signup" };
  }

 
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([{ id: user.id, name: "", city: "", country: "" }]);

  if (profileError) {
    console.error("Error inserting profile:", profileError.message);
  } else {
    console.log("Profile successfully inserted:", profileData);
  }

  return { data: profileData, error: profileError };
};



export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};
