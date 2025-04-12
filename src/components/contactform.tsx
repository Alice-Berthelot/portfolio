"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiMailSend } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";

type ContactFormProps = {
  ariaLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  required: string;
  submitButton: string;
  successMessage: string;
  failureMessage: string;
  publicKey: string;
  serviceId: string;
  templateId: string;
  invalidEmail: string;
  invalidName: string;
  invalidMessage: string;
  invalidDefault: string;
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
  publicKey,
  serviceId,
  templateId,
  invalidEmail,
  invalidName,
  invalidMessage,
  invalidDefault,
}: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [emailError, setEmailError] = useState("");

  const formStyle =
    "rounded-md border border-solid border-ghost-white/30 px-8 md:px-10 py-8 w-[94%] md:w-2/3 m-auto flex flex-col gap-2";
  const inputStyle =
    "rounded-md py-2 px-4 bg-ghost-white/20 focus:bg-dark-charcoal text-ghost-white/80 focus:placeholder:text-dark-charcoal border-[0.15px] border-ghost-white/40 focus:border-none focus:font-semibold";

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailInput = form.current?.email.value;

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    if (!token) {
      throw new Error("No token was caught for recaptcha");
    }

    if (!form.current) {
      throw new Error("Contact form data are missing!");
    }

    if (!emailRegex.test(emailInput)) {
      setEmailError("Invalid email address");
      return;
    }
    setEmailError("");

    if (!serviceId) {
      throw new Error("EmailJS service ID is missing!");
    }

    if (!templateId) {
      throw new Error("EmailJS template ID is missing!");
    }

    if (!publicKey) {
      throw new Error("EmailJS public key is missing!");
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
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

  const handleInvalid = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;

    switch (target.name) {
      case "name":
        target.setCustomValidity(invalidName);
        break;
      case "email":
        target.setCustomValidity(invalidEmail);
        break;
      case "message":
        target.setCustomValidity(invalidMessage);
        break;
      default:
        target.setCustomValidity(invalidDefault);
    }
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.setCustomValidity("");
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
          <label htmlFor="name" className="text-lg">
            {nameLabel} <span className="text-joyful">*</span>
          </label>
          <input
            type="text"
            minLength={2}
            maxLength={100}
            name="name"
            id="name"
            placeholder={namePlaceholder}
            className={inputStyle}
            onInvalid={handleInvalid}
            onInput={handleInput}
            required
          ></input>
          <div className="flex flex-col gap-2 mb-4 mt-4">
            <label className="text-lg">
              {emailLabel} <span className="text-joyful">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={emailPlaceholder}
              className={inputStyle}
              onInvalid={handleInvalid}
              onInput={handleInput}
              required
            ></input>
            {emailError && (
              <p className="text-sm text-red-500 italic pl-2">{emailError}</p>
            )}
          </div>
          <label htmlFor="message" className="text-lg">
            Message <span className="text-joyful">*</span>
          </label>
          <textarea
            minLength={2}
            maxLength={5000}
            name="message"
            id="message"
            placeholder={messagePlaceholder}
            className={`${inputStyle} h-40 resize-none`}
            onInvalid={handleInvalid}
            onInput={handleInput}
            required
          ></textarea>
          <p className="text-sm text-ghost-white/60 italic mt-2 pl-2">
            <span className="text-joyful">*</span> {required}
          </p>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
          />
          <button
            type="submit"
            className="w-32 flex items-center justify-center gap-2 py-2 lg:py-2 rounded-md border border-solid border-ghost-white/30 text-base md:text-sm lg:text-base font-bold download-button hover:dark-charcoal mt-4 self-end md:mr-16"
          >
            {submitButton}
          </button>
        </form>
      ) : (
        <div className={`${formStyle} flex flex-col items-center`}>
          <p className="text-ghost-white/75 text-center text-lg">
            {successMessage}
          </p>
          <BiMailSend className="text-joyful text-2xl" />
        </div>
      )}
    </>
  );
}
