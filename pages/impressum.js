import Layout from '../components/Layout'
import Head from 'next/head'

export default function Impressum() {

    const ogImage = {}

    return (
        <Layout title={"Impressum"} description={"Impressum"} ogImage={ogImage} isThemeLight={true}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="googlebot" content="noindex, nofollow" />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8">
                        <h1 id="title">Impressum</h1>
                        <h2 id="subtitle">Verantwortlich für den Inhalt</h2>

                        <ul>
                            <li>Vita Verde AG</li>
                            <li>Neumatt 12</li>
                            <li>4242 Laufen</li>
                            <li>061 763 09 60</li>
                            <li>info@vitaverde.ch</li>
                        </ul>
                        <h2 id="subtitle">Konzept, Design und Programmierung CMS</h2>
                        <ul>
                            <li>Simplweb KLG</li>
                            <li><a href="https://www.simplweb.ch">www.simplweb.ch</a></li>
                        </ul>
                        <h2 id="subtitle">Fotos</h2>
                        <ul>
                            <li>Vita Verde AG</li>
                        </ul>
                        <h2 id="subtitle">Haftungsausschluss</h2>
                        <p>Alle auf dieser Website veröffentlichten Informationen wurden sorgfältig auf ihre Richtigkeit geprüft. Fehler können jedoch trotz aller Sorgfalt nicht gänzlich ausgeschlossen werden. Eine Haftung für auf dieser Website veröffentlichte Inhalte kann nicht übernommen werden. Wir schliessen uneingeschränkt jede Haftung für Verluste bzw. Schäden irgendwelcher Art aus, sei es für direkte, indirekte oder Folgeschäden, die sich aus der Benützung der bzw. des Zugriffs auf unsere Website ergeben sollten. Gleiches gilt für Inhalte bzw. Websites Dritter, zu denen durch Verlinkung lediglich eine Verknüpfung hergestellt wird. Vita Verde AG macht sich den jeweiligen Inhalt nicht zu Eigen.</p>
                        <h2 id="subtitle">Copyright</h2>
                        <p>Alle Inhalte wie Konzepte, Texte, Gestaltungselemente, Grafiken, Pläne, Modelle und Bilder sind urheberrechtlich geschützt und geistiges Eigentum von Vita Verde AG und/oder den jeweiligen Autoren, Fotografen oder sonstigen Inhabern der jeweiligen Rechte. Jede Verwendung und Verwertung ausserhalb der durch das Urheberrecht festgelegten Grenzen ohne Zustimmung von Vita Verde AG ist unzulässig.</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #title {
                    font-size: 30px;
                    font-family: 'Montserrat Bold', sans-serif;
                    color: black;
                    margin-top: 110px;
                    margin-bottom: 20px;
                }
                #subtitle {
                    font-size: 20px;
                    font-family: 'Lato Bold', sans-serif;
                    color: #7A7A7A;
                    margin-top: 0;
                    margin-bottom: 20px;
                    line-height: 30px;
                }
                p {
                    font-size: 14px;
                    font-family: 'Lato Regular', sans-serif;
                    color: #7A7A7A;
                    margin-top: 0;
                    margin-bottom: 50px;
                    line-height: 25px;
                }
                ul {
                    padding: 0;
                    margin-bottom: 20px;
                }
                ul li {
                    font-size: 14px;
                    font-family: 'Lato Regular', sans-serif;
                    color: #7A7A7A;
                    margin-top: 0;
                    margin-bottom: 5px;
                    list-style: none;
                }

                li a {
                    text-decoration: none;
                    color: #7A7A7A;
                }
            

                  @media only screen and (min-width: 768px) {
                    #title {
                        margin-top: 182px;
                        margin-bottom: 16px;
                    }
                    #subtitle {
                        font-size: 18px;
                    }
                    p {
                        font-size: 15px;
                        font-family: 'Lato Regular', sans-serif;
                        color: #7A7A7A;
                        margin-top: 0;
                        margin-bottom: 50px;
                        line-height: 25px;
                    }
                    ul {
                        margin-bottom: 50px;
                    }
                    ul li {
                        font-size: 15px;
                        line-height: 25px;
                    }
                  }

                  @media only screen and (min-width: 1280px) {
                    #title {
                        margin-top: 242px;
                        margin-bottom: 21px;
                        font-size: 50px;
                    }
                    #subtitle {
                        font-size: 25px;
                        line-height: 35px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 30px;
                    }
                    ul li {
                        font-size: 16px;
                        line-height: 30px;
                    }
                  }

                  @media only screen and (min-width: 1920px) {
                    #title {
                        margin-top: 238px;
                        margin-bottom: 119px;
                        font-size: 80px;
                    }
                    #subtitle {
                        margin-bottom: 40px;
                        font-size: 30px;
                        line-height: 40px;
                    }
                    p {
                        font-size: 18px;
                        margin-bottom: 60px;
                        line-height: 35px;
                    }
                    ul {
                        margin-bottom: 60px;
                    }
                    ul li {
                        font-size: 18px;
                        line-height: 35px;
                    }

                  }



            `}</style>



        </Layout>
    )
}
