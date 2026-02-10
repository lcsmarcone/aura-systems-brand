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
              Ready to elevate your brand?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Let's build a system that works as intelligently as your business does.
            </p>
            <a
              href="mailto:hello@aurasystems.dev"
              className="inline-flex px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-accent"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
