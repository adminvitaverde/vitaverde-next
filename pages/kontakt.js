import { useState } from 'react';
import Layout from '../components/Layout'
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default function Home({ data, lieferanten }) {
    const [email, setEmail] = useState('');
    const [vorname, setVorname] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState();
    const [loading, setLoading] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await axios.post(`/api/send-mail`, { email, vorname, name, telephone, message });
        setLoading(false);
        setFeedback(res.data)
        console.log(res.data.error);

    }

    const mailTo = `mailto:${data.email}`
    const tel = `tel:${data.telefon}`
    const ogImage = {}
    return (
        <Layout title={data.seo_titel} description={data.beschreibung} ogImage={ogImage} isThemeLight={false}>
            <section>
                <div className="csl2-intro contact">
                    <div className="csl2-inner">
                        <div className="csl2-content">
                            <h1 id="traumgarten"><span className="vv-title">Traumgarten</span> planen</h1>
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




            <section className="csse1-section-150">
                <div className="container whitespace-bottom-100">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2 className="vv-title-hello vv-title-address">{data.firma}</h2>
                            <p className="vv-text-hello ">
                                {data.strasse}
                                <br />
                                {data.ort}
                                <br />
                                <a className="vv-link-clean-single" href={tel}>{data.telefon}</a>
                                <br />
                                <a className="vv-link-clean-single" href={mailTo}>{data.mail}</a>
                                <br />
                                {data.slogan}
                            </p>
                            <a href="https://www.facebook.com/Vita-Verde-AG-169075523200553/" target="_blank" style={{ cursor: "pointer" }}><img src="img/facebook.svg" className="sm-icon" /></a>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            {feedback ?
                                <div className={feedback.success ? "feedback" : "feedback error"}>{feedback.message}</div>
                                :
                                loading ? <div id="wrap-loader"><Loader
                                    type="TailSpin"
                                    color="#005143"
                                    height={100}
                                    width={100}
                                    timeout={3000} //3 secs
                                /></div> : <form onSubmit={submitForm}>
                                        <h4 className="vv-title-hello vv-title-address kontakt-title">Kontaktformular</h4>
                                        <input type="text" name="vorname" placeholder="Vorname*" required onChange={(e) => setVorname(e.target.value)} />
                                        <input type="text" name="name" placeholder="Name*" required onChange={(e) => setName(e.target.value)} />
                                        <input type="tel" name="telephone" placeholder="Telefon*" required onChange={(e) => setTelephone(e.target.value)} />
                                        <input type="email" name="email" placeholder="Email*" required onChange={(e) => setEmail(e.target.value)} />
                                        <textarea type="text" name="message" placeholder="Nachricht*" required onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <button type="submit">Senden</button>
                                    </form>
                            }
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xs-12 whitespace-bottom-30">
                            <h2 className="vv-title-hello lieferant-title">Unsere Lieferanten</h2>
                        </div>
                    </div>
                    <div className="row whitespace-bottom-30-contact">
                        <div className="col-xs-12 lief-wrap">
                            {lieferanten.map((lieferant, idx) => {
                                return <a className="vv-link-clean" href={lieferant.link} target="_blank" key={idx}>{lieferant.firma}</a>
                            })}

                        </div>
                    </div>
                </div>
            </section>


            <style jsx>{`

                .vv-title-address {
                    text-align: left;
                }

                

                .sm-icon {
                    width: 30px;
                }

                input, textarea {
                    border: none;
                    border-bottom: 1px solid #E1E1E1;
                    font-family: "Montserrat Regular";
                    font-weight: 400;
                    font-size: 16px;
                    padding-bottom: 5px;
                    color: #7A7A7A;
                    margin-top: 30px;
                    width: 100%;
                }

                input:focus, textarea:focus {
                    outline: none;
                    border-bottom: 1px solid rgb(0, 81, 67);
                }

                button {
                    border: none;
                    border-radius: 5px;
                    background-color: rgb(0, 81, 67);
                    width: 163px;
                    height: 47px;
                    font-family: "Montserrat Regular";
                    font-weight: 400;
                    font-size: 16px;
                    color: #ffffff;
                    letter-spacing: 4px;
                    margin-top: 50px;
                    cursor: pointer;
                    -webkit-transition: all 0.4s ease-out;
                    transition: all 0.4s ease-out;
                }

                .pos {
                    position: relative;
                }

                .feedback {
                    font-size: 20px;
                    line-height: 30px;
                    color: green;
                    font-family: "Montserrat Bold";
                }

                .feedback.error {
                    color: red;
                    font-family: "Montserrat Bold";
                }

                #wrap-loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media only screen and (min-width: 768px) {
                    form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .lieferant-title {
                        text-align: center !important;
                    }

                    .kontakt-title {
                        align-self: flex-start;
                    }

                }

                @media only screen and (min-width: 1280px) {
                    form {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .lief-wrap {
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
            }

            `}</style>



        </Layout >
    )
}

export async function getStaticProps() {

    const API_URL = process.env.API_URL;

    const resData = await axios.get(`${API_URL}/kontakt`)
    const resLieferanten = await axios.get(`${API_URL}/lieferantens`)

    return { props: { data: resData.data, lieferanten: resLieferanten.data }, unstable_revalidate: 10 }
} 
