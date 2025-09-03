'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { Bar, Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { SLATE_CONTENT } from '@/lib/constants'
import { TrendingUp, Zap, Shield, Network, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

const comparisonTypes = [
  { 
    id: 'monolithic', 
    label: 'Monolithic L1s',
    shortLabel: 'L1s',
    icon: TrendingUp,
    color: 'from-blue-500 to-indigo-600',
    examples: ['Solana', 'Aptos', 'Sui'],
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50'
  },
  { 
    id: 'l2s', 
    label: 'L2 Ecosystems',
    shortLabel: 'L2s', 
    icon: Network,
    color: 'from-purple-500 to-pink-600',
    examples: ['Arbitrum', 'Optimism', 'Polygon'],
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
  },
  { 
    id: 'hubs', 
    label: 'Interoperability Hubs',
    shortLabel: 'Hubs',
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
    examples: ['Cosmos', 'Polkadot', 'Avalanche'],
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
  }
]

const advantageIcons = {
  'Scalability Path': TrendingUp,
  'Security': Shield,
  'Censorship Resistance': Zap,
  'Composability': Network
}

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeComparison, setActiveComparison] = useState('monolithic')
  const [chartType, setChartType] = useState<'bar' | 'radar'>('bar')
  const [animatedValues, setAnimatedValues] = useState<number[]>([])

  const currentComparison = SLATE_CONTENT.comparison[activeComparison as keyof typeof SLATE_CONTENT.comparison]
  const activeType = comparisonTypes.find(type => type.id === activeComparison)!

  // Animate chart values
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(currentComparison.data.slate)
    }, 300)
    return () => clearTimeout(timer)
  }, [activeComparison, currentComparison.data.slate])

  const chartData = {
    labels: currentComparison.data.labels,
    datasets: [
      {
        label: 'Slate Protocol',
        data: animatedValues.length ? animatedValues : currentComparison.data.slate,
        backgroundColor: chartType === 'bar' 
          ? 'rgba(99, 102, 241, 0.8)'
          : 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: chartType === 'bar' ? 2 : 3,
        borderRadius: chartType === 'bar' ? 8 : 0,
        fill: chartType === 'radar',
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: chartType === 'radar' ? 6 : 0,
      },
      {
        label: `${activeType.examples[0]} & Others`,
        data: currentComparison.data.competitor,
        backgroundColor: chartType === 'bar'
          ? 'rgba(156, 163, 175, 0.6)'
          : 'rgba(156, 163, 175, 0.1)',
        borderColor: 'rgba(156, 163, 175, 1)',
        borderWidth: chartType === 'bar' ? 2 : 2,
        borderRadius: chartType === 'bar' ? 8 : 0,
        fill: chartType === 'radar',
        pointBackgroundColor: 'rgba(156, 163, 175, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: chartType === 'radar' ? 4 : 0,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart' as const,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 14,
            weight: 600
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (tooltipItem: any) => `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y || tooltipItem.parsed.r}/10`
        }
      }
    },
    scales: chartType === 'bar' ? {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12
          },
          color: '#6B7280'
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)'
        }
      },
      x: {
        ticks: {
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12,
            weight: 500
          },
          color: '#374151'
        },
        grid: {
          display: false
        }
      }
    } : {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          display: false
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.3)'
        },
        pointLabels: {
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 13,
            weight: 600
          },
          color: '#374151'
        }
      }
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 8) return CheckCircle
    if (score >= 6) return AlertTriangle
    return XCircle
  }

  return (
    <section id="comparison" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-800">Competitive Analysis</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Positioning in the Blockchain Landscape
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Slate&apos;s <span className="text-accent-primary font-semibold">integrated modularity</span> offers distinct advantages. 
            Select a category to see how it compares against leading solutions.
          </p>
        </motion.div>

        {/* Enhanced Comparison Type Selector */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {comparisonTypes.map((type, index) => {
            const Icon = type.icon
            const isActive = activeComparison === type.id
            return (
              <motion.button
                key={type.id}
                onClick={() => setActiveComparison(type.id)}
                className="group relative overflow-hidden"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {/* Card Background */}
                <div className={`
                  relative glass backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500
                  ${isActive 
                    ? 'border-accent-primary/50 shadow-2xl shadow-accent-primary/20' 
                    : 'border-white/10 hover:border-white/20 hover:shadow-xl'
                  }
                `}>
                  
                  {/* Active Background Gradient */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-10 rounded-3xl`}
                      layoutId="activeBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 
                    transition-opacity duration-300 rounded-3xl
                  `} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center min-w-[160px]">
                    {/* Icon with Enhanced Animation */}
                    <motion.div 
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300
                        ${isActive 
                          ? `bg-gradient-to-br ${type.color} shadow-lg shadow-accent-primary/30` 
                          : 'bg-gradient-to-br from-bg-card to-bg-secondary group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20'
                        }
                      `}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      animate={isActive ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-accent-primary'}`} />
                      
                      {/* Pulsing Ring for Active State */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-white/30"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className={`
                        font-bold text-lg mb-2 transition-colors duration-300
                        ${isActive ? 'text-gradient' : 'text-text-primary group-hover:text-accent-primary'}
                      `}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {type.shortLabel}
                    </motion.h3>
                    
                    {/* Examples */}
                    <div className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <motion.div
                          key={example}
                          className={`
                            text-xs font-medium px-2 py-1 rounded-lg transition-all duration-300
                            ${isActive 
                              ? 'bg-white/10 text-accent-primary' 
                              : 'bg-bg-card/50 text-text-secondary group-hover:bg-accent-primary/10 group-hover:text-accent-primary'
                            }
                          `}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        >
                          {example}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${type.color} rounded-full`} />
                        <div className={`absolute inset-0 w-2 h-2 bg-gradient-to-r ${type.color} rounded-full animate-ping`} />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Selection Border Animation */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-accent-primary/50"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  )}
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Enhanced Chart Type Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative glass backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl">
            {/* Background Slider */}
            <motion.div
              className="absolute top-2 bottom-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl shadow-lg"
              animate={{
                left: chartType === 'bar' ? '8px' : '50%',
                width: chartType === 'bar' ? 'calc(50% - 4px)' : 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <div className="relative flex">
              <motion.button
                onClick={() => setChartType('bar')}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  chartType === 'bar' 
                    ? 'text-white' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp className="w-4 h-4" />
                Bar Chart
              </motion.button>
              
              <motion.button
                onClick={() => setChartType('radar')}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  chartType === 'radar' 
                    ? 'text-white' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Network className="w-4 h-4" />
                Radar Chart
              </motion.button>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-xl opacity-50"></div>
          </div>
        </motion.div>

        {/* Main Comparison Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComparison}
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-card/50 via-bg-secondary/30 to-bg-card/50 rounded-3xl"></div>
            <div className={`absolute inset-0 bg-gradient-to-br ${activeType.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-5 rounded-3xl`}></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-accent-tertiary/20 to-accent-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Header with Enhanced Visual */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeType.color} shadow-lg`}>
                          <activeType.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${activeType.color} rounded-2xl blur-lg opacity-50 animate-pulse`}></div>
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                          {currentComparison.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-text-secondary font-medium">vs</span>
                          <div className="flex gap-1">
                            {activeType.examples.map((example, idx) => (
                              <span key={example} className="text-sm font-semibold text-accent-primary">
                                {example}{idx < activeType.examples.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Decorative Line */}
                    <motion.div 
                      className="h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent mb-6"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-lg text-text-secondary leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {currentComparison.text}
                  </motion.p>

                  {/* Enhanced Score Breakdown */}
                  <div className="space-y-3">
                    <motion.h4 
                      className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <TrendingUp className="w-5 h-5 text-accent-primary" />
                      Performance Breakdown
                    </motion.h4>
                    
                    {currentComparison.data.labels.map((label, index) => {
                      const slateScore = currentComparison.data.slate[index]
                      const competitorScore = currentComparison.data.competitor[index]
                      const ScoreIcon = getScoreIcon(slateScore)
                      const Icon = advantageIcons[label as keyof typeof advantageIcons]
                      const advantage = slateScore - competitorScore
                      
                      return (
                        <motion.div
                          key={label}
                          className="group relative overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative glass-light border border-white/10 rounded-xl p-5 transition-all duration-300 group-hover:border-accent-primary/30">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20">
                                  <Icon className="w-5 h-5 text-accent-primary" />
                                </div>
                                <div>
                                  <span className="font-semibold text-text-primary text-lg">{label}</span>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-text-secondary">Advantage:</span>
                                    <span className={`text-xs font-bold ${advantage > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                      {advantage > 0 ? '+' : ''}{advantage} points
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-6">
                                {/* Score Visualization */}
                                <div className="text-right">
                                  <div className="text-xs text-text-secondary mb-1">Slate vs Others</div>
                                  <div className="flex items-center gap-3">
                                    <div className="text-center">
                                      <div className={`text-2xl font-bold ${getScoreColor(slateScore)}`}>
                                        {slateScore}
                                      </div>
                                      <div className="text-xs text-text-secondary">Slate</div>
                                    </div>
                                    <div className="text-text-secondary font-bold">vs</div>
                                    <div className="text-center">
                                      <div className="text-xl font-medium text-text-secondary">
                                        {competitorScore}
                                      </div>
                                      <div className="text-xs text-text-secondary">Others</div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Progress Bars */}
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <motion.div 
                                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${slateScore * 10}%` }}
                                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                      />
                                    </div>
                                    <ScoreIcon className={`w-4 h-4 ${getScoreColor(slateScore)}`} />
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <motion.div 
                                        className="h-full bg-gray-400 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${competitorScore * 10}%` }}
                                        transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
                
                {/* Enhanced Chart Section */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Chart Container with Enhanced Glass Effect */}
                  <div className="relative glass backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    {/* Chart Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold text-text-primary">Performance Metrics</h4>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-3 h-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
                        <span>Slate Protocol</span>
                      </div>
                    </div>
                    
                    <div className="h-96 relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${chartType}-${activeComparison}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          {chartType === 'bar' ? (
                            <Bar data={chartData} options={chartOptions} />
                          ) : (
                            <Radar data={chartData} options={chartOptions} />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Enhanced Floating Stats */}
                  <motion.div
                    className="absolute -top-6 -right-6 glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="text-3xl font-bold text-gradient mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 300 }}
                      >
                        {Math.round((currentComparison.data.slate.reduce((a, b) => a + b, 0) / currentComparison.data.slate.length - 
                                   currentComparison.data.competitor.reduce((a, b) => a + b, 0) / currentComparison.data.competitor.length) * 10)}%
                      </motion.div>
                      <div className="text-xs text-text-secondary font-medium">Performance</div>
                      <div className="text-xs text-text-secondary">Advantage</div>
                    </div>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-accent-primary/30 animate-ping"></div>
                  </motion.div>

                  {/* Floating Metrics */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 glass backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-primary">
                          {currentComparison.data.slate.filter(score => score >= 8).length}/{currentComparison.data.slate.length}
                        </div>
                        <div className="text-xs text-text-secondary">Excellence</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Key Advantages Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-text-primary mb-6">
              Why Slate Leads the Pack
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "Superior Scalability", desc: "Modular design scales each layer independently" },
                { icon: Shield, title: "Uncompromised Security", desc: "Cryptoeconomic security with decentralized sequencing" },
                { icon: Network, title: "True Composability", desc: "Atomic transactions across all protocol layers" }
              ].map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl mb-4">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-text-primary mb-2">{advantage.title}</h5>
                  <p className="text-sm text-text-secondary">{advantage.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}