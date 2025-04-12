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
  url: string;
}

export interface Description {
  value: string;
  details?: string[];
}

export interface Background {
  key: string;
  year: string;
  descriptions: Description[];
}

export interface EnvironmentVariables {
  serviceId: string,
  templateId: string,
  publicKey: string,
}
