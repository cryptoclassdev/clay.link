import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function FuturePage() {
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
          Future Roadmap
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Real products, real timelines, real entertainment
        </p>

        {/* Interactive Timeline */}
        <div className="space-y-8">
          {/* Q1 2025 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#8FE1A2]">
            <div className="text-sm font-bold text-[#8FE1A2] mb-2">Q1 2025</div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Foundation</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">✓</span>
                <div>
                  <strong>Popkins Launch on Sui</strong> - 25,000 NFT companion collection expanding our multi-chain presence
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">✓</span>
                <div>
                  <strong>Achievement System v2</strong> - Enhanced staking rewards and XP tracking
                </div>
              </li>
            </ul>
          </div>

          {/* Q2 2025 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFD93D]">
            <div className="text-sm font-bold text-[#FFD93D] mb-2">Q2 2025</div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Gaming Launch</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#FFD93D] mt-1">🎮</span>
                <div>
                  <strong>Gameloft Mobile Game</strong> - iOS & Android adventure game. Think Pokémon GO meets Claynosaurz universe
                </div>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-[#FAFAFA] rounded-lg">
              <p className="text-sm text-gray-600">
                Partnership with industry-leading mobile game developer Gameloft to create an immersive, free-to-play mobile experience
              </p>
            </div>
          </div>

          {/* Q3 2025 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FF6B9D]">
            <div className="text-sm font-bold text-[#FF6B9D] mb-2">Q3 2025</div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Entertainment Series</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B9D] mt-1">📺</span>
                <div>
                  <strong>YouTube Series Premiere</strong> - 39 episodes × 7 minutes each
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B9D] mt-1">🤝</span>
                <div>
                  <strong>Partnership with Mediawan Kids & Family</strong> - Major distribution deal with traditional entertainment company
                </div>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-[#FAFAFA] rounded-lg">
              <p className="text-sm text-gray-600">
                Professional animated series bringing Claynosaurz characters to life with storylines, voice acting, and cinema-quality production
              </p>
            </div>
          </div>

          {/* Q4 2025 & Beyond */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#8FE1A2]">
            <div className="text-sm font-bold text-[#8FE1A2] mb-2">Q4 2025 & Beyond</div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Ecosystem Expansion</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">🎮</span>
                <div>
                  <strong>SuiPlay0X1 Handheld Game</strong> - Exclusive game for Sui's gaming handheld device
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFD93D] mt-1">🪙</span>
                <div>
                  <strong>Token Considerations</strong> - Community frequently asks "wen token?" - We're carefully researching tokenomics
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B9D] mt-1">📺</span>
                <div>
                  <strong>Netflix Distribution Potential</strong> - In discussions for traditional streaming platform distribution
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#8FE1A2] to-[#FFD93D] rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            This is just the beginning
          </h3>
          <p className="text-white text-lg mb-6">
            Join The Herd and be part of the first Web3 entertainment brand competing with traditional studios
          </p>
          <Link 
            href="/marketplace"
            className="inline-block bg-white text-[#8FE1A2] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Claynosaurz →
          </Link>
        </div>
      </div>
    </main>
  )
}
