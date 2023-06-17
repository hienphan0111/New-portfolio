export const motions = {
  fadeIn: {
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1 }
    },
    hidden: { opacity: 0, scale: 0.5, y: "20%" }
  },
  fadeInLeft: {
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 1 }
    },
    hidden: { opacity: 0, x: "-100%" }
  },
  fadeInRight: {
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 1 }
    },
    hidden: { opacity: 0, x: "100%" }
  }
}
