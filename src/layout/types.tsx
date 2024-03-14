// types.ts
export type Company = {
    id: number;
    companyName: string;
    title: string;
    startDate: string;
    endDate: string;
    FOW: string;
    projects: {
      projectName: string;
      projectDesc?: string;
      projectLink?: string;
    }[];
    logo : string;
    duties: string[];
    tools: string[];
    // ... add other properties
  };