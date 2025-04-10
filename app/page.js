import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog2 from "@/components/sections/Blog2"
import CaseStudy2 from "@/components/sections/CaseStudy2"
import Hero2 from "@/components/sections/Hero2"
import Offer1 from "@/components/sections/Offer1"
import SoftwareWatch1 from "@/components/sections/SoftwareWatch1"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
import TextSLider4 from "@/components/sections/TextSLider4"
import TextSLider5 from "@/components/sections/TextSLider5"
export default function Home() {

    return (
        <>
            <Head>
                <title>Top Website & Mobile App Development Company in Calicut, Kerala</title>
                <meta
                    name="description"
                    content="We are a leading software development company in Calicut, Kerala offering website development, mobile app development, UI/UX design and digital solutions with creative and modern technologies."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Best Website Designing Company in Calicut, Kerala" />
                <meta
                    property="og:description"
                    content="We build high-quality websites, mobile apps, and digital products. Based in Calicut, serving clients across Kerala and beyond."
                />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:url" content="https://www.yourcompanydomain.com" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Local SEO keywords */}
                <meta name="keywords" content="Website development in Calicut, Mobile app development Calicut, UI UX design Kerala, Web design Kerala, Software company in Calicut" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Layout headerStyle={2} footerStyle={2}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero2 />
                    <TextSLider4 />
                    <About1 />
                    <TextSLider5 />
                    <Offer1 />
                    <SoftwareWatch1 />
                    <CaseStudy2 />
                    <Team2 />
                    <Testimonial2 />
                    <Blog2 />
                </div>
            </Layout>
        </>
    )
}