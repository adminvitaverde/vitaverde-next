import Layout from '../../components/Layout'
import Link from 'next/link';
import axios from 'axios'
import CallToAction from '../../components/CallToAction';

export default function Dienstleistungen({ angebote }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';
    const ogImage = {}
    return (
        <Layout title="Vita Verde AG | Angebot" description="20 Jahre VITA VERDE! Am 1. März 1997 sind wir mit Vita Verde erfolgreich gestartet. Herzlich willkommen bei Vita Verde AG." ogImage={ogImage} isThemeLight={false}>
            <section>
                <div className="csl2-intro service">
                    <div className="csl2-inner">
                        <div className="csl2-content">
                            <h1>Unser <span className="vv-title">AngebotTEST</span></h1>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .csl2 {
                    height: 100vh;
                }
                .csl2-intro {
                    height: 100%;
                    width: 100%;
                    margin: auto;
                    background: url(/img/bg-garten-ueberuns-laufen.jpg) no-repeat 50% 50% fixed;
                    display: table;
                    top: 0;
                    background-size: cover;
                    height: 100vh;
                }
                .csl2-intro .csl2-inner {
                    display: table-cell;
                    vertical-align: middle;
                    width: 100%;
                    max-width: none;
                    background-color: rgba(0, 81, 67, 0.7);
                }
                .csl2-content {
                    max-width: 100%;
                    margin: 0 auto;
                    text-align: center;
                }
                .csl2-content h1 {
                    font-family: 'Montserrat', sans-serif;
                    color: #f9f3f4;
                    font-size: 30px;
                    margin-bottom: 20px;
                    font-weight: 100;
                }
                
                .vv-title {
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: 35px;
                    letter-spacing: 1.5px;
                }
                
                @media screen and (max-width: 768px) {
                    .csl2-intro {
                        height: 100%;
                        width: 100%;
                        margin: auto;
                        background: url(/img/bg-garten-ueberuns-laufen.jpg) no-repeat 50% 50%
                            scroll;
                        display: table;
                        top: 0;
                        background-size: cover;
                        height: 100vh;
                    }
                }

                @media screen and (min-width: 768px) {
                    .csl2-content h1 {
                        font-size: 50px;
                    }
                    .vv-title {
                        font-size: 60px;
                    }
                }

                @media screen and (min-width: 1280px) {
                    .csl2-content h1 {
                        font-size: 54px;
                    }
                    .vv-title {
                        font-size: 64px;
                    }
                }

            `}</style>

            {/*MOBILE*/}
            <section className="csse1-section-150 only-mobile">
                <div className="container">
                    {angebote.map(angebot => {                        
                        return (
                            <div className="row whitespace-bottom-60" key={angebot.id}>
                                <div className="col-xs-12 col-md-6 subcontainer-service">
                                    <h1 className="number">0{angebot.nummer}</h1>
                                    <h2 className="service-title">{angebot.angebot}</h2>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <img src={`${IMAGE_URL}${angebot.thumbnail.url}`} className="service-image" />
                                    <p>{angebot.untertitel}</p>
                                    <p>{angebot.text}</p>
                                    <Link href='/dienstleistungen/[slug]' as={`/dienstleistungen/${angebot.slug}`}>
                                        <a className="bilder">Bilder</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>

            {/*DESKTOP*/}
            <section className="csse1-section-150 only-tablet">
                <div className="container">
                    {angebote.map(angebot => {
                        if (angebot.nummer % 2 == 0) {
                            return (
                                <div className="row whitespace-bottom-60" key={angebot.id}>
                                    <div className="col-xs-12 col-md-6">
                                        <img src={`${IMAGE_URL}${angebot.thumbnail.url}`} className="service-image" />
                                        <p>{angebot.untertitel}</p>
                                        <p>{angebot.text}</p>
                                        <Link href='/dienstleistungen/[slug]' as={`/dienstleistungen/${angebot.slug}`}>
                                            <a className="bilder">Bilder</a>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-md-6 subcontainer-service">
                                        <h1 className="number right">0{angebot.nummer}</h1>
                                        <h2 className="service-title right lineright">{angebot.angebot}</h2>
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="row whitespace-bottom-60" key={angebot.id}>
                                <div className="col-xs-12 col-md-6 subcontainer-service">
                                    <h1 className="number">0{angebot.nummer}</h1>
                                    <h2 className="service-title lineleft">{angebot.angebot}</h2>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <img src={`${IMAGE_URL}${angebot.thumbnail.url}`} className="service-image" />
                                    <p>{angebot.untertitel}</p>
                                    <p>{angebot.text}</p>
                                    <Link href='/dienstleistungen/[slug]' as={`/dienstleistungen/${angebot.slug}`}>
                                        <a className="bilder">Bilder</a>
                                    </Link>
                                </div>
                            </div>
                            )
                        }
                    })}

                </div>
            </section>

            <CallToAction textUp="" word="GARTEN" link="/kontakt" linkText="TRAUMGARTEN PLANEN" />



        </Layout>
    )
}

export async function getStaticProps() {

    const API_URL = process.env.API_URL;

    const resAngebot = await axios.get(`${API_URL}/angebots`)

    return { props: { angebote: resAngebot.data }, unstable_revalidate: 10 }
} 
