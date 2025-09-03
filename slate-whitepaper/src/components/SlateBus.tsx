'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Network, Shuffle, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Network,
    title: "Decentralized Sequencer Network",
    description: "Replaces a single coordinator with a rotating, algorithmically-selected committee of validators. This distributes the power of transaction sequencing, providing strong censorship resistance at the protocol level."
  },
  {
    icon: Shuffle,
    title: "Asynchronous Composability",
    description: "Delivers the developer experience of atomic transactions without the bottleneck of a single Global State Root. Layers operate asynchronously, with cryptographic proofs guaranteeing that transactions either complete fully across layers or fail entirely."
  }
]

const hybridProof = {
  icon: ShieldCheck,
  title: "Hybrid Proof Mechanism",
  description: "A lightweight ZK-Proof provides a fast, cryptographic check on inter-layer data integrity, while robust fraud proofs on the Settlement Core act as the ultimate source of truth, creating a defense-in-depth security model.",
  tooltip: "Zero-Knowledge Proofs allow verification of a statement without revealing the underlying data."
}

export default function SlateBus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="slate-bus" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            The Slate Bus: Trustless Composability
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Slate&apos;s core innovations solve the Coordinator&apos;s Dilemma, ensuring atomic composability 
            and censorship resistance without performance bottlenecks.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* First row - two columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon size={24} className="text-blue-600" />
                </motion.div>
                
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second row - full width */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 group hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <hybridProof.icon size={24} className="text-purple-600" />
            </motion.div>
            
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              {hybridProof.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              A lightweight{' '}
              <span className="tooltip">
                ZK-Proof
                <span className="tooltip-text">
                  {hybridProof.tooltip}
                </span>
              </span>
              {' '}provides a fast, cryptographic check on inter-layer data integrity, while robust fraud proofs on the Settlement Core act as the ultimate source of truth, creating a defense-in-depth security model.
            </p>
          </motion.div>
        </div>

        {/* Animated connection lines */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </motion.div>
          
          {/* Flowing dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{ top: '50%', left: '10%' }}
              animate={{
                x: ['0%', '800%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}