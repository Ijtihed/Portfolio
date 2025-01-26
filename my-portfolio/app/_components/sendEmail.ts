"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const text = formData.get("text");
  const subject = formData.get("subject");

  // simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!email.includes("@")) {
    return {
      error: "Invalid email format",
    };
  }
  if (!validateString(name, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(subject, 250)) {
    return {
      error: "Invalid subject",
    };
  }
  if (!validateString(text, 2500)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio <contact@islamtayeb.dev>",
      subject: subject as string,
      reply_to: email as string,
      to: "islam.tayeb@duke.edu",
      text: `From: ${name}\nEmail: ${email}\n\n${text}`,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
