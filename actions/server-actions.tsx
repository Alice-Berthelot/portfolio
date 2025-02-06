"use server";

import projectData from "@/../data/projects.json";
import backgroundData from "@/../data/background.json";
import {
  LocaleValue,
  ProjectSummary,
  Background,
  Description
} from "../models/models";


// PROJECTS

export async function getLocalizedProjectHome(
  localeId?: LocaleValue
): Promise<ProjectSummary[]> {
  const localeDefault = localeId ?? "en";
  const projectsFiltered = projectData.projects
    .filter((project) => project.end)
    .sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime())
    .slice(0, 3);

  return projectsFiltered.map((project) => ({
    key: project.key,
    title: project.title,
    description:
      project.homeDescription?.find((item) => item.language === localeDefault)
        ?.value || "",
    images: project.images,
  }));
}

export async function getLocalizedProjectSummary(
  localeId?: LocaleValue
): Promise<ProjectSummary[]> {
  const localeDefault = localeId ?? "en";

  return projectData.projects.map((project) => ({
    key: project.key,
    title: project.title,
    description:
      project.description.find((item) => item.language === localeDefault)
        ?.value || "",
    images: project.images,
  }));
}

// export async function getLocalizedProject(projectKey: string, localeId: LocaleValue ='en'): Promise<ProjectLocalized | undefined> {
//     // get the ProjectFull from file based on projectKey
//     const projectData = data.projects.find((project) => project.key === projectKey);

//     if (!projectData)
//         return undefined;

//     const project: Project = {
//         ...projectData,
//         start: new Date(projectData.start),
//     } as Project;

//     // map the ProjectFull to a Project
//     // -> get all basic fields
//     // -> convert all LocalizedContent fields to strings with filter on localeId
//     // -> for filtered items get the string value
//     const localeProject: ProjectLocalized = {
//         key: project.key,
//         start: project.start,
//         end: project.end,
//         title: project.title,
//         logo: project.logo,
//         cardImage: project.cardImage,
//         headerImage: project.headerImage,
//         colour: project.colour,
//         description: getLocalizedStrings(project.description, localeId),
//         quote: getLocalizedQuote(project.quote, localeId),
//         images: project.images,
//         skills: project.skills,
//         objective: getLocalizedStrings(project.objective, localeId),
//         solution: getLocalizedStrings(project.solution, localeId),
//         url: project.url,
//         instaImages: project.instaImages?.map((item) => ({
//             url: item.url,
//             description: item.description,
//             label: getLocalizedString(item.label ?? [], localeId)
//         } as InstaImage)) ?? [],
//     };
//     return localeProject;
// }

// function getLocalizedQuote(quoteFull: QuoteFull, locale: LocaleValue): Quote {
//     return {
//         image: quoteFull.image,
//         text: getLocalizedString(quoteFull.text, locale),
//         name: quoteFull.name,
//         position: getLocalizedString(quoteFull.position, locale)
//     } as Quote;
// }

// export function getLocalizedStrings(localizedContent: LocalizedContent[], locale: LocaleValue): string[] {
//   return localizedContent.filter(content => content.language === locale).map(content => content.value);
// }

// export function getLocalizedString(localizedContent: LocalizedContent[], locale: LocaleValue): string {
//   return localizedContent.find(content => content.language === locale)?.value || "";
// }



// BACKGROUND
export async function getLocalizedBackground(
  localeId?: LocaleValue
): Promise<Background[]> {
  const localeDefault = localeId ?? "en";

  return backgroundData.background.map((year) => ({
    key: year.year,
    year: year.year,
    descriptions: year.descriptions.map((description) => {
      const localizedDesc: Description | undefined = description.find((item) => item.language === localeDefault);
      return {
        value: localizedDesc?.value || "",  
        details: localizedDesc?.details || []  // for now, could not find another method to take into account that some desc may not have details
      };
    }),
  }));
}
