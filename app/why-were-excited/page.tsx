import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function WhyWereExcitedPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#8FE1A2] hover:text-[#7CD18E] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold text-[#2C3E50] mb-4">
          The Evolution of Digital Entertainment
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          First Web3 brand to win animation awards against traditional studios
        </p>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Our Journey</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#8FE1A2]">
              <div className="text-sm font-bold text-[#8FE1A2] mb-2">2021</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">The Beginning</h3>
              <p className="text-gray-700">
                Founded by animation veterans from Disney, Dreamworks, and Sony. Vision: bring Hollywood-quality animation to Web3.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FFD93D]">
              <div className="text-sm font-bold text-[#FFD93D] mb-2">November 2022</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Genesis Mint</h3>
              <p className="text-gray-700">
                10,000 Claynosaurz NFTs launched on Solana. Generated 600K SOL volume in just 2 weeks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FF6B9D]">
              <div className="text-sm font-bold text-[#FF6B9D] mb-2">2022</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Breakpoint Free NFT</h3>
              <p className="text-gray-700">
                Exclusive free mint at Solana Breakpoint conference. NFTs reached value of 100+ SOL, rewarding early community members.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#8FE1A2]">
              <div className="text-sm font-bold text-[#8FE1A2] mb-2">2023</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Saga Phone Exclusive</h3>
              <p className="text-gray-700">
                First to launch exclusive mint on Solana Mobile's Saga phone, pioneering mobile Web3 experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FFD93D]">
              <div className="text-sm font-bold text-[#FFD93D] mb-2">2024</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Award-Winning Year</h3>
              <p className="text-gray-700">
                Won 13 Collision Awards and a prestigious Webby Award. First Web3 animation brand to beat traditional studios.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FF6B9D]">
              <div className="text-sm font-bold text-[#FF6B9D] mb-2">2025</div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Sui Expansion</h3>
              <p className="text-gray-700">
                Launched Popkins collection (25,000 NFTs) on Sui blockchain, becoming first major multi-chain entertainment brand.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Professional Animation Quality</h3>
            <p className="text-gray-700">
              Not amateur art - actual Hollywood-level animation from industry veterans who worked on Avatar, Avengers, and more.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Community-Driven Development</h3>
            <p className="text-gray-700">
              450K+ followers across social media. Our community "The Herd" shapes the future of Claynosaurz together.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">⛓️</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Multi-chain Ecosystem</h3>
            <p className="text-gray-700">
              Started on Solana, expanded to Sui. Building the future of cross-chain entertainment and digital collectibles.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Real Entertainment Products</h3>
            <p className="text-gray-700">
              Not just NFTs - we're building mobile games with Gameloft, YouTube series with Mediawan, and handheld games with Sui.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#8FE1A2] to-[#FFD93D] rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000</div>
              <div className="text-white font-semibold">Genesis NFTs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">450K+</div>
              <div className="text-white font-semibold">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1B+</div>
              <div className="text-white font-semibold">Total Views</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
