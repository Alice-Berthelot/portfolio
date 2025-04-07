import ContactForm from "@/components/contactform";
import { ScrollDownAnimation } from "@/components/scrolldownanimation";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

// add recaptcha
// secure email type
// secure message content too
// add variables with Vercel: just create the variables on Vercel/Environement Variables in the project settings
// add auto-reply on EmailJs

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <section className="px-6 md:px-12 lg:px-16 pt-6 mb-20">
      <ScrollDownAnimation>
        <Title title={t("title")} />
      </ScrollDownAnimation>
      <ScrollDownAnimation>
        <ContactForm
          ariaLabel={t("form.aria-label")}
          legend={t("form.legend")}
          nameLabel={t("form.name-label")}
          namePlaceholder={t("form.name-placeholder")}
          emailLabel={t("form.email-label")}
          emailPlaceholder={t("form.email-placeholder")}
          messageLabel={t("form.message-label")}
          messagePlaceholder={t("form.message-placeholder")}
          submitButton={t("form.submit-button")}
          successMessage={t("form.success")}
          failureMessage={t("form.failure")}
        />
        <p className="mt-8 mb-2 text-ghost-white/75 italic ">
          {t("alternative")}{" "}
          <a
            href="mailto:aliceberthelot.pro@gmail.com"
            className="underline underline-offset-4"
          >
            aliceberthelot.pro@gmail.com
          </a>.
        </p>
      </ScrollDownAnimation>
    </section>
  );
}
