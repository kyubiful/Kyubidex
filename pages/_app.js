import { TopCase } from '../components/Case/TopCase'
import { BottomCase } from '../components/Case/BottomCase'
import { ButtonCase } from '../components/Case/ButtonCase'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'

import '../styles/globals.css'
import styles from '../styles/global.module.css'

const screenVariants = {
  open: {
    height: 600,
    transition: {
      duration: 1
    }
  },
  closed: {
    height: 147,
    transition: {
      duration: 1
    }
  }
}

const contentScreenVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1
    }
  },
  closed: {
    opacity: 0
  }
}

function MyApp ({ Component, pageProps, router }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScreenOpen, setIsScreenOpen] = useState(false)
  const [buttonIsOpen, setButtonIsOpen] = useState(false)

  const openDex = () => {
    setIsOpen(!isOpen)
    setButtonIsOpen(!buttonIsOpen)
    setIsScreenOpen(!isScreenOpen)
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>
      <div className={styles.pokedexCase}>
        <TopCase/>
        <ButtonCase onClick={openDex} buttonIsOpen={buttonIsOpen} />
        <motion.div
          className={styles.pokedexScreen}
          variants={screenVariants}
          animate={isOpen ? 'open' : 'closed'}
        >
            <motion.div
              className={styles.pokedexScreenContainer}
              variants={contentScreenVariants}
              animate={isScreenOpen ? 'open' : 'closed'}
            >
              <AnimatePresence exitBeforeEnter>
                  <Provider store={store}>
                    <Component {...pageProps} key={router.pathname}/>
                  </Provider>
              </AnimatePresence>
            </motion.div>
        </motion.div>
        <BottomCase/>
      </div>
    </div>
    </>
  )
}

export default MyApp
