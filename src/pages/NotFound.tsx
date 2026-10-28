import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileX } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8]">
      <div className="text-center">
        <div className="w-20 h-20 bg-[#0f2d5e] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileX size={36} className="text-[#c8a84b]" />
        </div>
        <h1 className="text-5xl font-extrabold text-[#0f2d5e] mb-3">404</h1>
        <p className="text-lg text-gray-600 mb-6">Page not found</p>
        <Button
          onClick={() => navigate("/")}
          className="bg-[#0f2d5e] hover:bg-[#1a4a8a] text-white font-semibold px-6"
        >
          Back to Document Generator
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
