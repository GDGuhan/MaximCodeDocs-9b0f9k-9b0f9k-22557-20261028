import { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import InputForm from "@/components/features/InputForm";
import CertificateDocument from "@/components/features/CertificateDocument";
import OfferLetterDocument from "@/components/features/OfferLetterDocument";
import DocumentActions from "@/components/features/DocumentActions";
import { InternData, GeneratedDoc } from "@/types";
import { buildGeneratedDoc } from "@/lib/documentUtils";
import { Award, FileText, CheckCircle, ChevronDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [generatedDoc, setGeneratedDoc] = useState<GeneratedDoc | null>(null);
  const [loading, setLoading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (data: InternData) => {
    setLoading(true);
    setTimeout(() => {
      const doc = buildGeneratedDoc(data);
      setGeneratedDoc(doc);
      setLoading(false);
      setTimeout(() => {
        docsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src={heroBanner}
          alt="Maxim Code Document Generator"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f42]/80 via-[#0f2d5e]/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] mb-2">MAXIM CODE OFFICIAL</p>
          <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight max-w-lg">
            Internship Document<br />
            <span className="text-[#c8a84b]">Generator System</span>
          </h2>
          <p className="text-blue-200 text-sm mt-2 max-w-sm">
            Generate professional Completion Certificates &amp; Offer Letters instantly.
          </p>
        </div>
        {/* Stats */}
        <div className="absolute bottom-4 right-6 hidden md:flex gap-4">
          {[
            { icon: Award, label: "Certificate", sub: "A4 Landscape" },
            { icon: FileText, label: "Offer Letter", sub: "A4 Portrait" },
            { icon: CheckCircle, label: "QR Verified", sub: "Instant" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center">
              <Icon size={14} className="text-[#c8a84b] mx-auto mb-1" />
              <p className="text-white text-[10px] font-bold">{label}</p>
              <p className="text-blue-200 text-[9px]">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Input Form */}
        <div className="max-w-3xl mx-auto mb-10">
          <InputForm onGenerate={handleGenerate} loading={loading} />
        </div>

        {/* Scroll hint */}
        {!generatedDoc && (
          <div className="text-center py-4">
            <div className="inline-flex flex-col items-center gap-1 text-gray-400">
              <p className="text-xs font-medium">Fill the form above to generate documents</p>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        )}

        {/* Generated Documents */}
        {generatedDoc && (
          <div ref={docsRef} className="space-y-12">
            {/* Section header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 border border-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                <CheckCircle size={16} />
                Documents Generated Successfully
              </div>
              <h3 className="text-2xl font-extrabold text-[#0f2d5e]">Your Documents Are Ready</h3>
              <p className="text-gray-500 text-sm mt-1">Certificate ID: <span className="font-mono font-bold text-[#0f2d5e]">{generatedDoc.certificateId}</span></p>
            </div>

            {/* Certificate Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0f2d5e] rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-[#c8a84b]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0f2d5e]">Internship Completion Certificate</h4>
                  <p className="text-xs text-gray-500">A4 Landscape · Blue &amp; Gold Premium Design · QR Verified</p>
                </div>
              </div>
              {/* Scrollable horizontal container for A4 landscape */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto p-4 bg-gray-50">
                  <div className="flex justify-center" style={{ minWidth: "1140px" }}>
                    <CertificateDocument ref={certRef} doc={generatedDoc} />
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-white">
                  <DocumentActions
                    doc={generatedDoc}
                    documentId="certificate-document"
                    type="certificate"
                  />
                </div>
              </div>
            </div>

            {/* Offer Letter Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#a8842a] rounded-lg flex items-center justify-center">
                  <FileText size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#a8842a]">Internship Offer Letter</h4>
                  <p className="text-xs text-gray-500">A4 Portrait · Single Page · Professional Corporate Format</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto p-4 bg-gray-50">
                  <div className="flex justify-center" style={{ minWidth: "820px" }}>
                    <OfferLetterDocument ref={offerRef} doc={generatedDoc} />
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-white">
                  <DocumentActions
                    doc={generatedDoc}
                    documentId="offerletter-document"
                    type="offerletter"
                  />
                </div>
              </div>
            </div>

            {/* Verification Block */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#fffdf5] to-[#fff8e1] border border-[#c8a84b]/40 rounded-2xl p-6">
              <h5 className="text-sm font-bold text-[#0f2d5e] mb-2 tracking-wide uppercase">QR Verification Info</h5>
              <p className="text-xs text-gray-600 mb-2">These documents include a QR code that links to the Maxim Code verification portal. Share the link below to let anyone verify authenticity.</p>
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
                <span className="text-xs font-mono text-[#0f2d5e] flex-1 truncate">{generatedDoc.qrUrl}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-[#0a1f42] text-center py-6 border-t border-[#c8a84b]/20">
        <p className="text-[#c8a84b] text-xs font-semibold tracking-widest">MAXIM CODE</p>
        <p className="text-blue-300 text-[10px] mt-1">Building Future Innovators · www.maximcode.in</p>
        <p className="text-gray-600 text-[9px] mt-1">© {new Date().getFullYear()} Maxim Code. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
