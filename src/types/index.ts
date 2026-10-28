export interface InternData {
  name: string;
  domain: string;
  role: string;
  internship: string;
  startDate: string;
  endDate: string;
}

export interface GeneratedDoc {
  certificateId: string;
  issueDate: string;
  skills: string[];
  qrUrl: string;
  intern: InternData;
}

export type DomainKey =
  | "Web Development"
  | "App Development"
  | "Python"
  | "Digital Marketing"
  | "AI/ML"
  | "Other";
