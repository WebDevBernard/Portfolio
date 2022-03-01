export const heroTopAnimation = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const heroBottomAnimation = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const skillsUpAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const arrowAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1.5,
    },
  },
};
