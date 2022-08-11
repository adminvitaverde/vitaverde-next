import Layout from '../components/Layout'
import Link from 'next/link';
import axios from 'axios'
import Article from '../components/Article';
import CallToAction from '../components/CallToAction';

export default function Home({ data, blogs }) {
  const ogImage = {} 
  
  return (
    <Layout title={data.seo_titel} description={data.beschreibung} ogImage={ogImage} isThemeLight={false}>
      <section id="csl2">
        <div className="csl2-intro">
          <div className="csl2-inner">
            <div className="csl2-content">
              <h1>Wir gestalten <span className="vv-title">Gärten</span> seit über 25 Jahren.</h1>
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
          font-size: 30px;
        }
        .vv-title {
          font-size: 35px;
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
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center vv-title-hello">{data.titel_angebot}</h2>
            </div>
          </div>

          <div className="row whitespace-top-30">
            <div className="col-sm-6">
              <Link href="/ueber-uns">
                <a className="vv-service-link">
                  <img className="css3-img" src="img/about.jpg" />
                  <h3 className="text-center css3-subtitle whitespace-top-30">{data.titel_ueber_uns}</h3>
                </a>
              </Link>

            </div>
            <div className="col-sm-6">
              <Link href="/kontakt">
                <a className="vv-service-link">
                  <img className="css3-img" src="img/bg-garten-kontakt-laufen.jpg" />
                  <h3 className="text-center css3-subtitle whitespace-top-30">{data.titel_kontakt}</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{` 
      .title-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .css3-subtitle {
        margin-top: 0px;
        margin-bottom: 0.5rem;
        font-family: 'Montserrat SemiBold';
      }
      .vv-service-link {
        text-decoration: none;
      }

      `}</style>

      <section className="csse1-section-grey">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center vv-title-hello">{data.titel_blog}</h2>
            </div>
          </div>

          <div className="row whitespace-top-30">
            {blogs.map((blog) => {
              return <Article id={blog.id} bild={blog.bild.url} titel={blog.titel} datum={blog.datum} key={blog.id} />
            })}
          </div>

        </div>
      </section>

      <CallToAction textUp={data.cta_oben} word={data.cta_unten} link={`/${data.cta_link}`} linkText={data.cta_button} />

    </Layout>
  )
}

export async function getStaticProps() {

  const API_URL = process.env.API_URL;
  const resData = await axios.get(`${API_URL}/home`)
  const resBlogs = await axios.get(`${API_URL}/blogs?_sort=datum:DESC&publizieren_eq=true&_limit=2`)  
  

  return { props: { data: resData.data, blogs: resBlogs.data }, unstable_revalidate: 10 }
} 
