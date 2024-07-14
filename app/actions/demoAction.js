"use server";
import { cookies } from "next/headers";
import { createClient } from "../utils/supabase/client";
import { sendEmail } from "./sendEmailAction";

export async function demoDetails(data) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { status } = await supabase.from("DemoDetails").insert(data);
  if (status === 201) {
    sendEmail(data, "Demo Details");
  }

  return status;
}
