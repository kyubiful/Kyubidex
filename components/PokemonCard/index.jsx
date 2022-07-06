import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { saveScrollPosition } from '../../redux/states/home'

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

const PokemonCard = ({ id, name, spriteUrl, container }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(saveScrollPosition(container.current.scrollTop))
  }

  return (
    <Link href={`/pokemon/${id}`}>
      <a>
        <motion.div
          className={styles.card}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 }
          }}
          onClick={handleClick}
          initial={variants.hidden}
          animate={variants.visible}
          exit={variants.hidden}
        >
          <div className={styles.imgContainer}>
          <Image src={spriteUrl} width={60} height={60} className={styles.pokeImage} layout="fixed" priority={false} loading="lazy"/>
          </div>
          <div className={styles.data}>
            <p className={styles.pokeNumber}>{id}</p>
            <h2 className={styles.pokeName}>{name}</h2>
          </div>
        </motion.div>
      </a>
    </Link>
  )
}

export default memo(PokemonCard, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
