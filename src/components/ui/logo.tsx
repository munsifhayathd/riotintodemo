import { motion } from "framer-motion";
import Image from "next/image";
import { PREFFIX, SUFFIX } from "../../../global-config";
import { useState } from "react";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "lg";
}

export function Logo({ variant = "default", size = "sm" }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const logoHeight = size === "sm" ? 40 : 60;
  const textSize = size === "sm" ? "text-xl" : "text-3xl";
  
  if (imageError) {
    // Fallback to text if image fails
    return (
      <h1 className={`font-bold tracking-tight ${textSize}`}>
        {variant === "white" ? (
          <>
            <span className="text-white">{PREFFIX}</span>
            <span className="text-white/90">{SUFFIX}</span>
          </>
        ) : (
          <>
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {PREFFIX}
            </span>
            <span className="text-gray-900 dark:text-gray-100">{SUFFIX}</span>
          </>
        )}
      </h1>
    );
  }
  
  return (
    <div className="flex items-center">
      <Image
        src="/images/logos/Logo.png"
        alt="Rio Tinto Logo"
        width={logoHeight * 3}
        height={logoHeight}
        className="object-contain"
        onError={() => setImageError(true)}
        priority
      />
    </div>
  );
} 