'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Coins } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const advantages = [
  {
    icon: Shield,
    title: "Decentralized Sequencing",
    description: "A rotating validator committee sequences transactions, providing protocol-level censorship resistance and eliminating central points of failure.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    icon: Zap,
    title: "True Atomic Composability",
    description: "Our asynchronous backend delivers a synchronous developer experience. Build complex dApps across layers in a single, atomic transaction.",
    tooltip: "Layers process transactions at their own speed, with cryptographic proofs ensuring final atomicity.",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(147, 51, 234, 0.3)"
  },
  {
    icon: Coins,
    title: "Multi-Layered Economic Flywheel",
    description: "Value from execution, data, and settlement fees are all captured by the $SLT token, creating a robust, self-reinforcing economic engine.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.3)"
  }
]

export default function Advantage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="advantage" className="section-padding relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-300">Core Innovations</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            The Slate Advantage
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Three revolutionary innovations that solve the blockchain trilemma while maintaining 
            <span className="text-gradient font-semibold"> exceptional performance</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="card-premium p-8 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${advantage.glowColor}, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10 mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative inline-block">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                    animate={{
                      boxShadow: [
                        `0 8px 32px ${advantage.glowColor}`,
                        `0 12px 40px ${advantage.glowColor}`,
                        `0 8px 32px ${advantage.glowColor}`,
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <advantage.icon size={36} className="text-white" />
                  </motion.div>
                  
                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        top: `${20 + i * 10}%`,
                        right: `${10 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {advantage.description.includes('asynchronous backend') ? (
                    <>
                      Our{' '}
                      <span className="tooltip text-gradient font-semibold">
                        asynchronous backend
                        <span className="tooltip-text">
                          {advantage.tooltip}
                        </span>
                      </span>
                      {' '}delivers a synchronous developer experience. Build complex dApps across layers in a single, atomic transaction.
                    </>
                  ) : (
                    advantage.description
                  )}
                </p>
              </div>

              {/* Bottom accent */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-zinc-400 mb-6">Ready to experience the future of blockchain?</p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('architecture')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Architecture
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}