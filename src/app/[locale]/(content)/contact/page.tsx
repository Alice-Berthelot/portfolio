import ContactForm from "@/components/contactform";
import { ScrollDownAnimation } from "@/components/scrolldownanimation";
import Title from "@/components/title";
import { getEmailConfig } from "../../../../../actions/server-actions";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const emailConfig = await getEmailConfig();
  const t = await getTranslations("ContactPage");
  return (
    <section className="px-6 md:px-12 lg:px-16 pt-6 mb-20">
      <ScrollDownAnimation>
        <Title title={t("title")} />
        <p className="text-xl mb-2">{t("description-first")}</p>
        <p className="text-ghost-white/75">{t("description-second")}</p>
        <p className="text-ghost-white/75 mb-10">
          {t("alternative")}{" "}
          <a
            href="mailto:aliceberthelot.pro@gmail.com"
            className="underline underline-offset-4 text-ghost-white/80"
          >
            aliceberthelot.pro@gmail.com
          </a>.
        </p>
      </ScrollDownAnimation>
      <ScrollDownAnimation>
        <ContactForm
          ariaLabel={t("form.aria-label")}
          nameLabel={t("form.name-label")}
          namePlaceholder={t("form.name-placeholder")}
          emailLabel={t("form.email-label")}
          emailPlaceholder={t("form.email-placeholder")}
          messagePlaceholder={t("form.message-placeholder")}
          required={t("form.required")}
          submitButton={t("form.submit-button")}
          successMessage={t("form.success")}
          failureMessage={t("form.failure")}
          publicKey={emailConfig.publicKey}
          serviceId={emailConfig.serviceId}
          templateId={emailConfig.templateId}
          invalidEmail={t("form.invalid-email")}
          invalidName={t("form.invalid-name")}
          invalidMessage={t("form.invalid-message")}
          invalidDefault={t("form.invalid-default")}

        />
      </ScrollDownAnimation>
    </section>
  );
}
