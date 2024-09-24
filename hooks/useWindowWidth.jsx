import { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(false)

    useEffect (() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.addEventListener('resize', handleResize)
      }
    }, [])
  return windowWidth
}

export default useWindowWidth
