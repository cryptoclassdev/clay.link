import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function TeamPage() {
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
          The Team
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Hollywood veterans bringing animation excellence to Web3
        </p>

        <div className="bg-gradient-to-r from-[#8FE1A2] to-[#FFD93D] rounded-2xl p-8 mb-12">
          <p className="text-2xl font-bold text-white text-center">
            From Disney, Dreamworks, Marvel, Warner Bros & Sony to Claynosaurz
          </p>
        </div>

        {/* Leadership Team */}
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Leadership</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-[#8FE1A2] to-[#FFD93D] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">NC</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Nicholas Cabana</h3>
            <p className="text-[#8FE1A2] font-semibold mb-3">Co-founder, CCO</p>
            <p className="text-gray-600">
              Ex-Sony Pictures & Animal Logic. Led animation on major Hollywood productions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-[#FF6B9D] to-[#FFD93D] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DC</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Dan Cabral</h3>
            <p className="text-[#8FE1A2] font-semibold mb-3">Co-founder</p>
            <p className="text-gray-600">
              Ex-Framestore. Veteran animator with decades of experience in feature films.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-[#8FE1A2] to-[#FF6B9D] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AP</span>
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Andrew Pelekis</h3>
            <p className="text-[#8FE1A2] font-semibold mb-3">CEO</p>
            <p className="text-gray-600">
              Financial expert, CFA Charterholder. Bringing business strategy to creative vision.
            </p>
          </div>
        </div>

        {/* Team Size */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Our Growing Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-5xl font-bold text-[#8FE1A2] mb-2">12</div>
              <div className="text-xl font-semibold text-gray-700 mb-2">Core Artists</div>
              <p className="text-gray-600">Full-time team members dedicated to Claynosaurz</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FFD93D] mb-2">25+</div>
              <div className="text-xl font-semibold text-gray-700 mb-2">Freelancers</div>
              <p className="text-gray-600">Global network of specialized talent</p>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Project Credits</h2>
          <p className="text-gray-700 mb-6">
            Our team has collectively worked on:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Avatar', 'Avengers', 'Game of Thrones', 'Jurassic World', 'Spider-Man', 'The Lion King', 'Frozen', 'Toy Story'].map((project) => (
              <div key={project} className="bg-[#FAFAFA] rounded-lg p-4 text-center font-semibold text-gray-700">
                {project}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-[#2C3E50]">
            From 2 founders to 30+ creative professionals
          </p>
        </div>
      </div>
    </main>
  )
}
