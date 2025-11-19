"use client"

import Link from "next/link"
import { ArrowLeft, Play, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

export default function SocialsPage() {
  useEffect(() => {
    const tiktokScript = document.createElement('script')
    tiktokScript.src = 'https://www.tiktok.com/embed.js'
    tiktokScript.async = true
    document.body.appendChild(tiktokScript)

    const twitterScript = document.createElement('script')
    twitterScript.src = 'https://platform.twitter.com/widgets.js'
    twitterScript.async = true
    twitterScript.charset = 'utf-8'
    document.body.appendChild(twitterScript)

    return () => {
      document.body.removeChild(tiktokScript)
      document.body.removeChild(twitterScript)
    }
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f0f3d6' }}>
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-[#8FE1A2] transition-all duration-500 mb-16 group hover:gap-3"
        >
          <ArrowLeft className="w-5 h-5 transition-all duration-300 group-hover:-translate-x-2" />
          <span className="font-medium text-lg">Back to Home</span>
        </Link>

        <div className="mb-24 text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-none">
            Social Media Hub
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#8FE1A2] to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Creating content that transcends Web3
          </p>
        </div>

        <section className="mb-32 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900">TikTok</h2>
            </div>
            <p className="text-xl text-slate-600 font-light">350M+ Views Across the Platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {['7537735731683396920', '7516190566070160645', '7403749461756742918'].map((videoId, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-[#8FE1A2]/50 hover:-translate-y-3 hover:rotate-1 group flex flex-col items-center"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-full max-w-[325px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8FE1A2]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@claynosaurz" 
                    data-video-id={videoId}
                    style={{ maxWidth: '100%', minWidth: '100%' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/@claynosaurz"
                      >
                        @claynosaurz
                      </a>
                    </section>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://tiktok.com/@claynosaurz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 hover:scale-105 group"
            >
              <span>Follow on TikTok</span>
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>

        <section className="mb-32 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900">YouTube</h2>
            </div>
            <p className="text-xl text-slate-600 font-light">Latest Shorts & Compilations</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-red-500/30 group">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Claynosaurz YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://youtube.com/@claynosaurz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:scale-105 group"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>

        <section className="mb-32 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Instagram</h2>
            </div>
            <p className="text-xl text-slate-600 font-light">200K+ Followers & Growing</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-pink-500/30 group">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Posts', value: '2.5K+' },
                  { label: 'Engagement', value: '15%' },
                  { label: 'Daily Reach', value: '50K+' },
                  { label: 'Stories', value: 'Daily' },
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 hover:border-pink-300 transition-all duration-500 hover:scale-105"
                  >
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Behind-the-scenes content, character artwork, and community highlights shared daily.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://instagram.com/claynosaurz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-600/30 transition-all duration-500 hover:scale-105 group"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>

        <section className="mb-32 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Twitter / X</h2>
            </div>
            <p className="text-xl text-slate-600 font-light">Real-Time Updates & Announcements</p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-slate-900/30 group flex justify-center">
              <blockquote className="twitter-tweet" data-theme="light" data-width="550">
                <p lang="en" dir="ltr">
                  Building the future of Web3 entertainment, one Claynosaurz at a time 🦖✨
                  <a href="https://twitter.com/hashtag/Claynosaurz?src=hash&amp;ref_src=twsrc%5Etfw">#Claynosaurz</a>
                </p>
                &mdash; Claynosaurz (@claynosaurz) 
                <a href="https://twitter.com/claynosaurz/status/1234567890123456789?ref_src=twsrc%5Etfw">
                  January 1, 2024
                </a>
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://twitter.com/claynosaurz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 hover:scale-105 group"
            >
              <span>Follow on X</span>
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>

        <div className="relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-3xl p-16 text-center shadow-xl border border-white/80">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8FE1A2]/10 via-transparent to-slate-900/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-[#8FE1A2]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-3 h-3 bg-[#8FE1A2] rounded-full animate-pulse"></div>
              <span className="text-slate-800 font-semibold">Growing Every Day</span>
            </div>
            <h3 className="text-6xl md:text-7xl font-display font-bold text-slate-900 mb-4 leading-none">
              450K+ Followers
            </h3>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Join millions enjoying Pixar-quality content across all platforms
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </main>
  )
}
