import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Pranesh Portfolio - AIML Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Pranesh Portfolio - AIML Student" />
            <meta name="description"
                content="Pranesh's (pranesh-2005) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Pranesh (pranesh-2005)" />
            <meta name="keywords"
                content="pranesh-2005, pranesh-2005's portfolio, pranesh-2005 linux, ubuntu portfolio, pranesh portfolio, pranesh aiml, pranesh, pranesh ubuntu, pranesh ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/my.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Pranesh Portfolio - AIML Student" />
            <meta itemProp="description"
                content="Pranesh's (pranesh-2005) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/my.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Pranesh Portfolio - AIML Student" />
            <meta name="twitter:description"
                content="Pranesh's (pranesh-2005) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="pranesh-2005" />
            <meta name="twitter:creator" content="pranesh-2005" />
            <meta name="twitter:image:src" content="images/logos/my.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Pranesh Portfolio - AIML Student" />
            <meta name="og:description"
                content="Pranesh's (pranesh-2005) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/my.png" />
            <meta name="og:url" content="http://praneshubuntuport.vercel.app/" />
            <meta name="og:site_name" content="Pranesh Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/my.svg" />
            <link rel="apple-touch-icon" href="images/logos/my.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
