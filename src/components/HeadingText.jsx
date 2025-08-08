import { motion } from "motion/react"

const HeadingText = ({ text, mb = "mb-6", color = "text-yellow-400" }) => {
  return (
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`text-3xl font-bold ${mb} ${color} text-center`}
    >
    {text}
    </motion.h2>
  )
}

export default HeadingText