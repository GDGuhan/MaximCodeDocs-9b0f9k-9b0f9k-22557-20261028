import { forwardRef } from "react";
import { GeneratedDoc } from "@/types";
import { formatDate, getCertDescription } from "@/lib/documentUtils";
import MaximCodeLogo from "./MaximCodeLogo";
import MSMELogo from "./MSMELogo";
import SignatureBlock from "./SignatureBlock";
import { QRCodeSVG } from "qrcode.react";

interface CertificateDocumentProps {
  doc: GeneratedDoc;
}

const CertificateDocument = forwardRef<HTMLDivElement, CertificateDocumentProps>(
  ({ doc }, ref) => {
    const { intern, certificateId, issueDate, skills, qrUrl } = doc;

    return (
      <div
        ref={ref}
        id="certificate-document"
        style={{
          width: "1122px",
          minHeight: "794px",
          background: "#ffffff",
          position: "relative",
          fontFamily: "Georgia, 'Times New Roman', serif",
          overflow: "hidden",
        }}
      >
        {/* Outer Border – Gold */}
        <div style={{
          position: "absolute", inset: "10px",
          border: "4px solid #c8a84b",
          borderRadius: "4px",
          pointerEvents: "none",
          zIndex: 10,
        }} />
        {/* Inner Border – Navy */}
        <div style={{
          position: "absolute", inset: "18px",
          border: "1.5px solid #0f2d5e",
          borderRadius: "2px",
          pointerEvents: "none",
          zIndex: 10,
        }} />

        {/* Corner Ornaments */}
        {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
          <div key={i} style={{
            position: "absolute",
            top: pos.includes("top") ? "3px" : "auto",
            bottom: pos.includes("bottom") ? "3px" : "auto",
            left: pos.includes("left") ? "3px" : "auto",
            right: pos.includes("right") ? "3px" : "auto",
            width: "32px",
            height: "32px",
            zIndex: 11,
          }}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d={
                  i === 0 ? "M2 30 L2 2 L30 2" :
                  i === 1 ? "M30 30 L30 2 L2 2" :
                  i === 2 ? "M2 2 L2 30 L30 30" :
                  "M30 2 L30 30 L2 30"
                }
                stroke="#c8a84b"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        ))}

        {/* Background watermark pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(15,45,94,0.03) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(200,168,75,0.05) 0%, transparent 60%)",
          zIndex: 0,
        }} />

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 5, padding: "40px 60px 36px" }}>

          {/* Top Row: Logo | Title Center | QR */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>

            {/* Logo Left */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <MaximCodeLogo size={64} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#0f2d5e", fontFamily: "Arial, sans-serif", letterSpacing: "1.5px", margin: 0 }}>MAXIM CODE</p>
                <p style={{ fontSize: "8px", color: "#c8a84b", fontFamily: "Arial, sans-serif", letterSpacing: "1px", margin: 0 }}>Building Future Innovators</p>
              </div>
            </div>

            {/* Title Center */}
            <div style={{ textAlign: "center", flex: 1, padding: "0 30px" }}>
              <div style={{ display: "inline-block", background: "linear-gradient(135deg, #0f2d5e, #1a4a8a)", padding: "6px 30px", borderRadius: "2px", marginBottom: "8px" }}>
                <p style={{ color: "#ffffff", fontSize: "10px", letterSpacing: "4px", fontFamily: "Arial, sans-serif", fontWeight: "600", margin: 0 }}>MAXIM CODE</p>
              </div>
              <h1 style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0f2d5e",
                letterSpacing: "3px",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
                fontFamily: "Georgia, serif",
              }}>Certificate of Completion</h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, #c8a84b)" }} />
                <div style={{ width: "6px", height: "6px", background: "#c8a84b", transform: "rotate(45deg)" }} />
                <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #c8a84b, transparent)" }} />
              </div>
              <p style={{ fontSize: "11px", color: "#6b7280", fontFamily: "Arial, sans-serif", letterSpacing: "2px", marginTop: "6px" }}>
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>
            </div>

            {/* QR Right */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ padding: "6px", border: "1px solid #c8a84b", borderRadius: "4px", background: "#fffdf5" }}>
                <QRCodeSVG value={qrUrl} size={70} fgColor="#0f2d5e" bgColor="#fffdf5" level="M" />
              </div>
              <p style={{ fontSize: "7.5px", color: "#6b7280", fontFamily: "Arial, sans-serif", textAlign: "center", maxWidth: "80px", lineHeight: "1.3", margin: 0 }}>Scan to verify certificate</p>
              <p style={{ fontSize: "7px", color: "#0f2d5e", fontFamily: "Arial, sans-serif", fontWeight: "600", margin: 0 }}>ID: {certificateId}</p>
            </div>
          </div>

          {/* Candidate Name */}
          <div style={{ textAlign: "center", margin: "10px 0 8px" }}>
            <h2 style={{
              fontSize: "46px",
              fontWeight: "700",
              color: "#0f2d5e",
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "2px",
              margin: 0,
              lineHeight: 1.1,
              textShadow: "0 1px 2px rgba(15,45,94,0.1)",
            }}>
              {intern.name || "Candidate Name"}
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "6px" }}>
              <div style={{ height: "2px", width: "100px", background: "linear-gradient(90deg, transparent, #c8a84b)" }} />
              <div style={{ width: "8px", height: "8px", background: "#c8a84b", borderRadius: "50%" }} />
              <div style={{ fontSize: "11px", color: "#c8a84b", fontFamily: "Arial, sans-serif", fontWeight: "700", letterSpacing: "2px" }}>★ ★ ★</div>
              <div style={{ width: "8px", height: "8px", background: "#c8a84b", borderRadius: "50%" }} />
              <div style={{ height: "2px", width: "100px", background: "linear-gradient(90deg, #c8a84b, transparent)" }} />
            </div>
          </div>

          {/* Description */}
          <div style={{ maxWidth: "900px", margin: "0 auto 14px", textAlign: "center" }}>
            <p style={{
              fontSize: "12.5px",
              lineHeight: "1.75",
              color: "#374151",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}>
              {getCertDescription(doc)}
            </p>
          </div>

          {/* Skills */}
          <div style={{ textAlign: "center", marginBottom: "14px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "2px", color: "#0f2d5e", fontFamily: "Arial, sans-serif", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>
              Skills & Technologies Acquired
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px" }}>
              {skills.map((skill) => (
                <span key={skill} style={{
                  padding: "3px 12px",
                  background: "linear-gradient(135deg, #f0f4ff, #e8eeff)",
                  border: "1px solid #c8a84b",
                  borderRadius: "20px",
                  fontSize: "10px",
                  fontWeight: "600",
                  color: "#0f2d5e",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "0.5px",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Internship Details Row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "14px" }}>
            {[
              { label: "Internship", value: intern.internship },
              { label: "Domain", value: intern.domain },
              { label: "Duration", value: `${formatDate(intern.startDate)} – ${formatDate(intern.endDate)}` },
              { label: "Date of Issue", value: issueDate },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "8px", color: "#9ca3af", fontFamily: "Arial, sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 2px 0" }}>{item.label}</p>
                <p style={{ fontSize: "11px", color: "#0f2d5e", fontFamily: "Arial, sans-serif", fontWeight: "700", margin: 0 }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c8a84b 30%, #c8a84b 70%, transparent)", marginBottom: "14px" }} />

          {/* Bottom Row: Signature | Seal | MSME */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>

            {/* Signature Left */}
            <div style={{ minWidth: "160px" }}>
              <SignatureBlock compact />
            </div>

            {/* Corporate Seal Center */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px", height: "80px",
                borderRadius: "50%",
                border: "3px solid #c8a84b",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "radial-gradient(circle, #fffdf5, #fef9e7)",
                margin: "0 auto 4px",
                position: "relative",
              }}>
                <div style={{ position: "absolute", inset: "4px", borderRadius: "50%", border: "1px dashed #c8a84b", opacity: 0.6 }} />
                <p style={{ fontSize: "7px", fontWeight: "800", color: "#0f2d5e", fontFamily: "Arial, sans-serif", letterSpacing: "1px", margin: 0, zIndex: 1 }}>MAXIM CODE</p>
                <p style={{ fontSize: "5px", color: "#c8a84b", fontFamily: "Arial, sans-serif", letterSpacing: "0.5px", margin: "1px 0", zIndex: 1 }}>OFFICIAL SEAL</p>
                <div style={{ width: "20px", height: "1px", background: "#c8a84b", zIndex: 1 }} />
                <p style={{ fontSize: "5px", color: "#6b7280", fontFamily: "Arial, sans-serif", margin: "2px 0 0", zIndex: 1 }}>{certificateId}</p>
              </div>
              <p style={{ fontSize: "8px", color: "#9ca3af", fontFamily: "Arial, sans-serif", letterSpacing: "1px", margin: 0 }}>CORPORATE SEAL</p>
            </div>

            {/* MSME Right */}
            <div style={{ textAlign: "center" }}>
              <MSMELogo scale={0.85} />
            </div>
          </div>

        </div>
      </div>
    );
  }
);

CertificateDocument.displayName = "CertificateDocument";
export default CertificateDocument;
