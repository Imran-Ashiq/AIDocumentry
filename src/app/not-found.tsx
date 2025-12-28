import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-9xl font-bold tracking-tighter mb-4 opacity-20">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        It seems you've ventured into undefined territory. Even AI can't hallucinate this page into existence.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
      >
        Return to Reality
      </Link>
    </div>
  )
}