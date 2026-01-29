import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../../utils/config';

const MetaData = ({ title, description, keywords }) => {
    const location = useLocation();
    const currentUrl = `${SITE_URL}${location.pathname}`;

    return (
        <Helmet>
            {/* Standard Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph Tags (Facebook/LinkedIn) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default MetaData;