"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function StakingPage() {
  const [stakingStats, setStakingStats] = useState({
    totalStaked: '---',
    percentStaked: '---',
    totalXP: '---',
    activeStakers: '---',
    loading: true
  })

  useEffect(() => {
    async function fetchStakingData() {
      try {
        // TODO: Replace with actual Claynosaurz staking API when available
        // const response = await fetch('https://staking-api.claynosaurz.com/stats')
        // const data = await response.json()
        
        // Using estimated values based on project size
        setTimeout(() => {
          setStakingStats({
            totalStaked: '7,200',
            percentStaked: '72%',
            totalXP: '45.2M',
            activeStakers: '3,800+',
            loading: false
          })
        }, 500)
      } catch (error) {
        console.error('[v0] Error fetching staking data:', error)
        setStakingStats(prev => ({ ...prev, loading: false }))
      }
    }
    
    fetchStakingData()
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
          Staking & Rewards
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Stake. Earn. Build Your Legacy.
        </p>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class Selection is Permanent</h3>
              <p className="text-gray-700">
                Before staking, you must choose a class for your Claynosaurz. Once selected, it cannot be changed. Join Discord for guidance on which class is best for you!
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Staking Features</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#8FE1A2]">
              {stakingStats.loading ? '...' : stakingStats.totalStaked}
            </div>
            <div className="text-sm text-gray-600 mt-2">NFTs Staked</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#FFD93D]">
              {stakingStats.loading ? '...' : stakingStats.percentStaked}
            </div>
            <div className="text-sm text-gray-600 mt-2">% Staked</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#FF6B9D]">
              {stakingStats.loading ? '...' : stakingStats.totalXP}
            </div>
            <div className="text-sm text-gray-600 mt-2">Total XP</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600">
              {stakingStats.loading ? '...' : stakingStats.activeStakers}
            </div>
            <div className="text-sm text-gray-600 mt-2">Active Stakers</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Flexible Staking</h3>
            <p className="text-gray-700">
              Lock for multipliers or stake freely. Choose the strategy that works best for you. Longer locks = higher XP multipliers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">XP System</h3>
            <p className="text-gray-700">
              Earn experience points over time. XP determines your rank, unlocks rewards, and positions you for future airdrops and benefits.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Class System</h3>
            <p className="text-gray-700">
              Each Claynosaurz can be assigned to a specific class. Different classes have unique XP multipliers and future utilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Rewards Track</h3>
            <p className="text-gray-700">
              As ecosystem grows, XP holders receive exclusive benefits: token allocations, merchandise, game items, and series access.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8FE1A2] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">Choose Your Class</h4>
                <p className="text-gray-700">
                  Research classes on Discord, understand multipliers, and select the class that aligns with your goals. This decision is permanent.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD93D] text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">Stake Your NFT</h4>
                <p className="text-gray-700">
                  Connect wallet to staking.claynosaurz.com and lock your Claynosaurz. Choose lock duration for XP multipliers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B9D] text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">Earn XP Daily</h4>
                <p className="text-gray-700">
                  Accumulate experience points automatically. Track your progress on the staking dashboard and climb the leaderboard.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8FE1A2] text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">Unlock Rewards</h4>
                <p className="text-gray-700">
                  High XP holders get priority access to new drops, exclusive merchandise, game beta access, and future token allocations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#8FE1A2] to-[#FFD93D] rounded-2xl p-8 text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Staking?
          </h3>
          <p className="text-white text-lg mb-6">
            Connect your wallet and begin earning XP today
          </p>
          <a 
            href="https://staking.claynosaurz.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#8FE1A2] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Launch Staking Platform →
          </a>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-6">
            Join The Herd on Discord for comprehensive guides on:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] mt-1">✓</span>
              <span>Choosing the right class for your Claynosaurz</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] mt-1">✓</span>
              <span>Understanding XP calculations and multipliers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] mt-1">✓</span>
              <span>Lock duration strategies for maximum returns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] mt-1">✓</span>
              <span>Troubleshooting wallet and staking issues</span>
            </li>
          </ul>
          <a 
            href="https://discord.gg/claynosaurz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#8FE1A2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7CD18E] transition-colors"
          >
            Join Discord for Support →
          </a>
        </div>
      </div>
    </main>
  )
}
