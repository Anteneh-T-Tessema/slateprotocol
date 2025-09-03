'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            &copy; 2025 Slate Protocol. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This interactive document is for informational purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}