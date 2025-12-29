import { ImageResponse } from 'next/og'
 
// Use default runtime (Node.js) for better compatibility on Heroku
// export const runtime = 'edge'
 
export const alt = 'The Rise of AI (Without Hype)'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid white',
            padding: '40px 80px',
            backgroundColor: 'black',
          }}
        >
          <h1
            style={{
              fontSize: 160,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            AI
          </h1>
          <div
            style={{
              width: 100,
              height: 4,
              backgroundColor: 'white',
              margin: '20px 0',
            }}
          />
          <div
            style={{
              fontSize: 40,
              color: '#a1a1aa',
              marginTop: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            The Rise
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#52525b',
              marginTop: 10,
            }}
          >
            Without Hype
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}