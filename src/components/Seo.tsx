import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any;
  title: string;
}
interface SeoQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      social: {
        twitter: string;
      };
    };
  };
}

const Seo: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const metaDescription: string = description || site.siteMetadata.description;
  const defaultTitle: string = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        defaultTitle
          ? defaultTitle === title
            ? `${defaultTitle}`
            : `%s | ${defaultTitle}`
          : undefined
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

export default Seo;
