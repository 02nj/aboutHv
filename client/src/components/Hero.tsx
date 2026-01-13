import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Professional Discord Specialist
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6">
            I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">HAVEN</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
            Crafting engaging communities and managing digital spaces with precision.
            <br/>
            <span className="font-cairo text-primary/90 mt-2 block text-2xl font-bold" dir="rtl">
              محترف في إدارة مجتمعات الديسكورد
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <a 
              href="#about"
              className="px-8 py-4 rounded-full bg-card border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all hover:-translate-y-1 flex items-center gap-2 group"
            >
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
