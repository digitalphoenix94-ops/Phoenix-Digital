// Form definitions. Change labels, options or add fields here.
// Where submissions go is set by environment variables (see README).
import type { FormConfig } from "./types";
import { theCommon } from "./the-common";

export const serviceOptions = [
  "Activations & BTL",
  "ATL & Outdoor",
  "Influencer Marketing",
  "Talent Representation",
  "Retail & Shopper",
  "Brand Launches",
  "Pitch Writing",
  "Digital & E-Commerce",
  "The Common",
  "Not sure yet",
];

/** Budget ranges in KES. Edit freely. */
export const budgetOptions = [
  "Under KES 250,000",
  "KES 250,000 – 1,000,000",
  "KES 1,000,000 – 5,000,000",
  "KES 5,000,000+",
  "Not sure yet",
];

export const contactForm: FormConfig = {
  id: "brief",
  subject: "New brief from the Phoenix Digital website",
  submitLabel: "Send brief",
  successMessage: "Thanks. Your brief is in. We'll be in touch soon.",
  endpoint: "main",
  fields: [
    { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", half: true },
    { name: "company", label: "Company", type: "text", autoComplete: "organization", half: true },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+254 7XX XXX XXX", half: true },
    { name: "service", label: "Service of interest", type: "select", required: true, options: serviceOptions, half: true },
    { name: "budget", label: "Budget range", type: "select", options: budgetOptions, half: true },
    { name: "message", label: "Tell us about the brief", type: "textarea", required: true, placeholder: "What are you launching or growing, who is it for, and when?" },
  ],
};

const areaOptions = [...theCommon.areas, "Other (Limuru area)"];

export const ticketForm: FormConfig = {
  id: "the-common-ticket",
  subject: "The Common: ticket reservation",
  submitLabel: "Reserve my ticket",
  successMessage: "You're on the list. We'll confirm your ticket by phone or email.",
  endpoint: "common",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+254 7XX XXX XXX", half: true },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
    { name: "area", label: "Estate / area", type: "select", required: true, options: areaOptions },
  ],
};

export const vendorForm: FormConfig = {
  id: "the-common-vendor",
  subject: "The Common: vendor slot booking",
  submitLabel: "Book a vendor slot",
  successMessage: "Thanks. We've received your vendor request and will be in touch to confirm your slot.",
  endpoint: "common",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name", half: true },
    { name: "business", label: "Business name", type: "text", required: true, autoComplete: "organization", half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+254 7XX XXX XXX", half: true },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
    { name: "category", label: "Business category", type: "select", required: true, options: theCommon.vendors.categories, half: true },
    { name: "area", label: "Estate / area", type: "select", required: true, options: areaOptions, half: true },
  ],
};

export const venueForm: FormConfig = {
  id: "the-common-venue",
  subject: "The Common: next venue suggestion",
  submitLabel: "Suggest it",
  successMessage: "Thanks, neighbour. We'll take a look.",
  endpoint: "common",
  fields: [
    { name: "venue", label: "Where should the next sundowner be?", type: "text", required: true, placeholder: "Venue name and area" },
    { name: "name", label: "Your name (optional)", type: "text", autoComplete: "name", half: true },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email", half: true },
  ],
};
