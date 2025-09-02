import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import rvShowroom from "@/assets/rv-showroom.jpg";

interface ProductDetailProps {
  isOpen: boolean;
  onBack: () => void;
  productId: string;
}

export const ProductDetailView = ({ isOpen, onBack, productId }: ProductDetailProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 bg-menu-secondary animate-slide-in-right">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-foreground/10"
          onClick={onBack}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <h2 className="text-lg font-medium text-primary-foreground flex-1 text-center">
          Vollintegrierte Wohnmobile
        </h2>
        
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-64px)] overflow-y-auto bg-menu-secondary">
        {/* Progress Indicator */}
        <div className="px-6 py-4">
          <div className="flex space-x-2">
            <div className="flex-1 h-1 bg-foreground rounded"></div>
            <div className="flex-1 h-1 bg-muted rounded"></div>
            <div className="flex-1 h-1 bg-muted rounded"></div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="px-6 pb-6">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            {/* Product Header */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    LINER-FOR-TWO
                  </h1>
                  <p className="text-sm text-muted-foreground font-medium tracking-wide">
                    4-RAUM-KONZEPT
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-foreground">
                    C1-TOURER
                  </div>
                  <p className="text-xs text-muted-foreground">
                    LIGHTWEIGHT/COMFORT
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Sportlich, markant und wohnlich.
                <br />
                Der Anspruchsvolle Alleskönner.
                <br />
                Lorem Ipsum Dolor Sit.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Mehr erfahren
                </Button>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    className="flex-1 text-foreground hover:bg-muted"
                  >
                    Modelle vergleichen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="flex-1 text-foreground hover:bg-muted"
                  >
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <img 
                src={rvShowroom} 
                alt="LINER-FOR-TWO"
                className="w-full h-64 object-cover"
              />
              {/* 360° Badge */}
              <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                360°
              </div>
            </div>

            {/* Specifications */}
            <div className="p-6 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-6 bg-black text-white text-xs font-bold flex items-center justify-center">
                      FIAT
                    </div>
                    <div className="w-8 h-6 border border-black text-black text-xs font-bold flex items-center justify-center">
                      M
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-lg font-bold text-foreground">10 Grundrisse auf</div>
                      <div className="text-sm text-muted-foreground">Mercedes Benz</div>
                    </div>
                    
                    <div>
                      <div className="text-lg font-bold text-foreground">3,5 - 6,3 t</div>
                      <div className="text-sm text-muted-foreground">Zul. Gesamtmasse</div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="text-lg font-bold text-foreground mb-1">7,83 m - 8,55 m</div>
                  <div className="text-sm text-muted-foreground mb-4">Länge</div>
                  
                  <div>
                    <div className="text-lg font-bold text-foreground">10 Grundrisse auf</div>
                    <div className="text-sm text-muted-foreground">Fiat Ducato</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Schon von Weitem fasziniert das individuelle Design der Carthago Premium-Integrierten. 
              Unterwegs die Aussicht auf die Landschaft und das Verkehrsgeschehen dank der 
              herausragend guten Sichtverhältnisse. Am Ziel angekommen, das außergewöhnliche 
              Raumgefühl. Es gibt viele Gründe, warum wir mittlerweile Marktführer bei integrierten 
              Reisemobilen in der Preisklasse größer 95.000 €* in Europa sind. Steigen auch Sie ein in die 
              Welt der integrierten Premium-Reisemobile und entscheiden Sie sich für ein Fahrzeug mit DNA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};