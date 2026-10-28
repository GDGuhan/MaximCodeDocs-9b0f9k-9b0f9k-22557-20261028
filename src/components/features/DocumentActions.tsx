import { useRef, useState } from "react";
import { GeneratedDoc } from "@/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { toPng, toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import {
  Download,
  FileImage,
  Printer,
  Share2,
  Copy,
  FileText,
  CheckCircle,
} from "lucide-react";

interface DocumentActionsProps {
  doc: GeneratedDoc;
  documentId: string;  // "certificate-document" | "offerletter-document"
  type: "certificate" | "offerletter";
}

const DocumentActions = ({ doc, documentId, type }: DocumentActionsProps) => {
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState<string | null>(null);

  const getElement = () => document.getElementById(documentId);

  const handleDownloadPNG = async () => {
    const el = getElement();
    if (!el) return;
    setExporting("png");
    try {
      const dataUrl = await toPng(el, { quality: 1, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `maxim-code-${type}-${doc.certificateId}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("PNG downloaded successfully!");
    } catch (err) {
      toast.error("PNG export failed. Please try again.");
      console.error("PNG export error:", err);
    }
    setExporting(null);
  };

  const handleDownloadJPG = async () => {
    const el = getElement();
    if (!el) return;
    setExporting("jpg");
    try {
      const dataUrl = await toJpeg(el, { quality: 0.95, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `maxim-code-${type}-${doc.certificateId}.jpg`;
      link.href = dataUrl;
      link.click();
      toast.success("JPG downloaded successfully!");
    } catch (err) {
      toast.error("JPG export failed. Please try again.");
      console.error("JPG export error:", err);
    }
    setExporting(null);
  };

  const handleDownloadPDF = async () => {
    const el = getElement();
    if (!el) return;
    setExporting("pdf");
    try {
      const dataUrl = await toPng(el, { quality: 1, pixelRatio: 2 });
      const isCert = type === "certificate";
      const orientation = isCert ? "landscape" : "portrait";
      const pdf = new jsPDF({ orientation, unit: "px", format: isCert ? [1122, 794] : [794, 1123] });
      const w = pdf.internal.pageSize.getWidth();
      const h = pdf.internal.pageSize.getHeight();
      pdf.addImage(dataUrl, "PNG", 0, 0, w, h);
      pdf.save(`maxim-code-${type}-${doc.certificateId}.pdf`);
      toast.success("PDF downloaded successfully!");
    } catch (err) {
      toast.error("PDF export failed. Please try again.");
      console.error("PDF export error:", err);
    }
    setExporting(null);
  };

  const handlePrint = () => {
    const el = getElement();
    if (!el) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    const isCert = type === "certificate";
    printWindow.document.write(`
      <html>
        <head>
          <title>Maxim Code – ${isCert ? "Certificate" : "Offer Letter"}</title>
          <style>
            @page { size: ${isCert ? "A4 landscape" : "A4 portrait"}; margin: 0; }
            body { margin: 0; padding: 0; }
            #print-content { transform-origin: top left; }
          </style>
        </head>
        <body>
          <div id="print-content">${el.outerHTML}</div>
          <script>
            window.onload = function() {
              window.print();
              window.close();
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
    toast.success("Print dialog opened!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(doc.qrUrl).then(() => {
      setCopied(true);
      toast.success("Verification link copied!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Maxim Code ${type === "certificate" ? "Certificate" : "Offer Letter"}`,
          text: `Verify this document at: ${doc.qrUrl}`,
          url: doc.qrUrl,
        });
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const isExporting = exporting !== null;

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-3">
      <Button
        size="sm"
        variant="outline"
        onClick={handleDownloadPDF}
        disabled={isExporting}
        className="border-[#0f2d5e] text-[#0f2d5e] hover:bg-[#0f2d5e] hover:text-white transition-all h-8 text-xs font-semibold"
      >
        {exporting === "pdf" ? (
          <span className="animate-spin w-3 h-3 border border-current border-t-transparent rounded-full mr-1" />
        ) : (
          <FileText size={13} className="mr-1" />
        )}
        PDF
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={handleDownloadPNG}
        disabled={isExporting}
        className="border-[#0f2d5e] text-[#0f2d5e] hover:bg-[#0f2d5e] hover:text-white transition-all h-8 text-xs font-semibold"
      >
        {exporting === "png" ? (
          <span className="animate-spin w-3 h-3 border border-current border-t-transparent rounded-full mr-1" />
        ) : (
          <FileImage size={13} className="mr-1" />
        )}
        PNG
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={handleDownloadJPG}
        disabled={isExporting}
        className="border-[#0f2d5e] text-[#0f2d5e] hover:bg-[#0f2d5e] hover:text-white transition-all h-8 text-xs font-semibold"
      >
        {exporting === "jpg" ? (
          <span className="animate-spin w-3 h-3 border border-current border-t-transparent rounded-full mr-1" />
        ) : (
          <Download size={13} className="mr-1" />
        )}
        JPG
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={handlePrint}
        disabled={isExporting}
        className="border-gray-400 text-gray-600 hover:bg-gray-100 transition-all h-8 text-xs font-semibold"
      >
        <Printer size={13} className="mr-1" />
        Print
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={handleCopyLink}
        className="border-[#c8a84b] text-[#a8842a] hover:bg-amber-50 transition-all h-8 text-xs font-semibold"
      >
        {copied ? (
          <CheckCircle size={13} className="mr-1 text-green-600" />
        ) : (
          <Copy size={13} className="mr-1" />
        )}
        {copied ? "Copied!" : "Copy Link"}
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={handleShare}
        className="border-[#c8a84b] text-[#a8842a] hover:bg-amber-50 transition-all h-8 text-xs font-semibold"
      >
        <Share2 size={13} className="mr-1" />
        Share
      </Button>
    </div>
  );
};

export default DocumentActions;
