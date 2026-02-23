import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs text-muted-foreground font-medium tracking-wider uppercase mb-8">
              Tecnologia de Bem-Estar com IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6"
          >
            Sistemas digitais para{" "}
            <span className="text-gradient">marcas de bem-estar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Desenvolvemos sites inteligentes, aplicativos e sistemas de agendamento que ajudam spas e clínicas
            a atrair mais clientes e operar sem esforço.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-accent"
            >
              Iniciar Seu Projeto
            </a>
            <a
              href="#solutions"
              className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Ver Nossos Trabalhos
            </a>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="glow-line mt-24 max-w-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
