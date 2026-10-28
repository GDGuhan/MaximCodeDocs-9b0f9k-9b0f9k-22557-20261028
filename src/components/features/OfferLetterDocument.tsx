import { forwardRef } from "react";
import { GeneratedDoc } from "@/types";
import { formatDate, calculateDuration, getCurrentDate } from "@/lib/documentUtils";
import { getResponsibilities } from "@/constants/skills";
import MaximCodeLogo from "./MaximCodeLogo";
import MSMELogo from "./MSMELogo";
import SignatureBlock from "./SignatureBlock";

interface OfferLetterDocumentProps {
  doc: GeneratedDoc;
}

const OfferLetterDocument = forwardRef<HTMLDivElement, OfferLetterDocumentProps>(
  ({ doc }, ref) => {
    const { intern, certificateId, issueDate } = doc;
    const responsibilities = getResponsibilities(intern.domain);
    const duration = calculateDuration(intern.startDate, intern.endDate);

    return (
      <div
        ref={ref}
        id="offerletter-document"
        style={{
          width: "794px",
          minHeight: "1123px",
          background: "#ffffff",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Side accent bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "6px",
          height: "100%",
          background: "linear-gradient(180deg, #0f2d5e 0%, #1a4a8a 50%, #c8a84b 100%)",
        }} />

        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)",
          padding: "24px 40px 20px 46px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <MaximCodeLogo size={52} />
            <div>
              <h1 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "800", margin: 0, letterSpacing: "2px" }}>MAXIM CODE</h1>
              <p style={{ color: "#c8a84b", fontSize: "9px", margin: "2px 0 0", letterSpacing: "2px", fontWeight: "600" }}>BUILDING FUTURE INNOVATORS</p>
              <p style={{ color: "#93c5fd", fontSize: "8px", margin: "3px 0 0", letterSpacing: "0.5px" }}>www.maximcode.in | info@maximcode.in</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ background: "rgba(200,168,75,0.15)", border: "1px solid #c8a84b", borderRadius: "4px", padding: "6px 12px", display: "inline-block" }}>
              <p style={{ color: "#c8a84b", fontSize: "8px", letterSpacing: "2px", fontWeight: "700", margin: 0 }}>INTERNSHIP OFFER LETTER</p>
              <p style={{ color: "#ffffff", fontSize: "8px", margin: "2px 0 0" }}>Ref: {certificateId}</p>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ height: "3px", background: "linear-gradient(90deg, #c8a84b, #f0d060, #c8a84b)" }} />

        {/* Body */}
        <div style={{ padding: "28px 44px 20px 46px" }}>

          {/* Date & Recipient */}
          <div style={{ marginBottom: "18px" }}>
            <p style={{ fontSize: "11px", color: "#6b7280", margin: "0 0 12px" }}>Date: <strong style={{ color: "#1f2937" }}>{issueDate}</strong></p>
            <p style={{ fontSize: "12px", color: "#1f2937", margin: 0 }}>To,</p>
            <p style={{ fontSize: "16px", fontWeight: "800", color: "#0f2d5e", margin: "4px 0 2px", letterSpacing: "0.5px" }}>{intern.name}</p>
            <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>Applicant</p>
          </div>

          {/* Subject */}
          <div style={{
            background: "linear-gradient(90deg, #f0f4ff, #e8f0ff)",
            border: "1px solid #c8d8ff",
            borderLeft: "4px solid #0f2d5e",
            borderRadius: "0 6px 6px 0",
            padding: "10px 16px",
            marginBottom: "18px",
          }}>
            <p style={{ fontSize: "12px", fontWeight: "700", color: "#0f2d5e", margin: 0 }}>
              Subject: Internship Offer Letter – {intern.role} | {intern.domain}
            </p>
          </div>

          {/* Greeting */}
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.7", margin: "0 0 6px" }}>
            Dear <strong>{intern.name}</strong>,
          </p>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.7", margin: "0 0 14px" }}>
            Greetings from <strong>Maxim Code</strong>.
          </p>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.7", margin: "0 0 16px" }}>
            We are pleased to offer you the position of <strong>{intern.role}</strong> in the domain of <strong>{intern.domain}</strong> at <strong>Maxim Code</strong>. We are confident that your skills and enthusiasm will be a valuable addition to our team.
          </p>

          {/* Internship Details Table */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "10px", fontWeight: "700", color: "#0f2d5e", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 8px", borderBottom: "2px solid #c8a84b", paddingBottom: "4px" }}>
              Internship Details
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 20px" }}>
              {[
                ["Position / Role", intern.role],
                ["Domain", intern.domain],
                ["Internship / Course", intern.internship],
                ["Work Mode", "Remote / Hybrid"],
                ["Start Date", formatDate(intern.startDate)],
                ["End Date", formatDate(intern.endDate)],
                ["Duration", duration],
                ["Reference ID", certificateId],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "4px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <span style={{ fontSize: "10px", color: "#9ca3af", fontWeight: "600", minWidth: "110px", flexShrink: 0 }}>{label}:</span>
                  <span style={{ fontSize: "11px", color: "#1f2937", fontWeight: "600" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "10px", fontWeight: "700", color: "#0f2d5e", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 8px", borderBottom: "2px solid #c8a84b", paddingBottom: "4px" }}>
              Roles &amp; Responsibilities
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {responsibilities.map((r, i) => (
                <li key={i} style={{ fontSize: "11px", color: "#374151", lineHeight: "1.65", margin: "0 0 3px" }}>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "10px", fontWeight: "700", color: "#0f2d5e", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 8px", borderBottom: "2px solid #c8a84b", paddingBottom: "4px" }}>
              What You'll Receive
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px" }}>
              {[
                "✦  Internship Completion Certificate",
                "✦  Live Project Exposure",
                "✦  Expert Mentorship &amp; Guidance",
                "✦  Skill Development &amp; Training",
                "✦  Letter of Recommendation (on merit)",
                "✦  Career Growth Opportunities",
              ].map((b, i) => (
                <p key={i} style={{ fontSize: "11px", color: "#374151", margin: "0 0 2px", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              ))}
            </div>
          </div>

          {/* Closing */}
          <p style={{ fontSize: "11.5px", color: "#374151", lineHeight: "1.75", marginBottom: "16px", fontStyle: "italic", borderLeft: "3px solid #c8a84b", paddingLeft: "12px", background: "#fffdf5" }}>
            We welcome you to the Maxim Code Internship Program and look forward to your valuable contributions. We wish you a productive learning experience and professional growth throughout your internship journey.
          </p>

          {/* Signature */}
          <div style={{ marginBottom: "14px" }}>
            <p style={{ fontSize: "11.5px", color: "#374151", margin: "0 0 12px" }}>
              Yours sincerely,
            </p>
            <SignatureBlock compact />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#f8fafc",
          borderTop: "2px solid #e5e7eb",
          padding: "10px 46px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: "8px", color: "#6b7280", margin: 0 }}>Maxim Code | Building Future Innovators | www.maximcode.in</p>
            <p style={{ fontSize: "8px", color: "#9ca3af", margin: "1px 0 0" }}>This is an official internship offer letter. Document ID: {certificateId}</p>
          </div>
          <MSMELogo scale={0.6} />
        </div>
      </div>
    );
  }
);

OfferLetterDocument.displayName = "OfferLetterDocument";
export default OfferLetterDocument;
