import { motion } from "framer-motion";
import { CheckCircle2, Crown, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Management",
    description: "Building and nurturing active, engaged communities."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Server Security",
    description: "Advanced bot setup and moderation systems."
  },
  {
    icon: <Crown className="w-6 h-6 text-primary" />,
    title: "Premium Setup",
    description: "Professional roles, channels, and permissions architecture."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Image Placeholder Frame */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-white/5 relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700 font-display font-bold text-9xl select-none">
                  H
                </div>
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Discord Specialist
            </h3>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-xl text-muted-foreground mb-4">
                Hello, I'm Haven. I specialize in creating professional Discord environments tailored to your community's needs.
              </p>
              
              <div className="p-6 bg-card/50 rounded-2xl border-l-4 border-primary mb-6">
                <p className="text-2xl font-cairo font-bold text-white mb-2 text-right" dir="rtl">
                  أنا شخص محترف على الديسكورد، اسمي Haven.
                </p>
                <p className="text-muted-foreground text-right font-cairo" dir="rtl">
                  أقوم بتصميم وإدارة سيرفرات الديسكورد باحترافية عالية لضمان تجربة مستخدم ممتازة.
                </p>
              </div>

              <p className="text-muted-foreground">
                With years of experience on the platform, I understand the nuances of community dynamics and technical setup required for a thriving server.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
