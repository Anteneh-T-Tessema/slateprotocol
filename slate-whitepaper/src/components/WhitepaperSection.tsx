'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FileText, Download, ExternalLink, BookOpen, Users, Shield, TrendingUp } from 'lucide-react'

const whitepaperHighlights = [
  {
    icon: TrendingUp,
    title: "Performance Specs",
    description: "10,000+ TPS with <6 second finality",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Security Model", 
    description: "Byzantine Fault Tolerant PoS with economic finality",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Technical Deep-Dive",
    description: "Complete protocol specification and research",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Economic Analysis",
    description: "$SLT tokenomics and incentive mechanisms",
    color: "from-orange-500 to-red-500"
  }
]

export default function WhitepaperSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="whitepaper" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-5 h-5 text-accent-primary" />
            <span className="text-sm font-semibold text-text-primary">Technical Documentation</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            The Slate Protocol Whitepaper
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A comprehensive technical specification detailing Slate's unified modular architecture, 
            economic model, and path to solving the blockchain trilemma.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Whitepaper Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Technical Whitepaper</h3>
                  <p className="text-text-secondary">Version 2.0 • January 2025</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-text-secondary">Author</span>
                  <span className="text-text-primary font-medium">Anteneh T. Tessema</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-text-secondary">Pages</span>
                  <span className="text-text-primary font-medium">24 pages</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-text-secondary">Format</span>
                  <span className="text-text-primary font-medium">Markdown</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-secondary">License</span>
                  <span className="text-text-primary font-medium">MIT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/WHITEPAPER.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 flex-1"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Online
                </motion.a>
                <motion.a
                  href="https://raw.githubusercontent.com/Anteneh-T-Tessema/slateprotocol/main/WHITEPAPER.md"
                  download="Slate_Protocol_Whitepaper_v2.0.md"
                  className="btn-secondary flex items-center justify-center gap-2 flex-1"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-text-primary mb-4">Key Highlights</h3>
              <p className="text-text-secondary leading-relaxed">
                The whitepaper provides comprehensive coverage of Slate's innovative approach to blockchain architecture, 
                including detailed technical specifications and economic analysis.
              </p>
            </div>

            <div className="grid gap-4">
              {whitepaperHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="glass-light rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color}`}>
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary mb-2">{highlight.title}</h4>
                      <p className="text-sm text-text-secondary">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Table of Contents Preview */}
        <motion.div
          className="glass rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Table of Contents</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">1</span>
                <span className="text-text-primary font-medium">Introduction & Problem Statement</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">2</span>
                <span className="text-text-primary font-medium">Unified Modular Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">3</span>
                <span className="text-text-primary font-medium">$SLT Token & Economic Model</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">4</span>
                <span className="text-text-primary font-medium">Security Considerations</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">5</span>
                <span className="text-text-primary font-medium">Technical Specifications</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">6</span>
                <span className="text-text-primary font-medium">Implementation Roadmap</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">7</span>
                <span className="text-text-primary font-medium">Competitive Analysis</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">8</span>
                <span className="text-text-primary font-medium">Future Research & Conclusion</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Ready to dive deeper into the technical details? Explore the complete whitepaper and join our community of builders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/WHITEPAPER.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Read Full Whitepaper
            </motion.a>
            
            <motion.a
              href="https://discord.gg/slate-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              Join Discussion
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}