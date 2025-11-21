"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const team = [
    {
      name: "Nicholas Cabana",
      role: "Co-founder, CCO",
      image: "/images/nicholas-cabana-dp.png",
      bio: "Ex-Sony Pictures & Animal Logic. Led animation on major Hollywood productions including Spider-Man: Into the Spider-Verse.",
      credentials: "15+ years in animation",
    },
    {
      name: "Dan Cabral",
      role: "Co-founder",
      image: "/images/dan-cabral-dp.png",
      bio: "Ex-Framestore. Veteran animator with decades of experience in feature films and cutting-edge visual effects.",
      credentials: "20+ years in VFX",
    },
    {
      name: "Andrew Pelekis",
      role: "CEO",
      image: "/images/andrew-pelekis-dp.png",
      bio: "Financial expert, CFA Charterholder. Bringing business strategy and financial expertise to creative vision.",
      credentials: "CFA Charterholder",
    },
    {
      name: "Sasha Papich",
      role: "COO",
      image: "/images/sasha-papich-dp.png",
      bio: "Operations expert driving efficiency and scaling the team. Ensuring smooth execution across all departments.",
      credentials: "Operations Leadership",
    },
  ]

  const brandLogos = [
    {
      name: "Marvel Studios",
      image: "/images/marvel-studios-dp.avif",
    },
    {
      name: "Disney",
      image: "/images/disney-dp.avif",
    },
    {
      name: "Warner Bros",
      image: "/images/warner-bros-dp.avif",
    },
    {
      name: "Universal",
      image: "/images/universal-dp.avif",
    },
    {
      name: "Netflix",
      image: "/images/netflix-dp.avif",
    },
    {
      name: "HBO",
      image: "/images/hbo-dp.avif",
    },
    {
      name: "Framestore Pictures",
      image: "/images/framestore-pictures-dp.avif",
    },
    {
      name: "Ubisoft",
      image: "/images/ubisoft-dp.avif",
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f0f3d6" }}>
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
            The Team
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#8FE1A2] to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Hollywood veterans bringing animation excellence to Web3
          </p>
        </div>

        <div className="mb-24 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">
            Trusted by Industry Leaders
          </h2>
          <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl py-12 shadow-lg border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f3d6] via-transparent to-[#f0f3d6] pointer-events-none z-10"></div>
            <div className="flex gap-16 animate-marquee">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
                >
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8FE1A2]/80 to-[#FFD93D]/80 backdrop-blur-sm rounded-3xl p-10 mb-24 shadow-lg border border-white/50 animate-slide-up">
          <p className="text-3xl md:text-4xl font-bold text-white text-center leading-relaxed">
            From Disney, Dreamworks, Marvel, Warner Bros & Sony to Claynosaurz
          </p>
        </div>

        <h2
          className="text-5xl font-display font-bold text-slate-900 mb-16 text-center animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          Leadership
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-[#8FE1A2]/50 hover:-translate-y-3 group animate-slide-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="inline-block bg-[#8FE1A2]/20 px-4 py-1.5 rounded-full mb-3">
                <p className="text-sm font-semibold text-slate-700">{member.credentials}</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{member.name}</h3>
              <p className="text-[#8FE1A2] font-semibold mb-4 text-lg">{member.role}</p>
              <p className="text-slate-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg mb-16 border border-white/50 animate-slide-up"
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Our Growing Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-[#8FE1A2]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl font-bold text-[#8FE1A2] mb-3">12</div>
              <div className="text-2xl font-semibold text-slate-800 mb-3">Core Artists</div>
              <p className="text-slate-600 text-lg">Full-time team members dedicated to Claynosaurz</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-[#FFD93D]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl font-bold text-[#FFD93D] mb-3">25+</div>
              <div className="text-2xl font-semibold text-slate-800 mb-3">Freelancers</div>
              <p className="text-slate-600 text-lg">Global network of specialized talent</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg mb-16 border border-white/50 animate-slide-up"
          style={{ animationDelay: "700ms" }}
        >
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">Project Credits</h2>
          <p className="text-xl text-slate-600 mb-10 text-center font-light">Our team has collectively worked on:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Avatar",
              "Avengers",
              "Game of Thrones",
              "Jurassic World",
              "Spider-Man",
              "The Lion King",
              "Frozen",
              "Toy Story",
            ].map((project) => (
              <div
                key={project}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center font-semibold text-slate-800 shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 hover:border-[#8FE1A2]/50 hover:scale-105 hover:-translate-y-1"
              >
                {project}
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-3xl p-16 text-center shadow-xl border border-white/80 animate-slide-up"
          style={{ animationDelay: "800ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8FE1A2]/10 via-transparent to-slate-900/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-[#8FE1A2]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-3 h-3 bg-[#8FE1A2] rounded-full animate-pulse"></div>
              <span className="text-slate-800 font-semibold">Scaling Fast</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-4 leading-none">
              From 2 founders to 30+ creative professionals
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Building the future of entertainment, one frame at a time
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
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  )
}
