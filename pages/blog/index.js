import Layout from '../../components/Layout'
import Article from '../../components/Article'
import axios from 'axios'
import CallToAction from '../../components/CallToAction';

export default function Blog({ blogs }) {
    const ogImage = {}

    return (
        <Layout title="SEO Titel" description="SEO Beschreibung" ogImage={ogImage} isThemeLight={false}>
            <section>
                <div className="csl2-intro">
                    <div className="csl2-inner">
                        <div className="csl2-content">
                            <h1>Bleiben Sie <span className="vv-title">Aktuell</span></h1>
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
        font-size: 25px;
        margin-bottom: 20px;
        font-weight: 100;
      }
      
      .vv-title {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 25px;
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

            <section className="csse1-section-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="text-center vv-title-hello">Lesen Sie mehr über unsere letzten Projekte</h2>
                        </div>
                    </div>

                    <div className="row whitespace-top-30">
                        {blogs.map((blog) => {
                            return <Article id={blog.id} bild={blog.bild.url} titel={blog.titel} datum={blog.datum} key={blog.id} />
                        })}
                    </div>
                </div>
            </section>

            <CallToAction textUp="" word="GARTEN" link="/kontakt" linkText="TRAUMGARTEN PLANEN" />
        </Layout>
    )
}

export async function getStaticProps() {
    const API_URL = process.env.API_URL;
    const resBlogs = await axios.get(`${API_URL}/blogs?_sort=datum:DESC&publizieren_eq=true`)
    return { props: { blogs: resBlogs.data }, unstable_revalidate: 10 }
}


