import { useState, useEffect, useRef, memo } from 'react'
import PokemonCard from './index'

const PokemonCardLazy = ({ id, name, spriteUrl, container }) => {
  const [show, setShow] = useState(false)
  const lazy = useRef()

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    const observer = new IntersectionObserver(onChange, { rootMargin: '10px' })

    observer.observe(lazy.current)
  })

  return (
    <div className="LazyLoad" ref={lazy}>
      { show ? <PokemonCard id={id} name ={name} spriteUrl={spriteUrl} container={container} /> : <div style={{ width: '80px', height: '80px' }} />}
    </div>
  )
}

export default memo(PokemonCardLazy, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
