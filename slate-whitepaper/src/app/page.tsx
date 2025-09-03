'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Advantage from '@/components/Advantage'
import LiveStats from '@/components/LiveStats'
import Architecture from '@/components/Architecture'
import SlateBus from '@/components/SlateBus'
import DeveloperExperience from '@/components/DeveloperExperience'
import Comparison from '@/components/Comparison'
import Tokenomics from '@/components/Tokenomics'
import Security from '@/components/Security'
import Roadmap from '@/components/Roadmap'
import WhitepaperSection from '@/components/WhitepaperSection'
import GetInvolved from '@/components/GetInvolved'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Advantage />
        <LiveStats />
        <Architecture />
        <SlateBus />
        <DeveloperExperience />
        <Comparison />
        <Tokenomics />
        <Security />
        <Roadmap />
        <WhitepaperSection />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  )
}