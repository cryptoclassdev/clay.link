"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MarketplacePage() {
  const [marketData, setMarketData] = useState({
    claynosaurzFloor: '---',
    claynosaurzVolume: '---',
    claymakersFloor: '---',
    claymakersVolume: '---',
    loading: true
  })

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const [claynoRes, makersRes] = await Promise.all([
          fetch('https://api-mainnet.magiceden.dev/v2/collections/claynosaurz/stats'),
          fetch('https://api-mainnet.magiceden.dev/v2/collections/claymakers/stats')
        ])
        
        const claynoData = await claynoRes.json()
        const makersData = await makersRes.json()
        
        setMarketData({
          claynosaurzFloor: claynoData.floorPrice ? `${(claynoData.floorPrice / 1000000000).toFixed(2)} SOL` : 'N/A',
          claynosaurzVolume: claynoData.volumeAll ? `${Math.floor(claynoData.volumeAll / 1000000000 / 1000)}K SOL` : 'N/A',
          claymakersFloor: makersData.floorPrice ? `${(makersData.floorPrice / 1000000000).toFixed(3)} SOL` : 'N/A',
          claymakersVolume: makersData.volumeAll ? `${Math.floor(makersData.volumeAll / 1000000000 / 100)/10}K SOL` : 'N/A',
          loading: false
        })
      } catch (error) {
        console.error('[v0] Error fetching marketplace data:', error)
        setMarketData(prev => ({ ...prev, loading: false }))
      }
    }
    
    fetchMarketData()
  }, [])

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
          Marketplace
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Collect Claynosaurz, Popkins, and in-game assets
        </p>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Claynosaurz OG */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#8FE1A2]">
            <div className="w-full h-48 bg-gradient-to-br from-[#8FE1A2] to-[#FFD93D] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🦖</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Claynosaurz OG</h3>
            <div className="text-sm text-gray-600 mb-3">10,000 Supply • Solana</div>
            <p className="text-gray-700 mb-4">
              Genesis collection. Stake for XP, participate in governance, access all future rewards.
            </p>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Floor Price:</span>
                <span className="text-lg font-bold text-[#8FE1A2]">
                  {marketData.loading ? '...' : marketData.claynosaurzFloor}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Volume:</span>
                <span className="text-lg font-bold text-gray-700">
                  {marketData.loading ? '...' : marketData.claynosaurzVolume}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://magiceden.io/marketplace/claynosaurz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#8FE1A2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#7CD18E] transition-colors"
              >
                Magic Eden →
              </a>
              <a 
                href="https://tensor.trade/claynosaurz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Tensor →
              </a>
            </div>
          </div>

          {/* Saga Collection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FF6B9D]">
            <div className="w-full h-48 bg-gradient-to-br from-[#FF6B9D] to-[#FFD93D] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Saga Collection</h3>
            <div className="text-sm text-gray-600 mb-3">Exclusive • Solana Mobile</div>
            <p className="text-gray-700 mb-4">
              Limited edition NFTs exclusively for Solana Saga phone owners. Rare and highly sought after.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://magiceden.io/marketplace/claynosaurz-saga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#FF6B9D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#FF5A8C] transition-colors"
              >
                View Collection →
              </a>
            </div>
          </div>

          {/* Claymakers */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD93D]">
            <div className="w-full h-48 bg-gradient-to-br from-[#FFD93D] to-[#8FE1A2] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🔨</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Claymakers</h3>
            <div className="text-sm text-gray-600 mb-3">10,000 Supply • Crafting Tools</div>
            <p className="text-gray-700 mb-4">
              Essential crafting tools for the Claynosaurz ecosystem. Use to create and customize.
            </p>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Floor Price:</span>
                <span className="text-lg font-bold text-[#FFD93D]">
                  {marketData.loading ? '...' : marketData.claymakersFloor}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Volume:</span>
                <span className="text-lg font-bold text-gray-700">
                  {marketData.loading ? '...' : marketData.claymakersVolume}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://magiceden.io/marketplace/claymakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#FFD93D] text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-[#FFC933] transition-colors"
              >
                Browse →
              </a>
            </div>
          </div>

          {/* Clay Resources */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-400">
            <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Clay Resources</h3>
            <div className="text-sm text-gray-600 mb-3">31,000 Supply • 6 Colors + Gold</div>
            <p className="text-gray-700 mb-4">
              Colored clay resources for crafting. Includes rare Gold clay for premium creations.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://magiceden.io/marketplace/clay-resources" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Collect →
              </a>
            </div>
          </div>

          {/* Food Items */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-400">
            <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🍕</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Food Items</h3>
            <div className="text-sm text-gray-600 mb-3">Croissants, Tacos, Pizzas, Sardinhas</div>
            <p className="text-gray-700 mb-4">
              Fun food NFTs for the Claynosaurz universe. Collect them all!
            </p>
            <div className="flex gap-3">
              <a 
                href="https://magiceden.io/marketplace/claynosaurz-food" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Browse Food →
              </a>
            </div>
          </div>

          {/* Popkins on Sui */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-400">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🐾</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Popkins</h3>
            <div className="text-sm text-gray-600 mb-3">25,000 Supply • Sui Blockchain</div>
            <p className="text-gray-700 mb-4">
              Companion collection on Sui. Adorable creatures with unique traits and utilities.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://tradeport.xyz/sui/collection/popkins" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View on Sui →
              </a>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">New to NFTs?</h2>
          <p className="text-gray-700 mb-6">
            Need help setting up a wallet or buying your first Claynosaurz? Our community is here to guide you through every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://discord.gg/claynosaurz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#8FE1A2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7CD18E] transition-colors"
            >
              Get Help on Discord →
            </a>
            <a 
              href="/staking" 
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Learn About Staking →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
