import { MobileNavbar } from "@/components/MobileNavbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MobileNavbar />
      
      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Carthago</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the ultimate in mobile living with our premium RVs.
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              Use the menu button in the top navigation to explore our mobile menu system 
              with smooth animations and two-level navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
