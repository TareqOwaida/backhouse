"use server";

import {
  deliverInquiry,
  emptyInquiry,
  validateInquiry,
  type ContactFormState,
  type ContactInquiry,
} from "@/lib/contact";

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitInquiry(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactInquiry = {
    name: field(formData, "name"),
    restaurant: field(formData, "restaurant"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    locations: field(formData, "locations"),
    situation: field(formData, "situation"),
    message: field(formData, "message"),
    plan: field(formData, "plan"),
  };

  // Honeypot: real users never see or fill this field.
  if (field(formData, "website")) {
    return { status: "success", errors: {}, values: emptyInquiry };
  }

  const errors = validateInquiry(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: "A few fields need attention.",
      values,
    };
  }

  try {
    await deliverInquiry(values);
    return { status: "success", errors: {}, values: emptyInquiry };
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return {
      status: "error",
      errors: {},
      message:
        "We couldn't send your message just now. Email us directly and we'll pick it up within a business day.",
      values,
    };
  }
}
