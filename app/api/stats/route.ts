import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api-mainnet.magiceden.dev/v2/collections/claynosaurz/stats', {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats')
    }
    
    const data = await response.json()
    
    return NextResponse.json({
      floorPrice: data.floorPrice ? `${(data.floorPrice / 1000000000).toFixed(2)} SOL` : '2.5 SOL',
      totalVolume: data.volumeAll ? `${Math.floor(data.volumeAll / 1000000000 / 1000)}K SOL` : '500K SOL',
      tiktokViews: '1B+'
    })
  } catch (error) {
    console.error('[v0] Error fetching Magic Eden stats:', error)
    // Return fallback values
    return NextResponse.json({
      floorPrice: '2.5 SOL',
      totalVolume: '500K SOL',
      tiktokViews: '1B+'
    })
  }
}
