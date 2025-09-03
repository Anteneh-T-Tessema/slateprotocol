'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Code, Users, Link, Copy, Check } from 'lucide-react'
import { CODE_EXAMPLE } from '@/lib/constants'

const features = [
  {
    icon: Code,
    title: "Multi-VM Environment",
    description: "Deploy existing EVM contracts without changes, or leverage the power of WASM for peak performance using languages like Rust and Go."
  },
  {
    icon: Users,
    title: "Native Account Abstraction",
    description: "Onboard the next billion users with Web2-like experiences: social recovery, gasless transactions, and transaction bundling, all built-in at the protocol level."
  },
  {
    icon: Link,
    title: "Seamless Interoperability",
    description: "Trust-minimized ZK-Bridges provide secure and efficient connectivity to other major ecosystems like Ethereum and Cosmos."
  }
]

export default function DeveloperExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_EXAMPLE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <section id="devex" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            A Developer-First Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Build faster, safer, and more scalable applications with tools designed for a superior developer experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center group-hover:bg-gray-800 group-hover:border-gray-800 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon 
                        size={20} 
                        className="text-gray-600 group-hover:text-white transition-colors duration-300" 
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-gray-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <motion.button
                onClick={copyCode}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </motion.button>

              <pre className="relative z-10">
                <code className="language-rust">
                  {CODE_EXAMPLE.split('\n').map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </code>
              </pre>
            </motion.div>

            {/* Floating code elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-20"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}