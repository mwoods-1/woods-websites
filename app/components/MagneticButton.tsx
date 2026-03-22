"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  as: Tag = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLElement>}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
