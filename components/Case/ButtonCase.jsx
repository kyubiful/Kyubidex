import { motion } from 'framer-motion'
import styles from './styles.module.css'

const buttonVariants = {
  open: {
    opacity: 0,
    rotate: 180,
    transition: {
      duration: 1
    },
    transitionEnd: { visibility: 'hidden' }
  },
  closed: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

export const ButtonCase = ({ onClick, buttonIsOpen }) => {
  return (
    <motion.svg
      viewBox="0 0 116 114"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      variants={buttonVariants}
      className={styles.startButton}
      animate={buttonIsOpen ? 'open' : 'closed'}
    >
      <ellipse cx="58" cy="57" rx="58" ry="57" fill="#E3F8FD"/>
      <path d="M102.904 57.9913C102.904 82.312 82.833 102.087 58.0001 102.087C33.1671 102.087 13.0957 82.312 13.0957 57.9913C13.0957 33.6706 33.1671 13.8957 58.0001 13.8957C82.833 13.8957 102.904 33.6706 102.904 57.9913Z" stroke="#C9F2F8" strokeWidth="4"/>
      <path d="M110.974 57.9913C110.974 86.6919 87.2897 110.017 58 110.017C28.7104 110.017 5.02612 86.6919 5.02612 57.9913C5.02612 29.2907 28.7104 5.96521 58 5.96521C87.2897 5.96521 110.974 29.2907 110.974 57.9913Z" stroke="#C9F2F8" strokeWidth="4"/>
      <path d="M94.8349 57C94.8349 76.9408 78.3763 93.1652 58.0001 93.1652C37.6238 93.1652 21.1653 76.9408 21.1653 57C21.1653 37.0591 37.6238 20.8348 58.0001 20.8348C78.3763 20.8348 94.8349 37.0591 94.8349 57Z" stroke="#C9F2F8" strokeWidth="4"/>
      <path d="M86.7653 57C86.7653 72.561 73.9196 85.2348 58.0001 85.2348C42.0806 85.2348 29.2349 72.561 29.2349 57C29.2349 41.439 42.0806 28.7652 58.0001 28.7652C73.9196 28.7652 86.7653 41.439 86.7653 57Z" stroke="#C9F2F8" strokeWidth="4"/>
      <path d="M90.8 57C90.8 74.7509 76.1478 89.2 58 89.2C39.8521 89.2 25.2 74.7509 25.2 57C25.2 39.2491 39.8521 24.8 58 24.8C76.1478 24.8 90.8 39.2491 90.8 57Z" stroke="#EDFCFE" strokeWidth="4"/>
      <path d="M106.939 57C106.939 83.5106 85.0612 105.061 57.9999 105.061C30.9387 105.061 9.06079 83.5106 9.06079 57C9.06079 30.4893 30.9387 8.93909 57.9999 8.93909C85.0612 8.93909 106.939 30.4893 106.939 57Z" stroke="#EDFCFE" strokeWidth="4"/>
      <line x1="114" y1="57" x2="1" y2="57" stroke="#E3F8FD" strokeWidth="8"/>
    </motion.svg>
  )
}
