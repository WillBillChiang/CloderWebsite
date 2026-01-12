import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Cloder - Make New Friends & Connect in Real Life",
  description = "Make new friends who share your interests and are available when you are. Cloder connects you with real people for authentic, in-person friendships. No endless texting—just meaningful connections.",
  keywords = "make new friends, find friends nearby, meet new people, connect in real life, real life connections, find local friends, friendship app, meet people near me",
  canonical = "https://cloderconnect.com",
  ogType = "website",
  ogImage = "https://cloderconnect.com/CloderIcon.png",
  twitterCard = "summary_large_image"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Cloder" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Cloder" />
    </Helmet>
  );
};

export default SEO;
