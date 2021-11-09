
export type subjectName = "JavaScript" | "Java" | "Swift" | "Python" | "Go" | "HTML/CSS" | "TypeScript";

export type subjectType = {
  subjectName: subjectName;
  subjectId: number;
};

export type categoryName = "FrontEnd" | "BackEnd" | "Android" | "iOS";

export type categoryType = Record<categoryName,subjectType[]>;