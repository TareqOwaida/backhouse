export const situationOptions = [
  { value: "current", label: "Books are current, looking to switch" },
  { value: "behind-1-3", label: "Behind by one to three months" },
  { value: "behind-3-plus", label: "Behind by more than three months" },
  { value: "opening", label: "Opening a new restaurant" },
  { value: "other", label: "Something else" },
] as const;

export const locationOptions = [
  { value: "1", label: "One location" },
  { value: "2-3", label: "Two or three" },
  { value: "4-6", label: "Four to six" },
  { value: "7+", label: "Seven or more" },
] as const;

export type ContactInquiry = {
  name: string;
  restaurant: string;
  email: string;
  phone: string;
  locations: string;
  situation: string;
  message: string;
  plan: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactInquiry, string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors: ContactFieldErrors;
  message?: string;
  values: ContactInquiry;
};

export const emptyInquiry: ContactInquiry = {
  name: "",
  restaurant: "",
  email: "",
  phone: "",
  locations: "",
  situation: "",
  message: "",
  plan: "",
};

export const initialContactState: ContactFormState = {
  status: "idle",
  errors: {},
  values: emptyInquiry,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(data: ContactInquiry): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (data.restaurant.trim().length < 2)
    errors.restaurant = "Please enter the restaurant's name.";
  if (!emailPattern.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 7)
    errors.phone = "That phone number looks too short.";
  if (!locationOptions.some((o) => o.value === data.locations))
    errors.locations = "Please choose how many locations you run.";
  if (!situationOptions.some((o) => o.value === data.situation))
    errors.situation = "Please tell us where your books stand.";
  if (data.message.length > 4000)
    errors.message = "Please keep your message under 4,000 characters.";

  return errors;
}

/**
 * Delivers the inquiry to whatever endpoint is configured.
 * Set CONTACT_WEBHOOK_URL to a Slack, Zapier, Make, Formspree or custom
 * endpoint that accepts a JSON POST. Without it the form cannot deliver.
 */
export async function deliverInquiry(inquiry: ContactInquiry) {
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    throw new Error("CONTACT_WEBHOOK_URL is not configured");
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "backhouse.co/contact",
      receivedAt: new Date().toISOString(),
      ...inquiry,
    }),
  });
  if (!response.ok) {
    throw new Error(`Inquiry delivery failed with status ${response.status}`);
  }
}
