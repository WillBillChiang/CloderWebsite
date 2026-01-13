import { Helmet } from 'react-helmet';

const StructuredData = ({ type = "website" }) => {
  const getSchemaData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cloder",
      "description": "Make new friends and connect in real life with Cloder",
      "url": "https://cloderconnect.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cloderconnect.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cloder",
      "url": "https://cloderconnect.com",
      "logo": "https://cloderconnect.com/CloderIcon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "cloderconnect@gmail.com",
        "contactType": "Customer Support"
      },
      "sameAs": []
    };

    const mobileAppSchema = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "Cloder",
      "operatingSystem": "iOS",
      "applicationCategory": "SocialNetworkingApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "100"
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cloderconnect.com"
      }]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How do I make new friends with Cloder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create your profile, share your interests, set your availability, and get matched with people who share your passions and are free at the same times. Then meet up in person to build real friendships."
        }
      }, {
        "@type": "Question",
        "name": "Is Cloder free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cloder is free to download and use on iOS devices."
        }
      }, {
        "@type": "Question",
        "name": "How does availability-based matching work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You input when you're free for meetups, and Cloder matches you with others who share your interests AND are available at the same times, making it easy to actually meet in person."
        }
      }]
    };

    return {
      website: [baseSchema, organizationSchema, mobileAppSchema],
      faq: [faqSchema, breadcrumbSchema]
    };
  };

  const schemas = getSchemaData();
  const currentSchemas = schemas[type] || schemas.website;

  return (
    <Helmet>
      {currentSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
