import AuraLogo from "./AuraLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <AuraLogo size={32} />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aura Systems. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms"].map((link) => (
            <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
