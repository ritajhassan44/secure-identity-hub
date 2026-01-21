import { Link } from "react-router-dom";
import { Shield, ArrowRight, Lock, Users, Key, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Industry-standard JWT tokens with refresh token rotation",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Fine-grained permissions with roles and claims",
  },
  {
    icon: Key,
    title: "API Key Management",
    description: "Generate and manage API keys for your applications",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with sub-100ms response times",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/20">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground">SecureAuth</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-32">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8">
            <Zap className="w-4 h-4" />
            Enterprise-ready authentication platform
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Secure Authentication
            <br />
            <span className="text-gradient">Made Simple</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            A complete identity platform with JWT authentication, role-based access control, 
            and user management. Built for developers who demand security and simplicity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button variant="gradient" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl">
                View Demo
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything you need for secure authentication
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with security best practices and designed for developer experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20" />
          <div className="absolute inset-0 bg-card/90" />
          
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of developers who trust SecureAuth for their authentication needs.
            </p>
            <Link to="/register">
              <Button variant="gradient" size="lg">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">SecureAuth</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 SecureAuth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
