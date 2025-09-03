'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { TrendingUp, Database, Shield, Flame } from 'lucide-react'

const feeStreams = [
  {
    icon: TrendingUp,
    title: "Execution Fees",
    description: "Demand for blockspace and computation.",
    color: "text-blue-600"
  },
  {
    icon: Database,
    title: "Data Fees",
    description: "Demand for scalable, on-chain data storage.",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Settlement Fees",
    description: "Demand for the highest level of security and finality.",
    color: "text-purple-600"
  }
]

export default function Tokenomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tokenomics" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            The $SLT Economic Flywheel
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Value from every layer of the protocol is captured by the native $SLT token, 
            creating a robust, self-reinforcing economic engine.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Fee Streams */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {feeStreams.map((stream, index) => (
                <motion.div
                  key={stream.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <stream.icon size={20} className={stream.color} />
                    </motion.div>
                    <h4 className={`font-bold text-lg ${stream.color}`}>
                      {stream.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 ml-0 lg:ml-13">
                    {stream.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Central Flywheel */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-64 h-64">
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-gray-800 rounded-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner dashed ring */}
                <motion.div
                  className="absolute inset-8 border-4 border-gray-300 border-dashed rounded-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.h3 
                      className="text-4xl font-extrabold text-gray-800"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      $SLT
                    </motion.h3>
                    <p className="text-sm font-semibold text-gray-500 tracking-wider">
                      VALUE ACCRUAL
                    </p>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-4px',
                      marginTop: '-4px',
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI / 4) * 100],
                      y: [0, Math.sin(i * Math.PI / 4) * 100],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Deflationary Pressure */}
            <motion.div
              className="bg-gray-800 text-white p-8 rounded-xl shadow-2xl text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Flame size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Deflationary Pressure</h3>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed">
                Fee burns from all three demand streams reduce the total supply of $SLT, 
                directly linking network utility to token value and rewarding long-term holders.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}