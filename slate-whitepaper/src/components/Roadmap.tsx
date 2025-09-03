'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { CheckCircle, Clock, Circle } from 'lucide-react'
import { SLATE_CONTENT } from '@/lib/constants'

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePhase, setActivePhase] = useState(0)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Clock size={16} className="text-blue-500" />
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />
      default:
        return <Circle size={16} className="text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-500'
      case 'completed':
        return 'bg-green-500'
      default:
        return 'bg-gray-300'
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            A Security-First Roadmap
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The development of Slate is planned in four distinct phases, each preceded by rigorous testing 
            to ensure network stability and security.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {SLATE_CONTENT.roadmap.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative pb-12 pl-20 cursor-pointer group ${
                  index === SLATE_CONTENT.roadmap.length - 1 ? 'pb-0' : ''
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-6 top-2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${getStatusColor(phase.status)} ${
                    activePhase === index ? 'scale-125' : ''
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.3 }}
                />
                
                {/* Content card */}
                <motion.div
                  className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 ${
                    activePhase === index 
                      ? 'border-blue-500 shadow-lg' 
                      : 'border-gray-200 group-hover:border-gray-300 group-hover:shadow-md'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {getStatusIcon(phase.status)}
                    <h4 className="font-bold text-lg text-gray-800">
                      {phase.phase}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Progress indicator for active phase */}
                  {phase.status === 'in-progress' && (
                    <motion.div
                      className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 2, delay: 0.8 }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase details */}
        <motion.div
          className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Currently: {SLATE_CONTENT.roadmap[activePhase].phase}
            </h3>
            
            <div className="flex justify-center items-center gap-4 mb-6">
              {getStatusIcon(SLATE_CONTENT.roadmap[activePhase].status)}
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {SLATE_CONTENT.roadmap[activePhase].status.replace('-', ' ')}
              </span>
            </div>
            
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {SLATE_CONTENT.roadmap[activePhase].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}