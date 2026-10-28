import { useState } from "react";
import { InternData } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Award, Sparkles } from "lucide-react";

const DOMAINS = [
  "Web Development",
  "App Development",
  "Python",
  "Digital Marketing",
  "AI/ML",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "UI/UX Design",
];

const ROLES: Record<string, string[]> = {
  "Web Development": ["Frontend Developer Intern", "Full Stack Developer Intern", "Web Developer Intern"],
  "App Development": ["Android Developer Intern", "Flutter Developer Intern", "Mobile App Developer Intern"],
  Python: ["Python Developer Intern", "Backend Developer Intern", "Automation Engineer Intern"],
  "Digital Marketing": ["Digital Marketing Intern", "SEO Analyst Intern", "Social Media Intern"],
  "AI/ML": ["Machine Learning Intern", "AI Researcher Intern", "Data Analyst Intern"],
  "Data Science": ["Data Science Intern", "Data Analyst Intern", "Business Intelligence Intern"],
  "Cybersecurity": ["Cybersecurity Intern", "Security Analyst Intern", "Ethical Hacking Intern"],
  "Cloud Computing": ["Cloud Engineer Intern", "DevOps Intern", "Solutions Architect Intern"],
  "UI/UX Design": ["UI/UX Designer Intern", "Product Design Intern", "Visual Designer Intern"],
};

interface InputFormProps {
  onGenerate: (data: InternData) => void;
  loading: boolean;
}

const InputForm = ({ onGenerate, loading }: InputFormProps) => {
  const [form, setForm] = useState<InternData>({
    name: "",
    domain: "",
    role: "",
    internship: "",
    startDate: "",
    endDate: "",
  });
  const [errors, setErrors] = useState<Partial<InternData>>({});

  const validate = () => {
    const e: Partial<InternData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.domain) e.domain = "Domain is required";
    if (!form.role.trim()) e.role = "Role is required";
    if (!form.internship.trim()) e.internship = "Internship/Course name required";
    if (!form.startDate) e.startDate = "Start date required";
    if (!form.endDate) e.endDate = "End date required";
    if (form.startDate && form.endDate && form.endDate < form.startDate)
      e.endDate = "End date must be after start date";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setErrors({});
    onGenerate(form);
  };

  const handleDomainChange = (val: string) => {
    setForm((f) => ({ ...f, domain: val, role: ROLES[val]?.[0] || "" }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] px-8 py-6">
        <div className="flex items-center gap-3">
          <Sparkles className="text-[#c8a84b]" size={24} />
          <div>
            <h2 className="text-white text-xl font-bold">Generate Internship Documents</h2>
            <p className="text-blue-200 text-sm mt-0.5">Fill in the details to generate both documents</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="md:col-span-2 space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              Intern Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Arjun Sharma"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={`h-11 border-gray-200 focus:border-[#0f2d5e] focus:ring-[#0f2d5e] ${errors.name ? "border-red-400" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Domain */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              Domain <span className="text-red-500">*</span>
            </Label>
            <Select value={form.domain} onValueChange={handleDomainChange}>
              <SelectTrigger className={`h-11 border-gray-200 ${errors.domain ? "border-red-400" : ""}`}>
                <SelectValue placeholder="Select domain" />
              </SelectTrigger>
              <SelectContent>
                {DOMAINS.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.domain && <p className="text-red-500 text-xs">{errors.domain}</p>}
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              Role / Designation <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Frontend Developer Intern"
              value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
              list="role-suggestions"
              className={`h-11 border-gray-200 focus:border-[#0f2d5e] ${errors.role ? "border-red-400" : ""}`}
            />
            {form.domain && ROLES[form.domain] && (
              <datalist id="role-suggestions">
                {ROLES[form.domain].map((r) => <option key={r} value={r} />)}
              </datalist>
            )}
            {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
          </div>

          {/* Internship/Course */}
          <div className="md:col-span-2 space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              Internship / Course Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Full Stack Web Development Internship"
              value={form.internship}
              onChange={(e) => setForm((f) => ({ ...f, internship: e.target.value }))}
              className={`h-11 border-gray-200 focus:border-[#0f2d5e] ${errors.internship ? "border-red-400" : ""}`}
            />
            {errors.internship && <p className="text-red-500 text-xs">{errors.internship}</p>}
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              Start Date <span className="text-red-500">*</span>
            </Label>
            <Input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
              className={`h-11 border-gray-200 focus:border-[#0f2d5e] ${errors.startDate ? "border-red-400" : ""}`}
            />
            {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate}</p>}
          </div>

          {/* End Date */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-semibold text-sm">
              End Date <span className="text-red-500">*</span>
            </Label>
            <Input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
              className={`h-11 border-gray-200 focus:border-[#0f2d5e] ${errors.endDate ? "border-red-400" : ""}`}
            />
            {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate}</p>}
          </div>
        </div>

        {/* Document Preview Indicators */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <Award className="text-[#0f2d5e]" size={22} />
            <div>
              <p className="text-sm font-semibold text-[#0f2d5e]">Completion Certificate</p>
              <p className="text-xs text-gray-500">A4 Landscape · PDF + Image</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-4 border border-amber-100">
            <FileText className="text-[#a8842a]" size={22} />
            <div>
              <p className="text-sm font-semibold text-[#a8842a]">Offer Letter</p>
              <p className="text-xs text-gray-500">A4 Portrait · PDF + Image</p>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-gradient-to-r from-[#0f2d5e] to-[#1a4a8a] hover:from-[#1a4a8a] hover:to-[#0f2d5e] text-white font-semibold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              Generating Documents...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles size={18} />
              Generate Both Documents
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
