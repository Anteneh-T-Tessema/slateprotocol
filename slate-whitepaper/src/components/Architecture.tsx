'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Database, Cpu, Shield, X } from 'lucide-react'
import { SLATE_CONTENT } from '@/lib/constants'

const architectureComponents = [
  {
    id: 'settlement',
    icon: Shield,
    title: "Settlement Core",
    subtitle: '"The Bedrock"',
    description: "The ultimate arbiter of the network's state and anchor of its economic security, optimized for decentralization.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 'execution',
    icon: Cpu,
    title: "Execution Engine",
    subtitle: '"The Supercomputer"',
    description: "The high-performance environment where all transactions and smart contracts are processed in parallel.",
    color: "from-green-500 to-green-600"
  },
  {
    id: 'data',
    icon: Database,
    title: "Data Fabric",
    subtitle: '"The Universal Connector"',
    description: "The network's information backbone, providing a scalable and secure layer for data storage via DAS.",
    color: "from-purple-500 to-purple-600"
  }
]

export default function Architecture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  const openModal = (componentId: string) => {
    setSelectedModal(componentId)
  }

  const closeModal = () => {
    setSelectedModal(null)
  }

  return (
    <section id="architecture" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Unified Modular Architecture
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Slate decouples core functions into specialized layers, connected by the trustless Slate Bus. 
            Click on each component to learn more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {architectureComponents.map((component, index) => (
            <motion.div
              key={component.id}
              className="card-hover bg-white p-8 rounded-xl border border-gray-200 cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => openModal(component.id)}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${component.color} rounded-full mb-6 text-white`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <component.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {component.title}
                </h3>
                
                <p className="text-2xl font-mono text-gray-500 mb-4">
                  {component.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {component.description.includes('DAS') ? (
                    <>
                      The network&apos;s information backbone, providing a scalable and secure layer for data storage via{' '}
                      <span className="tooltip">
                        DAS
                        <span className="tooltip-text">
                          Data Availability Sampling allows nodes to verify data availability without downloading entire blocks.
                        </span>
                      </span>
                      .
                    </>
                  ) : (
                    component.description
                  )}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-8 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {SLATE_CONTENT.modals[selectedModal as keyof typeof SLATE_CONTENT.modals]?.title}
            </h2>
            
            <div className="space-y-4">
              {SLATE_CONTENT.modals[selectedModal as keyof typeof SLATE_CONTENT.modals]?.content.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}