import axios from 'axios'
import Layout from '../../components/Layout';
import ReadOnlyEditor from '../../components/ReadOnlyEditor';

export default function SingleBlog({ blog }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';
    const ogImage = {}

    const date = new Date(blog.datum) 


    return (
        <Layout title={blog.seo_titel} description={blog.seo_beschreibung} ogImage={ogImage} isThemeLight={false}>

            <section className="csse1-section-150-gray">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='vv-title-hello'>{blog.titel}</h2>
                            <p className='vv-text-hello'>{date.toLocaleDateString('de')}</p>
                            <ReadOnlyEditor content={blog.text} />
                        </div>

                        <div className='col-md-6 first-xs last-md'>
                            <img className='css3-img' src={`${IMAGE_URL}${blog.bild.url}`} />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`

            .vv-title-hello {
                text-align: left;
            }
                
            `}</style>


        </Layout>
    )
}

export async function getStaticPaths() {
    const API_URL = process.env.API_URL;

    const { data } = await axios.get(`${API_URL}/blogs`)

    const paths = data.map((blog, idx) => ({
        params: { id: blog.id.toString() }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {

    const API_URL = process.env.API_URL;
    const { data } = await axios.get(`${API_URL}/blogs/${params.id}`)

    return { props: { blog: data }, unstable_revalidate: 10 }
}