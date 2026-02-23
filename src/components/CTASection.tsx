import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Glow bg */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Pronto para elevar sua marca?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Vamos construir um sistema que funciona de forma tão inteligente quanto seu negócio.
            </p>
            <a
              href="mailto:contato@aurasystemconsultoria.com.br"
              className="inline-flex px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-accent"
            >
              Entre em Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
