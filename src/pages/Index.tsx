import { LoginCard } from "@/components/LoginCard";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a1a]">
        <div className="absolute inset-0 opacity-80" style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, hsl(250, 70%, 25%), transparent), radial-gradient(ellipse 70% 50% at 80% 70%, hsl(220, 80%, 20%), transparent), radial-gradient(ellipse 60% 40% at 50% 50%, hsl(270, 60%, 15%), transparent)"
        }} />
        <div className="absolute inset-0 opacity-40" style={{
          background: "radial-gradient(ellipse 50% 50% at 70% 20%, hsl(260, 80%, 35%), transparent), radial-gradient(ellipse 40% 60% at 30% 80%, hsl(210, 90%, 30%), transparent)"
        }} />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10">
        <LoginCard />
      </div>
    </div>
  );
};

export default Index;
