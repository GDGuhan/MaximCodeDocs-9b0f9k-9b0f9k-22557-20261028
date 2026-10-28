import { GeneratedDoc, InternData } from "@/types";
import { getSkills } from "@/constants/skills";

export function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(1000 + Math.random() * 9000);
  return `MC-${year}-${num}`;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getCurrentDate(): string {
  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function calculateDuration(start: string, end: string): string {
  if (!start || !end) return "N/A";
  const s = new Date(start);
  const e = new Date(end);
  const diffMs = e.getTime() - s.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffDays / 30);
  const days = diffDays % 30;
  if (months === 0) return `${diffDays} Days`;
  if (days === 0) return `${months} Month${months > 1 ? "s" : ""}`;
  return `${months} Month${months > 1 ? "s" : ""} ${days} Day${days > 1 ? "s" : ""}`;
}

export function buildGeneratedDoc(intern: InternData): GeneratedDoc {
  const certId = generateCertificateId();
  return {
    certificateId: certId,
    issueDate: getCurrentDate(),
    skills: getSkills(intern.domain),
    qrUrl: `https://maximcode.in/verify/${certId}`,
    intern,
  };
}

export function getCertDescription(doc: GeneratedDoc): string {
  const { intern, certificateId } = doc;
  const start = formatDate(intern.startDate);
  const end = formatDate(intern.endDate);
  return `This certificate is proudly awarded to ${intern.name} for successfully completing the ${intern.internship} internship in ${intern.domain} at Maxim Code from ${start} to ${end}. During this period, the candidate demonstrated exceptional dedication, professionalism, technical excellence, and a strong commitment to continuous learning and growth. Their contributions and hard work have been an asset to our team, and we recognize their outstanding performance throughout this journey.`;
}
