'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { formatNumber, formatCurrency } from '@/lib/utils'

interface Stat {
  label: string
  value: string | number
  formatter?: (value: number) => string
  baseValue: number
  variance: number
}

const initialStats: Stat[] = [
  {
    label: "Transactions/Sec",
    value: 12403,
    formatter: formatNumber,
    baseValue: 12403,
    variance: 500
  },
  {
    label: "Avg. Tx Fee",
    value: 0.00025,
    formatter: formatCurrency,
    baseValue: 0.00025,
    variance: 0.00005
  },
  {
    label: "Validators",
    value: 1836,
    formatter: formatNumber,
    baseValue: 1836,
    variance: 5
  },
  {
    label: "Time to Finality",
    value: "< 1 sec",
    formatter: undefined,
    baseValue: 0,
    variance: 0
  }
]

export default function LiveStats() {
  const [stats, setStats] = useState(initialStats)

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (stat.formatter && stat.baseValue > 0) {
            const variance = (Math.random() - 0.5) * 2 * stat.variance
            const newValue = stat.baseValue + variance
            return {
              ...stat,
              value: newValue
            }
          }
          return stat
        })
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-stats" className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5"></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-300">Live Network Stats</span>
          </div>
          <h3 className="text-2xl font-bold text-gradient">Real-Time Performance</h3>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Label */}
              <motion.p 
                className="text-xs text-zinc-400 uppercase font-semibold tracking-wider mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {stat.label}
              </motion.p>
              
              {/* Value */}
              <motion.div
                className="relative"
                key={stat.value.toString()}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-3xl lg:text-4xl font-black text-gradient group-hover:scale-110 transition-transform duration-300">
                  {stat.formatter && typeof stat.value === 'number' 
                    ? stat.formatter(stat.value)
                    : stat.value
                  }
                </p>
                
                {/* Animated underline */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
              
              {/* Live indicator */}
              {stat.formatter && (
                <motion.div
                  className="flex items-center justify-center gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-xs text-green-400 font-medium">LIVE</span>
                </motion.div>
              )}

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-zinc-400 mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Network statistics update every 2 seconds • Powered by Slate Protocol
        </motion.p>
      </div>
    </section>
  )
}