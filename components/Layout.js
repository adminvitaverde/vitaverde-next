import Head from 'next/head';
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'


function Layout({ title, description, ogImage, isThemeLight, children }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://www.domain.ch${router.asPath}`} />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index,follow" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} />
                <meta property='og:description' content={description} />
                <meta property="og:image" content={ogImage.url} />
                <meta property="og:image:type" content={ogImage.mime} />
                <meta property="og:image:width" content={ogImage.width} />
                <meta property="og:image:height" content={ogImage.height} />
                <meta property="og:url" content={`https://www.domain.ch${router.asPath}`} />
            </Head>

            <Header isThemeLight={isThemeLight} />

            <main>
                {children}
            </main>
            
            <Footer />


        </>
    )
}

export default Layout