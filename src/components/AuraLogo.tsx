import { motion } from "framer-motion";

interface AuraLogoProps {
  size?: number;
  showText?: boolean;
}

const AuraLogo = ({ size = 40, showText = true }: AuraLogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Outer aura ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="url(#auraGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        {/* Inner geometric A shape — no horizontal bar */}
        <path
          d="M24 8L14 38M24 8L34 38"
          stroke="url(#auraGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Halo arc */}
        <path
          d="M16 16C16 16 20 10 24 10C28 10 32 16 32 16"
          stroke="url(#auraGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="auraGrad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="hsl(239 100% 74%)" />
            <stop offset="1" stopColor="hsl(162 76% 57%)" />
          </linearGradient>
          <linearGradient id="auraGrad2" x1="16" y1="10" x2="32" y2="16">
            <stop stopColor="hsl(162 76% 57%)" />
            <stop offset="1" stopColor="hsl(239 100% 74%)" />
          </linearGradient>
        </defs>
      </motion.svg>
      {showText && (
        <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
          Aura<span className="text-muted-foreground font-normal ml-0.5">Systems</span>
        </span>
      )}
    </div>
  );
};

export default AuraLogo;
