import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import { siteConfig } from "@/config/site";

const SEO = {
    title: "CRIS FIT LIFE | Rediseñando tu Nutrición con Ciencia y Empatía",
    description: siteConfig.description,
    canonical: siteConfig.url,
    image: siteConfig.ogImage,
    keywords: "nutricionista Caracas, Cristian Cardona, nutrición deportiva, Caracas FC, bajar de peso Caracas, asesoría nutricional online",
};

const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "description": SEO.description,
    "url": SEO.canonical,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caracas",
        "addressCountry": "VE"
    }
};

const Index = () => {
    return (
        <>
            <Helmet>
                <html lang="es" />
                <title>{SEO.title}</title>
                <meta name="description" content={SEO.description} />
                <meta name="keywords" content={SEO.keywords} />
                <link rel="canonical" href={SEO.canonical} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={SEO.title} />
                <meta property="og:description" content={SEO.description} />
                <meta property="og:image" content={SEO.image} />
                
                {/* Mobile & Performance */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#260000" />

                <script type="application/ld+json">
                    {JSON.stringify(SCHEMA)}
                </script>
            </Helmet>

            <div className="relative min-h-screen bg-black selection:bg-[#260000] selection:text-white">
                <Header />

                <main id="main-content">
                    <Hero />
                    <TrustBar />
                    <About />
                    <Method />
                    <Services />
                    <Testimonials />
                    <FAQ />
                </main>

                <Footer />
                <WhatsAppFloat />
            </div>
        </>
    );
};

export default Index;
