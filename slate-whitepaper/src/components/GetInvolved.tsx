'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { BookOpen, MessageCircle, Github, ArrowRight } from 'lucide-react'

const actions = [
  {
    icon: BookOpen,
    title: "Read Whitepaper",
    description: "Comprehensive technical documentation and protocol specification",
    href: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/WHITEPAPER.md",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "Join Discord",
    description: "Connect with the community and get support",
    href: "https://discord.gg/slate-protocol",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Github,
    title: "View on GitHub",
    description: "Contribute to the open-source protocol",
    href: "https://github.com/Anteneh-T-Tessema/slateprotocol",
    color: "from-gray-700 to-gray-800"
  }
]

export default function GetInvolved() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Predetermined star configurations
  const starConfigs = Array.from({ length: 50 }, (_, i) => ({
    left: (i * 7.3) % 100,
    top: (i * 11.7) % 100,
    duration: 3 + (i % 3),
    delay: (i * 0.1) % 2
  }))

  return (
    <section id="get-involved" className="py-20 bg-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {isClient && starConfigs.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build the Future on{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Slate
            </motion.span>
            .
          </h2>
          
          <p className="text-lg max-w-xl mx-auto text-gray-300 mb-12">
            Whether you&apos;re a developer, researcher, or visionary, the Slate ecosystem has a place for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <action.icon size={24} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                {action.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {action.description}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:gap-3 transition-all duration-300">
                <span className="text-sm font-medium">Get Started</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} />
            Start Building Today
          </motion.button>
          
          <motion.button
            className="border border-gray-400 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            Join Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}