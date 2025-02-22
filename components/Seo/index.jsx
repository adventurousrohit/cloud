import React from "react";
import { Helmet } from "react-helmet";

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

        {/* Google Tag Manager Script */}
        <script type="text/javascript">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKQ9W7S');
          `}
        </script>
      </Helmet>

      {/* Google Tag Manager NoScript (Fallback) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MKQ9W7S"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </div>
  );
};

export default ReusableHostingPage;
