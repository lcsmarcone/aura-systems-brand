import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "We learn your business, audience and goals." },
  { number: "02", title: "Design", description: "Clean interfaces crafted for conversion and trust." },
  { number: "03", title: "Build", description: "Fast, modern tech stack with AI integrations." },
  { number: "04", title: "Launch", description: "Go live with analytics, support and optimization." },
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
          <span className="text-xs text-primary font-medium tracking-wider uppercase">How We Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            From concept to launch
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
