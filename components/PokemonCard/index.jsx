import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export const PokemonCard = ({ id, name, spriteUrl }) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <a>
        <motion.div
          className={styles.card}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 }
          }}
        >
          <div className={styles.imgContainer}>
          <Image src={spriteUrl} width={60} height={60} className={styles.pokeImage} layout="fixed"/>
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
