export const chipContainerVariants = {
  hidden: {},
  shown: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

export const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};
