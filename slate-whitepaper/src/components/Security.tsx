'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { CheckCircle, Bug, Layers } from 'lucide-react'

const securityFeatures = [
  {
    icon: CheckCircle,
    title: "Formal Verification",
    description: "Commitment to the mathematical verification of mission-critical components, proving the code behaves exactly as intended.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Bug,
    title: "Incentivized Testnets",
    description: "Each major phase is preceded by a public testnet with significant bug bounties to ensure battle-tested resilience before mainnet.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Layers,
    title: "Defense in Depth",
    description: "A clear proof hierarchy where fast ZK-proofs ensure data integrity, while robust fraud proofs on the Settlement Core provide the ultimate security guarantee.",
    color: "from-blue-500 to-blue-600"
  }
]

export default function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="security" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            A Fortress of Security
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Slate&apos;s security posture is built on a philosophy of proactive verification, 
            transparent testing, and defense in depth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full mb-6 text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <feature.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

              {/* Security badge */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Security metrics */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-bold text-green-400 mb-2">99.9%</h4>
              <p className="text-gray-300">Uptime Target</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-bold text-blue-400 mb-2">$10M+</h4>
              <p className="text-gray-300">Bug Bounty Pool</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-bold text-purple-400 mb-2">24/7</h4>
              <p className="text-gray-300">Security Monitoring</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}