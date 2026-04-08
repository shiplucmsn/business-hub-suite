import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github, Chrome, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] " />
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-white">TradingHub</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Start building your<br />business today
            </h2>
            <p className="text-white/70 text-lg max-w-md leading-relaxed">
              Join 12,000+ businesses already growing with TradingHub. No credit card required.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TradingHub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-8">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" className="h-11"><Chrome className="h-4 w-4 mr-2" /> Google</Button>
            <Button variant="outline" className="h-11"><Github className="h-4 w-4 mr-2" /> GitHub</Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-background px-3 text-xs text-muted-foreground uppercase">or continue with email</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="fname">First name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="fname" placeholder="John" className="pl-10 h-11" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lname">Last name</Label>
                <Input id="lname" placeholder="Doe" className="h-11" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@company.com" className="pl-10 h-11" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="password" type={showPass ? "text" : "password"} placeholder="Min 8 characters" className="pl-10 pr-10 h-11" required />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-0.5" />
              <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground cursor-pointer leading-relaxed">
                I agree to the <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a>
              </Label>
            </div>
            <Button type="submit" className="w-full h-11 gradient-primary text-primary-foreground">
              Create account <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
