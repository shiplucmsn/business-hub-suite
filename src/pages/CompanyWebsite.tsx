import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  { title: "Web Development", desc: "Custom websites and web applications built with modern tech.", price: "From $999" },
  { title: "Mobile App Development", desc: "Native and cross-platform mobile applications.", price: "From $2,499" },
  { title: "UI/UX Design", desc: "User-centered design that converts visitors into customers.", price: "From $499" },
  { title: "SEO & Marketing", desc: "Data-driven strategies to boost your online visibility.", price: "From $299/mo" },
];

const PRODUCTS = [
  { title: "Website Template Pack", price: "$79", rating: 4.9 },
  { title: "SEO Audit Tool", price: "$39/mo", rating: 4.8 },
  { title: "Social Media Kit", price: "$49", rating: 4.7 },
  { title: "Email Marketing Suite", price: "$29/mo", rating: 4.9 },
];

const TESTIMONIALS = [
  { name: "Alice K.", role: "Startup Founder", text: "They completely transformed our online presence. Revenue increased 3x in 6 months.", rating: 5 },
  { name: "Robert M.", role: "Marketing Director", text: "Professional, responsive, and delivered exceptional results. Highly recommended!", rating: 5 },
  { name: "Nina S.", role: "E-commerce Owner", text: "The best investment we made for our business. Our new site converts like crazy.", rating: 5 },
];

const CompanyWebsite = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <span className="text-lg font-bold text-foreground">{slug || "TechStudio"}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#products" className="hover:text-foreground transition-colors">Products</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm" className="gradient-primary text-primary-foreground">Get in Touch</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">✨ Award-Winning Agency</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            We Build <span className="gradient-text">Digital Experiences</span> That Matter
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Full-service digital agency specializing in web development, design, and marketing solutions that drive results.
          </p>
          <div className="flex justify-center gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground h-12 px-8">Our Work <ArrowRight className="h-4 w-4 ml-2" /></Button>
            <Button size="lg" variant="outline" className="h-12 px-8">Contact Us</Button>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">About <span className="gradient-text">Us</span></h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Founded in 2018, we're a team of passionate designers, developers, and marketers helping businesses build their digital presence. With over 500+ projects delivered, we turn ideas into reality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[{ v: "500+", l: "Projects" }, { v: "98%", l: "Satisfaction" }, { v: "50+", l: "Team Members" }, { v: "8+", l: "Years" }].map(s => (
              <div key={s.l}>
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <p className="text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our <span className="gradient-text">Services</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(s => (
              <motion.div key={s.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="border-border/50 hover:shadow-elevated transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                    <span className="text-sm font-medium gradient-text">{s.price}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our <span className="gradient-text">Products</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map(p => (
              <Card key={p.title} className="border-border/50 hover:shadow-elevated transition-all">
                <div className="h-32 gradient-primary opacity-80 rounded-t-lg" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs"><Star className="h-3 w-3 fill-warning text-warning" />{p.rating}</div>
                    <span className="font-bold gradient-text">{p.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Client <span className="gradient-text">Reviews</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <Card key={t.name} className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex gap-0.5 mb-3">{Array.from({ length: t.rating }, (_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}</div>
                  <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Get in <span className="gradient-text">Touch</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium text-foreground">Email</p><p className="text-sm text-muted-foreground">hello@techstudio.com</p></div></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium text-foreground">Phone</p><p className="text-sm text-muted-foreground">+61 2 1234 5678</p></div></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium text-foreground">Address</p><p className="text-sm text-muted-foreground">123 Business St, Sydney NSW 2000</p></div></div>
            </div>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Your name" className="h-11" />
                  <Input placeholder="Your email" type="email" className="h-11" />
                  <Textarea placeholder="Your message..." rows={4} />
                  <Button className="w-full gradient-primary text-primary-foreground"><Send className="h-4 w-4 mr-2" /> Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4 text-center text-sm text-muted-foreground">
        © 2026 {slug || "TechStudio"}. Powered by TradingHub.
      </footer>
    </div>
  );
};

export default CompanyWebsite;
