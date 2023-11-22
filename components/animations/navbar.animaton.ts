export const navBarAnimation = {
  from: {
    opacity: 0,
    y: -20,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

export const maskAnimation = {
  from: {
    x: "-100%",
    transition: { ease: [0.2, 1, 0.8, 0], duration: 0.5 },
  },
  to: {
    x: "100%",
    transition: { ease: ["easeIn", "easeOut", "easeInOut"], duration: 0.5 },
  },
};

export const menuAnimation = {
  from: {
    opacity: 0,
    transition: { duration: 0, delay: 0.25 },
  },
  to: {
    opacity: 1,
    transition: { duration: 0, delay: 0.25 },
  },
};

export const menuItemAnimation = {
  from: {
    x: -50,
  },
  to: {
    x: 0,
  },
};
