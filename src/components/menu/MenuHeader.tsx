import { ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuHeaderProps {
  currentLevel: "main" | "submenu";
  activeSubmenuLabel?: string;
  onBack: () => void;
  onClose: () => void;
}

export const MenuHeader = ({ 
  currentLevel, 
  activeSubmenuLabel, 
  onBack, 
  onClose 
}: MenuHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-primary">
      {currentLevel === "submenu" && (
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-foreground/10"
          onClick={onBack}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      
      {currentLevel === "submenu" && activeSubmenuLabel && (
        <h2 className="text-lg font-medium text-primary-foreground flex-1 text-center">
          {activeSubmenuLabel}
        </h2>
      )}
      
      {currentLevel === "main" && (
        <div className="flex items-center flex-1">
          <div className="text-xl font-bold tracking-wide">
            <span className="text-accent">carthago</span>
            <div className="text-xs font-normal opacity-90">Das Reisemobil.</div>
          </div>
        </div>
      )}
      
      <Button
        variant="ghost"
        size="icon"
        className="text-primary-foreground hover:bg-primary-foreground/10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
    </div>
  );
};