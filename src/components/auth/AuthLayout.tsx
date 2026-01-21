import { ReactNode } from "react";
import { Shield } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12">
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/20 glow-effect">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">SecureAuth</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Enterprise-Grade
              <br />
              <span className="text-gradient">Authentication</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Secure your applications with our comprehensive identity management solution. 
              Built for scale, designed for developers.
            </p>

            <div className="mt-12 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Auth Requests/Day</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="p-2 rounded-lg bg-primary/20">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">SecureAuth</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
