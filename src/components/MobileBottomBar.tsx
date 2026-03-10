import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-lg border-t border-border p-3 flex gap-3">
      <Button variant="ctaOutline" className="flex-1" asChild>
        <a href="tel:[PHONE]">
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </Button>
      <Button variant="cta" className="flex-1" asChild>
        <Link to="/contact">
          <FileText className="w-4 h-4" />
          Free Quote
        </Link>
      </Button>
    </div>
  );
};

export default MobileBottomBar;
