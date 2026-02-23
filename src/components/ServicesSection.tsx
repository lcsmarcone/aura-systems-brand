import { motion } from "framer-motion";
import { Globe, Smartphone, CalendarCheck, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites",
    description: "Landing pages de alta conversão e sites completos projetados para marcas de bem-estar.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Web",
    description: "Dashboards personalizados e portais de clientes que otimizam operações.",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de Agendamento",
    description: "Agendamento aprimorado com IA que reduz faltas e maximiza reservas.",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Fluxos de trabalho inteligentes para follow-ups, lembretes e engajamento de clientes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="solutions" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary font-medium tracking-wider uppercase">O Que Desenvolvemos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Soluções que performam
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
