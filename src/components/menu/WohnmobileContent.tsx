import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import rvC1Tourer from "@/assets/rv-c1-tourer.jpg";
import rvC2Tourer from "@/assets/rv-c2-tourer.jpg";
import rvShowroom from "@/assets/rv-showroom.jpg";
import { MenuItem, Product } from "./types";

interface WohnmobileContentProps {
  activeSubmenu: MenuItem;
  onSubmenuClick: (subItemId: string) => void;
}

const wohnmobileProducts: Product[] = [
  {
    id: "c1-tourer-edition",
    name: "C1-TOURER EDITION +",
    description: "LIGHTWEIGHT / COMFORT",
    price: "ab 59.900€",
    image: rvC1Tourer,
    category: "vollintegriert"
  },
  {
    id: "c2-tourer", 
    name: "C2-TOURER",
    description: "LIGHTWEIGHT / COMFORT",
    price: "ab 65.900€",
    image: rvC2Tourer,
    category: "vollintegriert"
  },
  {
    id: "chic-c-line",
    name: "CHIC C-LINE",
    description: "PREMIUM / STYLE",
    price: "ab 89.900€",
    image: rvC1Tourer,
    category: "vollintegriert"
  },
  {
    id: "chic-e-line",
    name: "CHIC E-LINE", 
    description: "LUXURY / COMFORT",
    price: "ab 95.900€",
    image: rvC2Tourer,
    category: "vollintegriert"
  },
  {
    id: "chic-s-plus",
    name: "CHIC S-PLUS",
    description: "SPACIOUS / LUXURY",
    price: "ab 105.900€",
    image: rvC1Tourer,
    category: "vollintegriert"
  },
  {
    id: "liner-for-two",
    name: "LINER-FOR-TWO",
    description: "COMPACT / ELEGANT",
    price: "ab 125.900€",
    image: rvC2Tourer,
    category: "vollintegriert"
  }
];

export const WohnmobileContent = ({ activeSubmenu, onSubmenuClick }: WohnmobileContentProps) => {
  return (
    <div className="space-y-0">
      {/* Submenu Navigation */}
      {activeSubmenu.submenu?.map((subItem, index) => (
        <button
          key={subItem.id}
          className="w-full flex items-center px-6 py-4 text-left text-lg font-medium text-menu-secondary-foreground border-b border-border hover:bg-menu-secondary/80 transition-colors"
          style={{ animationDelay: `${index * 50}ms` }}
          onClick={() => onSubmenuClick(subItem.id)}
        >
          <span>{subItem.label}</span>
        </button>
      ))}

      {/* Product Grid */}
      <div className="px-6 py-6 space-y-6">
        {wohnmobileProducts.map((product) => (
          <div key={product.id} className="flex items-center space-x-4 bg-background rounded-lg p-4 shadow-sm">
            <div className="w-20 h-16 flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm">
                {product.name}
              </h3>
              {product.price && (
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs font-medium text-foreground">
                    {product.price}
                  </span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">
                    €
                  </span>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Categories */}
      <div className="border-t border-border bg-muted/20">
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            Weitere Kategorien
          </h3>
          <div className="space-y-2">
            {[
              "Übersicht Vollintegrierte Wohnmobile",
              "Übersicht Teilintegriert Wohnmobile", 
              "Händlersuche / Fahrzeugsuche",
              "Probefahrt",
              "Modellberater",
              "Chassis-Auswahl"
            ].map((item, index) => (
              <button
                key={index}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};