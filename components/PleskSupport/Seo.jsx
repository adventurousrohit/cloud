import React from 'react';
import { Helmet } from 'react-helmet';

const ReusableHostingPage = ({ title, metaTags = [], links = [] }) => {
  return (
    <div>
      <Helmet>
        {/* Dynamically render the title */}
        {title && <title>{title}</title>}

        {/* Dynamically render meta tags */}
        {metaTags?.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}

        {/* Dynamically render link tags */}
        {links?.map((link, index) => (
          <link key={index} {...link} />
        ))}
      </Helmet>
    </div>
  );
};

export default ReusableHostingPage;

