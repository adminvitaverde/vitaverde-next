import Layout from '../components/Layout'
import axios from 'axios'
import CallToAction from '../components/CallToAction';

export default function Home({ data }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';
    const ogImage = {}
    return (
        <Layout title={data.seo_titel} description={data.beschreibung} ogImage={ogImage} isThemeLight={false}>
            <section>
                <div className="csl2-intro about">
                    <div className="csl2-inner">
                        <div className="csl2-content about-title">
                            <h1>Vita Verde</h1>
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
                .about-title {
                    max-width: 100%;
                    margin: 0 auto;
                    text-align: center;
                }
                .about-title h1 {
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
                    .about-title h1 {
                        font-size: 50px;
                    }
                    .vv-title {
                        font-size: 60px;
                    }
                }

                @media screen and (min-width: 1280px) {
                    .about-title h1 {
                        font-size: 54px;
                    }
                    .vv-title {
                        font-size: 64px;
                    }
                }

            `}</style>




            <section className="csse1-section-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className=" vv-title-hello">{data.titel}</h2>
                            <p className="vv-text-hello">{data.text}</p>
                        </div>

                        <div className="col-md-6">
                            <img className="css3-img" src={`${IMAGE_URL}${data.bild.url}`} />
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{` 
            .vv-title-hello {
                text-align: left;
            }

            `}</style>


            <CallToAction textUp={data.cta_oben} word={data.cta_unten} link={`/${data.cta_link}`} linkText={data.cta_button} />



        </Layout>
    )
}

export async function getStaticProps() {

    const API_URL = process.env.API_URL;

    const resData = await axios.get(`${API_URL}/about`)

    return { props: { data: resData.data }, unstable_revalidate: 10 }
}
