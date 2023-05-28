import { useEffect, useState } from 'react'

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const updateScroll = () => {
            if (window.pageYOffset === 100) {
                setScrollPosition(100)
            }
            else {
                setScrollPosition(window.pageYOffset);
            }
        }
        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, [])
    return scrollPosition
}

export default useScroll;