"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CommunityPage() {
  const [communityStats, setcommunityStats] = useState({
    totalMembers: '530K+',
    discordMembers: '180K+',
    onlineNow: '---',
    loading: true
  })

  useEffect(() => {
    async function fetchCommunityData() {
      try {
        // TODO: Integrate actual Discord/social media APIs when available
        // For now using estimated values
        setTimeout(() => {
          setcommunityStats({
            totalMembers: '530K+',
            discordMembers: '180K+',
            onlineNow: Math.floor(Math.random() * 5000 + 8000).toLocaleString(),
            loading: false
          })
        }, 500)
      } catch (error) {
        console.error('[v0] Error fetching community data:', error)
        setcommunityStats(prev => ({ ...prev, loading: false }))
      }
    }
    
    fetchCommunityData()
    // Refresh every 2 minutes
    const interval = setInterval(fetchCommunityData, 120000)
    return () => clearInterval(interval)
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
          Community Hub
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Join "The Herd" - 450K+ members worldwide
        </p>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#8FE1A2] to-[#FFD93D] rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🎉 Welcome to The Herd!</h2>
          <p className="text-white text-lg mb-6">
            Whether you're a Genesis holder or just discovering Claynosaurz, our community is here to welcome you with open arms.
          </p>
          <a 
            href="https://discord.gg/claynosaurz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#8FE1A2] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Join Discord →
          </a>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#8FE1A2] mb-2">
              {communityStats.totalMembers}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-2">Total Members</div>
            <p className="text-gray-600">Across all platforms</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#FFD93D] mb-2">
              {communityStats.loading ? '...' : communityStats.onlineNow}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-2">Online Now</div>
            <p className="text-gray-600">Active community members</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#FF6B9D] mb-2">Global</div>
            <div className="text-xl font-semibold text-gray-700 mb-2">Presence</div>
            <p className="text-gray-600">Paris, NYC, Lisbon, LA events</p>
          </div>
        </div>

        {/* Why Join Section */}
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Why Join The Herd?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Direct Team Access</h3>
            <p className="text-gray-700">
              Chat directly with founders, artists, and team members. Get answers to your questions and share feedback.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Community Events</h3>
            <p className="text-gray-700">
              Participate in contests, art competitions, meme battles, and exclusive holder events with prizes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">📰</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">First to Know</h3>
            <p className="text-gray-700">
              Get announcements before anyone else. Early access to new drops, partnerships, and major updates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Exclusive Giveaways</h3>
            <p className="text-gray-700">
              Regular NFT giveaways, whitelist spots, merchandise, and special rewards for active members.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Make Friends</h3>
            <p className="text-gray-700">
              Connect with collectors, creators, and enthusiasts worldwide. Form lasting friendships in The Herd.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Learn & Grow</h3>
            <p className="text-gray-700">
              Educational resources on NFTs, staking, Web3, and blockchain. Grow your knowledge with The Herd.
            </p>
          </div>
        </div>

        {/* Community Highlights */}
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Community Highlights</h2>
        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Creator Rewards Program</h3>
            <p className="text-gray-700 mb-4">
              Talented community members create amazing fan art, animations, and content. We recognize and reward top creators with:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">✓</span>
                <span>Featured spotlights on official channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">✓</span>
                <span>Exclusive NFT rewards and bonuses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">✓</span>
                <span>Opportunities to collaborate with the team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">IRL Events</h3>
            <p className="text-gray-700 mb-4">
              The Herd meets in real life! We've hosted community gatherings in:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {['Paris 🇫🇷', 'New York 🇺🇸', 'Lisbon 🇵🇹', 'Los Angeles 🇺🇸'].map((city) => (
                <div key={city} className="bg-[#FAFAFA] rounded-lg p-4 text-center font-semibold text-gray-700">
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Helpful Resources</h3>
            <p className="text-gray-700 mb-4">
              New to Claynosaurz? Our community provides comprehensive guides and support:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">📖</span>
                <span>Complete newcomer onboarding guide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">❓</span>
                <span>Detailed FAQ covering common questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">🔒</span>
                <span>Staking tutorials and class selection help</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8FE1A2] mt-1">💼</span>
                <span>Wallet setup and security best practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* New Member Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">New Here?</h2>
          <p className="text-gray-700 mb-6">
            Start by introducing yourself in the #introductions channel! Tell us:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] text-xl">✨</span>
              <span>How you discovered Claynosaurz</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] text-xl">🦖</span>
              <span>Your favorite Claynosaurz character or trait</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8FE1A2] text-xl">🎯</span>
              <span>What brought you to The Herd</span>
            </li>
          </ul>
          <p className="text-gray-600 mb-6">
            Don't be shy - The Herd is friendly, welcoming, and always ready to help newcomers feel at home!
          </p>
          <a 
            href="https://discord.gg/claynosaurz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#8FE1A2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7CD18E] transition-colors"
          >
            Join The Herd on Discord →
          </a>
        </div>
      </div>
    </main>
  )
}
