"use client"
import { motion } from "framer-motion"

interface IProps {
  content: React.ReactNode,
  duration: number
}

export default function AnimationShape({ content, duration }: IProps) {

  return <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -30, 0] }}
    transition={{
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }}
  >
    {content}
  </motion.div>
}