import axios from 'axios'
import { useState } from 'react'
import Layout from '../../components/Layout';
import Lightbox from 'react-image-lightbox';

export default function SingleDienstleistung({ angebot }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';
    const ogImage = {}

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)


    const images = []
    const captions = []

    for (var i = 0; i < angebot[0].bilder.length; i++) {
        images.push(`${IMAGE_URL}${angebot[0].bilder[i].url}`);
        captions.push(angebot[0].bilder[i].alternativeText);
    }

    console.log(images, captions, angebot[0]);
    


    return (
        <Layout title={angebot[0].seo_titel} description={angebot[0].seo_beschreibung} ogImage={ogImage} isThemeLight={false}>

            <section className="csse1-section-150-gray">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 subcontainer-service subcontainer-service-single">
                            <h1 className="number number-white">0{angebot[0].nummer}</h1>
                            <h2 className="service-title">{angebot[0].angebot}</h2>
                        </div>
                    </div>

                    <div className="row">
                        {angebot[0].bilder.map((img, idx) => {
                            return (
                                <div className='col-xs-12 col-sm-6 col-md-4' onClick={() => setIsOpen(true)} key={idx}>
                                    <img className='img-service resize' src={`${IMAGE_URL}${img.url}`} alt={img.alternativeText} />
                                </div>
                            )
                        })}

                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                            imageCaption={captions[photoIndex]}
                        />
                    )} 



                </div>
            </section>

        </Layout>
    )
}

export async function getStaticPaths() {
    const API_URL = process.env.API_URL;

    const { data } = await axios.get(`${API_URL}/angebots`)

    const paths = data.map((angebot) => ({
        params: { slug: angebot.slug }
    }));   

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {

    const API_URL = process.env.API_URL;
    const { data } = await axios.get(`${API_URL}/angebots?slug=${params.slug}`)
    
    return { props: { angebot: data }, unstable_revalidate: 10 }
}
