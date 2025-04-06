"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

type ContactFormProps = {
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
    <form ref={form} onSubmit={sendEmail}>
      <fieldset>
        <legend>{legend}</legend>
        <label htmlFor="name">
          {nameLabel} <span className="text-joyful">*</span>
        </label>
        <input
          type="text"
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
          name="message"
          id="message"
          placeholder={messagePlaceholder}
          required
        ></textarea>
        <button type="submit">{submitButton}</button>
      </fieldset>
    </form>
  );
}
