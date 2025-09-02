import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductDetailView } from "./ProductDetailView";
import rvC1Tourer from "@/assets/rv-c1-tourer.jpg";
import rvC2Tourer from "@/assets/rv-c2-tourer.jpg";
import rvShowroom from "@/assets/rv-showroom.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
}

interface MenuItem {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
  products?: Product[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
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

const menuItems: MenuItem[] = [
  {
    id: "wohnmobile",
    label: "Wohnmobile",
    hasSubmenu: true,
    submenu: [
      { id: "alle-wohnmobile", label: "Alle Wohnmobile" },
      { id: "vollintegrierte", label: "Vollintegrierte Wohnmobile" },
      { id: "teilintegrierte", label: "Teilintegrierte Wohnmobile" },
    ],
    products: wohnmobileProducts
  },
  {
    id: "neuheiten",
    label: "Neuheiten",
    hasSubmenu: true,
    submenu: [
      { id: "neu-1", label: "Produkt Neu 1" },
      { id: "neu-2", label: "Produkt Neu 2" },
      { id: "neu-3", label: "Produkt Neu 3" },
      { id: "neu-4", label: "Produkt Neu 4" },
    ]
  },
  {
    id: "carthago-dna",
    label: "Carthago DNA",
    hasSubmenu: true,
    submenu: [
      { id: "dna-1", label: "Innovation" },
      { id: "dna-2", label: "Qualität" },
      { id: "dna-3", label: "Design" },
    ]
  },
  {
    id: "handel",
    label: "Handel",
    hasSubmenu: true,
    submenu: [
      { id: "handel-1", label: "Händlersuche" },
      { id: "handel-2", label: "Partner werden" },
    ]
  },
  {
    id: "service",
    label: "Service",
    hasSubmenu: true,
    submenu: [
      { id: "service-1", label: "Wartung" },
      { id: "service-2", label: "Reparatur" },
      { id: "service-3", label: "Garantie" },
    ]
  },
  {
    id: "unternehmen",
    label: "Unternehmen",
    hasSubmenu: true,
    submenu: [
      { id: "unternehmen-1", label: "Über uns" },
      { id: "unternehmen-2", label: "Geschichte" },
      { id: "unternehmen-3", label: "Karriere" },
    ]
  },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [currentLevel, setCurrentLevel] = useState<"main" | "submenu">("main");
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentLevel("main");
      setActiveSubmenu(null);
      setIsAnimating(false);
      setShowProductDetail(false);
      setSelectedProductId("");
    }
  }, [isOpen]);

  const handleSubmenuClick = (subItemId: string) => {
    if (subItemId === "vollintegrierte") {
      setSelectedProductId("vollintegrierte");
      setShowProductDetail(true);
    }
  };

  const handleProductDetailBack = () => {
    setShowProductDetail(false);
    setSelectedProductId("");
  };

  const handleSubmenuOpen = (menuItem: MenuItem) => {
    if (!menuItem.hasSubmenu) return;
    
    setIsAnimating(true);
    setActiveSubmenu(menuItem);
    
    setTimeout(() => {
      setCurrentLevel("submenu");
      setIsAnimating(false);
    }, 150);
  };

  const handleBackToMain = () => {
    setIsAnimating(true);
    setCurrentLevel("main");
    
    setTimeout(() => {
      setActiveSubmenu(null);
      setIsAnimating(false);
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-menu-overlay text-menu-overlay-foreground animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary">
        {currentLevel === "submenu" && (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={handleBackToMain}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        
        {currentLevel === "submenu" && activeSubmenu && (
          <h2 className="text-lg font-medium text-primary-foreground flex-1 text-center">
            {activeSubmenu.label}
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

      {/* Content */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        {/* Main Menu */}
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-out",
            currentLevel === "submenu" ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <div className="h-full bg-menu-secondary">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium text-menu-secondary-foreground border-b border-border hover:bg-menu-secondary/80 transition-colors"
                onClick={() => handleSubmenuOpen(item)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Submenu */}
        {activeSubmenu && (
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-out",
              currentLevel === "submenu" ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="h-full bg-menu-secondary overflow-y-auto">
              {/* Breadcrumb */}
              <div className="px-6 py-3 bg-muted/30">
                <span className="text-sm text-muted-foreground">
                  {activeSubmenu.label}
                </span>
              </div>

              {/* Wohnmobile Content - Special Layout */}
              {activeSubmenu.id === "wohnmobile" ? (
                <div className="space-y-0">
                   {/* Submenu Navigation */}
                   {activeSubmenu.submenu?.map((subItem, index) => (
                     <button
                       key={subItem.id}
                       className="w-full flex items-center px-6 py-4 text-left text-lg font-medium text-menu-secondary-foreground border-b border-border hover:bg-menu-secondary/80 transition-colors"
                       style={{ animationDelay: `${index * 50}ms` }}
                       onClick={() => handleSubmenuClick(subItem.id)}
                     >
                       <span>{subItem.label}</span>
                     </button>
                   ))}

                  {/* Product Grid */}
                  <div className="px-6 py-6 space-y-6">
                    {activeSubmenu.products?.map((product) => (
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
              ) : (
                /* Regular Submenu Content */
                <>
                  {/* Submenu Items */}
                  {activeSubmenu.submenu?.map((subItem, index) => (
                    <button
                      key={subItem.id}
                      className="w-full flex items-center px-6 py-4 text-left text-lg font-medium text-menu-secondary-foreground border-b border-border hover:bg-menu-secondary/80 transition-colors"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span>{subItem.label}</span>
                    </button>
                  ))}

                  {/* Additional Content Section for Neuheiten */}
                  {activeSubmenu.id === "neuheiten" && (
                    <div className="px-6 py-6 border-t border-border bg-background">
                      <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Händlersuche
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <Button variant="ghost" className="p-0 h-auto text-foreground font-medium">
                        Händlersuche <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                      
                      {/* Feature Image */}
                      <div className="mt-6">
                        <img 
                          src={rvShowroom} 
                          alt="Carthago Showroom"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Product Detail View - Third Level */}
      <ProductDetailView
        isOpen={showProductDetail}
        onBack={handleProductDetailBack}
        productId={selectedProductId}
      />
    </div>
  );
};