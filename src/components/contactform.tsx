"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

type ContactFormProps = {
  ariaLabel: string;
  legend: string;

  nameLabel: string;
  namePlaceholder: string;

  emailLabel: string;
  emailPlaceholder: string;

  messageLabel: string;
  messagePlaceholder: string;

  submitButton: string;

  successMessage: string;
  failureMessage: string;
};

export default function ContactForm({
  ariaLabel,
  legend,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitButton,
  successMessage,
  failureMessage,
}: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("Email form data are missing!");
    }

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      throw new Error("EmailJS service ID is missing!");
    }

    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      throw new Error("EmailJS template ID is missing!");
    }

    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      throw new Error("EmailJS public key is missing!");
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(successMessage);
          form.current?.reset();
        },
        (error) => {
          alert(failureMessage);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} aria-label={ariaLabel}>
      <fieldset className="rounded-md border border-solid border-ghost-white/30 px-8 md:px-10 py-8 w-4/5 m-auto flex flex-col">
        <legend>{legend}</legend>
        <label htmlFor="name">
          {nameLabel} <span className="text-joyful">*</span>
        </label>
        <input
          type="text"
          maxLength={256}
          name="name"
          id="name"
          placeholder={namePlaceholder}
          required
        ></input>
        <label>
          {emailLabel} <span className="text-joyful">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={emailPlaceholder}
          required
        ></input>
        <label htmlFor="message">
          {messageLabel} <span className="text-joyful">*</span>
        </label>
        <textarea
          maxLength={5000}
          name="message"
          id="message"
          placeholder={messagePlaceholder}
          required
        ></textarea>
          <button
            type="submit"
            className="w-32 inline-block flex items-center justify-center gap-2 py-4 lg:py-3 px-6 rounded-md border border-solid border-ghost-white/30 text-base md:text-sm lg:text-base font-bold download-button hover:dark-charcoal"          >
            {submitButton}
          </button>
      </fieldset>
    </form>
  );
}
