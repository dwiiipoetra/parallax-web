import { motion } from "motion/react";

const CinematicText = ({ text, classProp }) => {
  // ubah string jadi array huruf
  const letters = text.split("");

  // variants untuk container dan huruf
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // delay
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return ( 
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={classProp}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default CinematicText;
