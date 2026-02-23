import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Descoberta", description: "Aprendemos sobre seu negócio, audiência e objetivos." },
  { number: "02", title: "Design", description: "Interfaces limpas criadas para conversão e confiança." },
  { number: "03", title: "Desenvolvimento", description: "Stack tecnológico rápido e moderno com integrações de IA." },
  { number: "04", title: "Lançamento", description: "Coloque no ar com analytics, suporte e otimização." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary font-medium tracking-wider uppercase">Como Trabalhamos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Do conceito ao lançamento
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6 py-8 border-b border-border/50 last:border-0"
            >
              <span className="font-heading text-2xl font-bold text-gradient shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
