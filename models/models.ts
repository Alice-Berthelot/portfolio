export type LocaleValue = "en" | "fr";

export type LocalizedContent = {
  language: LocaleValue;
  value: string;
};

export interface ProjectSummary {
  key: string;
  title: string;
  description: string;
  images: string[];
}
