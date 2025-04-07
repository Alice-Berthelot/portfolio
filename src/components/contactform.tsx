"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiMailSend } from "react-icons/bi";

type ContactFormProps = {
  ariaLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  required:string;
  submitButton: string;
  successMessage: string;
  failureMessage: string;
};

export default function ContactForm({
  ariaLabel,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messagePlaceholder,
  required,
  submitButton,
  successMessage,
  failureMessage,
}: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const formStyle = "rounded-md border border-solid border-ghost-white/30 px-8 md:px-10 py-8 w-2/3 m-auto flex flex-col gap-2";
  const inputStyle =
    "rounded-md py-2 px-4 bg-ghost-white/20 focus:bg-ghost-white/40 text-ghost-white/80 focus:text-dark-charcoal focus:font-semibold";
  const labelStyle = "text-lg";

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
          setIsSuccess(true);
          form.current?.reset();
        },
        (error) => {
          alert(failureMessage);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {!isSuccess ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          aria-label={ariaLabel}
          className={formStyle}
        >
          <label htmlFor="name" className={labelStyle}>
            {nameLabel} <span className="text-joyful">*</span>
          </label>
          <input
            type="text"
            maxLength={256}
            name="name"
            id="name"
            placeholder={namePlaceholder}
            className={inputStyle}
            required
          ></input>
          <div className="flex flex-col gap-2 mb-4 mt-4">
            <label>
              {emailLabel} <span className="text-joyful">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={emailPlaceholder}
              className={inputStyle}
              required
            ></input>
          </div>
          <label htmlFor="message">
            Message <span className="text-joyful">*</span>
          </label>
          <textarea
            maxLength={5000}
            name="message"
            id="message"
            placeholder={messagePlaceholder}
            className={`${inputStyle} h-40`}
            required
          ></textarea>
          <p className="text-sm text-ghost-white/60 italic mt-2 pl-2">
            <span className="text-joyful">*</span> {required}
          </p>
          <button
            type="submit"
            className="w-32 flex items-center justify-center gap-2 py-2 lg:py-2 rounded-md border border-solid border-ghost-white/30 text-base md:text-sm lg:text-base font-bold download-button hover:dark-charcoal mt-4 md:self-end md:mr-16"
          >
            {submitButton}
          </button>
        </form>
      ) : (
        <div className={`${formStyle} flex flex-col items-center`}>
          <p className="text-ghost-white/75 text-center text-lg">{successMessage}</p>
          <BiMailSend className="text-joyful text-2xl" />
        </div>
      )}
    </>
  );
}
