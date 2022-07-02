import { motion } from 'framer-motion'
import styles from './styles.module.css'

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

export const ScreenContainer = ({ children }) => {
  return (
    <motion.div
      initial={variants.hidden}
      animate={variants.visible}
      exit={variants.hidden}
      className={styles.screen}
    >
      {children}
    </motion.div>
  )
}
