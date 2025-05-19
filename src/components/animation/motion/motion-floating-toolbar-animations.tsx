import { AnimationProps } from "framer-motion";

export const floatingToolbarAnimation: AnimationProps = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 25
  }
};

export const floatingToolbarTextAnimation: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.1 }
};

export const floatingToolbarButtonAnimation: AnimationProps = {
  initial: { opacity: 0, x: 5 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2 }
};

export const floatingToolbarExportButtonAnimation: AnimationProps = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.3 }
}; 