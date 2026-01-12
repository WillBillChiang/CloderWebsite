import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CloderIcon from '../assets/CloderIcon.png'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={CloderIcon} alt="Cloder" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold text-gradient">Cloder</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://apps.apple.com/us/app/cloder/id6755250994"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
