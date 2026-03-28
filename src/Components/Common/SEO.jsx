import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Mehdi Hasan Tailor',
  description = 'Bespoke tailoring excellence since generations. Crafting premium sherwanis, kurtas, and Indo-western attire in Aligarh.',
  keywords = 'bespoke tailoring, sherwani, kurta, Indo-western, Aligarh tailor, wedding attire, custom suits',
  ogImage = '/Home/hero.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
}) => {
  const siteUrl = 'https://mehdihasan.com'; // Update with your actual domain
  const fullUrl = canonicalUrl || window.location.href;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Mehdi Hasan Tailor" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Mehdi Hasan Tailor" />
    </Helmet>
  );
};

export default SEO;
