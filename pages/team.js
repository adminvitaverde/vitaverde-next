import Layout from '../components/Layout'
import axios from 'axios'
import CallToAction from '../components/CallToAction';
import Member from '../components/Member';

export default function Team({ data }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';
    const ogImage = {}
    return (
        <Layout title="Vita Verde AG | Team" description="20 Jahre VITA VERDE! Am 1. März 1997 sind wir mit Vita Verde erfolgreich gestartet. Herzlich willkommen bei Vita Verde AG." ogImage={ogImage} isThemeLight={false}>
            <section>
                <div className="csl2-intro about">
                    <div className="csl2-inner">
                        <div className="csl2-content about-title">
                            <h1>Vita Verde <span className="vv-title">Team</span></h1>
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
                    text-align: center !imporant;
                    
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
                    <div className="row whitespace-bottom-30">
                        <div className="col-xs-12">
                            <h2 className="text-center vv-title-hello">Menschen die hinter Vita Verde stehen</h2>
                        </div>
                    </div>

                    <div className="row text-center team whitespace-bottom-60">

                        {
                            data.map(member => {
                                return <Member key={member.id} bild={member.bild.url} name={member.name} titel={member.titel} beschreibung={member.beschreibung} telnummer={member.telnummer} email={member.email} />
                            })
                        }
                        
                    </div>
                </div>
            </section>

            <style jsx>{` 
            .vv-title-hello {
                text-align: left;
            }

            `}</style>


            <CallToAction textUp="" word="GARTEN" link="kontakt" linkText="TRAUMGARTEN PLANEN" />



        </Layout>
    )
}

export async function getStaticProps() {

    const API_URL = process.env.API_URL;

    const resData = await axios.get(`${API_URL}/teams?_sort=position:ASC`)

    return { props: { data: resData.data }, unstable_revalidate: 10 }
}
