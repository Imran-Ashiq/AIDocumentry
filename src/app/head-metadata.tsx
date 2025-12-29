export default function HeadMetadata() {
  const baseUrl = 'https://ai-documentary-imran-8c699078b06e.herokuapp.com';
  const ogImage = `${baseUrl}/og-image.png`;
  
  return (
    <>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="The Rise of AI (Without Hype)" />
      <meta property="og:description" content="Understanding AI evolution without the hype. An interactive web documentary." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="The Rise of AI (Without Hype)" />
      <meta property="og:site_name" content="The Rise of AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Rise of AI (Without Hype)" />
      <meta name="twitter:description" content="Understanding AI evolution without the hype." />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="The Rise of AI (Without Hype)" />
    </>
  )
}
