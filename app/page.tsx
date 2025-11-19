"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function Home() {
  const router = useRouter()
  const [activeLinkCard, setActiveLinkCard] = useState<string | null>(null)
  const [stats, setStats] = useState({
    floorPrice: '---',
    totalVolume: '---',
    tiktokViews: '1B+'
  })

  useEffect(() => {
    async function fetchLiveStats() {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        
        setStats(data)
      } catch (error) {
        console.error('[v0] Error fetching stats:', error)
        setStats({
          floorPrice: '2.5 SOL',
          totalVolume: '500K SOL',
          tiktokViews: '1B+'
        })
      }
    }
    
    fetchLiveStats()
    // Refresh every 5 minutes
    const interval = setInterval(fetchLiveStats, 300000)
    return () => clearInterval(interval)
  }, [])

  const handleLinkCardTap = (id: string) => {
    setActiveLinkCard(id)
  }

  const handleLinkOutsideTap = () => {
    setActiveLinkCard(null)
  }

  return (
    <main className="min-h-screen">

      <section
        id="link-hub"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 md:px-8 lg:px-15"
        onClick={handleLinkOutsideTap}
      >
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-image-ZSAxlXpRBEVhDKBzhH26scbkOO3n4K.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        <div className="mx-auto w-full max-w-[2188px]">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/images/design-mode/clay-logo.png"
              alt="Claynosaurz"
              width={600}
              height={120}
              className="w-[300px] md:w-[500px] lg:w-[600px] h-auto"
              priority
            />
          </div>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <p className="text-xs md:text-sm text-[#2C3E50] font-medium text-center">
                10,000 NFTs | Floor: {stats.floorPrice} | Volume: {stats.totalVolume} | 450K+ Community | {stats.tiktokViews} Views
              </p>
            </div>
          </div>

          {/* Mobile: 2-column grid */}
          <div
            className={`grid grid-cols-2 gap-4 overflow-hidden px-4 py-8 sm:hidden ${activeLinkCard ? "[&>*]:scale-[0.65]" : ""}`}
          >
            <Link
              href="/socials"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-socials") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-socials")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-socials" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-1iLWLQirvHKv766Kas23CdRIlz3xL9.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/tiktok-icon.png"
                alt="Social Media Hub"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-socials" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-socials" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-socials" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Social Media Hub</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">
                  350M+ TikTok views
                </p>
              </div>
            </Link>

            <Link
              href="/team"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-team") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-team")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-team" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-p4YQkIttcopriFtH0OpeZKcoGrTXkc.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/linkedin-icon.png"
                alt="The Team"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-team" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-team" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-team" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">The Team</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">Disney, Marvel, Dreamworks</p>
              </div>
            </Link>

            <Link
              href="/why-were-excited"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-excited") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-excited")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-excited" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-l7QDyUXjxCIxahUrNgDRjWTon8Lytm.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/claw-icon.png"
                alt="Why We're Excited"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-excited" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-excited" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-excited" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Why We're Excited</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">
                  Evolution of Digital Entertainment
                </p>
              </div>
            </Link>

            <Link
              href="/future"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-future") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-future")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-future" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-nB7Nag6pIAowA285ktmbTK3uBqnJ3J.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/youtube-icon.png"
                alt="Future Roadmap"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-future" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-future" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-future" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Future Roadmap</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">Gameloft game & YouTube series</p>
              </div>
            </Link>

            <Link
              href="/marketplace"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-marketplace") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-marketplace")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-marketplace" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-tDEiSuNl9xLmS8wZqljK9xwKjfv6dS.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/cart-icon.png"
                alt="Marketplace"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-marketplace" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-marketplace" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-marketplace" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Marketplace</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">Collections & floor prices</p>
              </div>
            </Link>

            <Link
              href="/staking"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-staking") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-staking")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-staking" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-l7s5VTGLqpAnQPcdWfK5YkDlmDOEKG.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/instagram-icon.png"
                alt="Staking & Rewards"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-staking" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-staking" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-staking" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Staking & Rewards</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">Stake. Earn. Build Legacy</p>
              </div>
            </Link>

            <Link
              href="/community"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-community") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-community")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-community" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-HJJD7W1BQNh6M0EOxBAhVX0ZGCYDRN.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/discord-icon.png"
                alt="Community Hub"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-community" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-community" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-community" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Community Hub</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">530K+ members worldwide</p>
              </div>
            </Link>

            <Link
              href="/future"
              onClick={(e) => {
                e.stopPropagation()
                if (activeLinkCard !== "mobile-gaming") {
                  e.preventDefault()
                  handleLinkCardTap("mobile-gaming")
                }
              }}
              className={`group/linkcard relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 origin-center ${
                activeLinkCard === "mobile-gaming" ? "!scale-[1.1] !shadow-2xl !z-10" : ""
              }`}
              style={{
                backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EiGMWPJquEGpvw8PivPEOwqAoJdfgT.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/design-mode/twitter-icon.png"
                alt="Gaming & Entertainment"
                width={48}
                height={48}
                className={`transition-all duration-300 ${
                  activeLinkCard === "mobile-gaming" ? "blur-sm" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-gaming" ? "opacity-100" : ""
                }`}
              />
              <div
                className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-3 py-3 text-center opacity-0 transition-opacity duration-300 ${
                  activeLinkCard === "mobile-gaming" ? "opacity-100" : ""
                }`}
              >
                <h3 className="mb-1 text-sm font-bold text-white break-words">Gaming & Entertainment</h3>
                <p className="text-[9px] leading-tight text-white/80 break-words">Mobile game & series</p>
              </div>
            </Link>
          </div>

          {/* Desktop: Flexbox columns with scattered layout */}
          <div className="group hidden sm:flex sm:flex-row sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
            {/* Column 1 */}
            <div className="flex flex-1 flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
              <Link
                href="/socials"
                className="group/linkcard relative mt-16 flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 md:mt-20 lg:mt-24 xl:mt-28 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-1iLWLQirvHKv766Kas23CdRIlz3xL9.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/tiktok-icon.png"
                  alt="Social Media Hub"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Social Media Hub
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    350M+ TikTok views
                  </p>
                </div>
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-1 flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
              <Link
                href="/team"
                className="group/linkcard relative flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-p4YQkIttcopriFtH0OpeZKcoGrTXkc.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/linkedin-icon.png"
                  alt="The Team"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    The Team
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Disney, Marvel, Dreamworks
                  </p>
                </div>
              </Link>
              <Link
                href="/marketplace"
                className="group/linkcard relative flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-tDEiSuNl9xLmS8wZqljK9xwKjfv6dS.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/cart-icon.png"
                  alt="Marketplace"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Marketplace
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Collections & floor prices
                  </p>
                </div>
              </Link>
            </div>

            {/* Column 3 - Main/bigger card */}
            <div className="flex flex-1 flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
              <Link
                href="/why-were-excited"
                className="group/linkcard relative flex aspect-[1/1.8] transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-l7QDyUXjxCIxahUrNgDRjWTon8Lytm.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/claw-icon.png"
                  alt="Why We're Excited"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Why We're Excited
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Evolution of Digital Entertainment
                  </p>
                </div>
              </Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-1 flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
              <Link
                href="/future"
                className="group/linkcard relative flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-nB7Nag6pIAowA285ktmbTK3uBqnJ3J.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/youtube-icon.png"
                  alt="Future Roadmap"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Future Roadmap
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Gameloft game & YouTube series
                  </p>
                </div>
              </Link>
              <Link
                href="/staking"
                className="group/linkcard relative flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-l7s5VTGLqpAnQPcdWfK5YkDlmDOEKG.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/instagram-icon.png"
                  alt="Staking & Rewards"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Staking & Rewards
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Stake. Earn. Build Legacy
                  </p>
                </div>
              </Link>
            </div>

            {/* Column 5 */}
            <div className="flex flex-1 flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
              <Link
                href="/future"
                className="group/linkcard relative mt-6 flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 md:mt-8 lg:mt-10 xl:mt-12 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EiGMWPJquEGpvw8PivPEOwqAoJdfgT.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/twitter-icon.png"
                  alt="Gaming & Entertainment"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Gaming & Entertainment
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    Mobile game & series
                  </p>
                </div>
              </Link>
              <Link
                href="/community"
                className="group/linkcard relative flex aspect-square transform-gpu items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-300 will-change-transform group-has-[.group\/linkcard:hover]:scale-75 hover:!scale-[1.3] hover:shadow-2xl hover:z-10 md:mt-8 lg:mt-10 xl:mt-12 2xl:hover:!scale-[1.35]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-HJJD7W1BQNh6M0EOxBAhVX0ZGCYDRN.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Image
                  src="/images/design-mode/discord-icon.png"
                  alt="Community Hub"
                  width={80}
                  height={80}
                  className="h-12 w-12 text-white transition-all duration-300 group-hover/linkcard:blur-sm md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100" />
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-4 py-4 text-center opacity-0 transition-opacity duration-300 group-hover/linkcard:opacity-100 md:px-6 md:py-6 xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl break-words">
                    Community Hub
                  </h3>
                  <p className="text-xs text-white/80 md:text-sm lg:text-base xl:text-xs 2xl:text-sm break-words">
                    530K+ members worldwide
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FAFAFA] border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <a href="https://discord.gg/claynosaurz" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#8FE1A2] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="https://twitter.com/claynosaurz" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#8FE1A2] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/claynosaurz" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#8FE1A2] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-[#2C3E50]">
              © 2025 All rights reserved | Built with love by{" "}
              <a 
                href="https://communication.link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8FE1A2] hover:text-[#7DD08F] transition-colors"
              >
                communication.link
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
