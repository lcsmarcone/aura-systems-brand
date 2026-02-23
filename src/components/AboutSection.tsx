import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Lucas",
    role: "Desenvolvedor Senior Full Stack",
    skills: "Python | Django | Next.js | React | TypeScript | SQL | REST APIs | PostgreSQL | Web Maps",
    description: "Especialista em arquitetura backend, APIs escaláveis e desenvolvimento de aplicações modernas com foco em performance e experiência do usuário.",
    image: "/team/lucas.jpg",
  },
  {
    name: "Breno",
    role: "Desenvolvedor Senior Full Stack",
    skills: "Golang | Next.js | React | TypeScript | Mobile | Flutter | SQL Server | PostgreSQL",
    description: "Foco em sistemas robustos, aplicações mobile e soluções de alta performance com arquitetura moderna e escalável.",
    image: "/team/breno.jpg",
  },
  {
    name: "Anderson",
    role: "Analista de Sistemas",
    skills: "React JS | Java | Spring Boot | MySQL | PostgreSQL | PHP | Laravel | WordPress",
    description: "Experiência em desenvolvimento de sistemas corporativos, integrações e soluções web sob medida para diferentes necessidades de negócio.",
    image: "/team/anderson.jpg",
  },
  {
    name: "Alexandre",
    role: "Especialista em Dados & Geoanalytics",
    skills: "SQL | Python | Geoanalytics | Databricks | Dataviz | Cloud | GIS | Airflow",
    description: "Atua na estruturação de dados, automações e inteligência analítica para apoiar decisões estratégicas e otimizar processos.",
    image: "/team/alexandre.jpg",
  },
  {
    name: "Jahdy",
    role: "Especialista em Gestão de SPAs",
    skills: "Gestão de Pessoas | Logística | Organização Empresarial",
    description: "Experiência prática na gestão de spas, trazendo visão estratégica e operacional para garantir que as soluções desenvolvidas realmente atendam às necessidades do setor.",
    image: "/team/jahdy.jpg",
  },
];

// Componente Carousel com Autoplay
const CarouselWithAutoplay = ({ children, ...props }: React.ComponentProps<typeof Carousel>) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Função para avançar o carrossel
    const autoplay = () => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Volta ao início quando chega ao fim
      }
    };

    // Inicia o autoplay
    autoplayRef.current = window.setInterval(autoplay, 5000); // 5 segundos

    // Pausa quando o mouse está sobre o carrossel
    const handleMouseEnter = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    // Retoma quando o mouse sai
    const handleMouseLeave = () => {
      if (!autoplayRef.current) {
        autoplayRef.current = window.setInterval(autoplay, 5000);
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", handleMouseEnter);
      carouselElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      if (carouselElement) {
        carouselElement.removeEventListener("mouseenter", handleMouseEnter);
        carouselElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [api]);

  return (
    <div ref={carouselRef}>
      <Carousel setApi={setApi} {...props}>
        {children}
      </Carousel>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-primary font-medium tracking-wider uppercase">Sobre a Aura Systems</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient mt-3 mb-8">
            Transformando a presença digital do bem-estar
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Aura Systems nasceu em 2026 com um propósito claro: transformar a presença digital de spas, clínicas de massagem e negócios de bem-estar através de tecnologia inteligente, design moderno e entregas rápidas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos um time multidisciplinar de especialistas em desenvolvimento, pessoas reais lidando com dados e gestão, unidos por um objetivo comum: criar soluções digitais que funcionam de forma simples, intuitiva e eficiente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unimos inteligência artificial, engenharia de software e experiência do usuário para construir sites, aplicativos e sistemas otimizados, com alta performance e foco total no resultado do cliente.
            </p>
          </div>

          {/* Mission, Vision & Values */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Nossa Missão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Levar inovação, organização e performance digital para negócios que cuidam de pessoas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Nossa Visão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nos tornar referência em soluções digitais especializadas para o setor de bem-estar, combinando tecnologia avançada com uma experiência leve, fluida e acessível.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Nossos Valores</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Inovação, simplicidade e resultados. Buscamos constantemente novas tecnologias para entregar soluções intuitivas que geram impacto real no negócio do cliente.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-medium tracking-wider uppercase">Nosso Time</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mt-3">
              Especialistas unidos por um propósito
            </h3>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <CarouselWithAutoplay
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={member.name} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="relative mb-4">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="font-heading font-semibold text-lg text-center mb-1">{member.name}</h4>
                      <p className="text-xs text-primary font-medium text-center mb-3">{member.role}</p>
                      <p className="text-xs text-muted-foreground text-center mb-3 leading-relaxed">{member.skills}</p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">{member.description}</p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2" />
            </CarouselWithAutoplay>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
