import { motion } from 'framer-motion';

export default function BlurText({ text, className }: { text: string, className?: string }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const child = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 50 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-wrap justify-center row-gap-[0.1em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-[0.28em]">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}