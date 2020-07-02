import Link from 'next/link';

function CallToAction({ textUp, word, link, linkText }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';

    return (
        <section className="csse2-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <p className="vv-service-subtitle text-center">{textUp}</p>
                        <h1 className="text-center vv-service-title" id="garden-bigger">{word}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <Link href={`${link}`}>
                            <a>
                                <button className="btn-2" id="button-bigger">{linkText}</button>
                            </a>
                        </Link> 
                    </div>
                </div>
            </div>
        </section>



    )
}

export default CallToAction