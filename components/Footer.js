import Link from 'next/link';

function Footer() {

    return (
        <footer className="container">

            <div className="row">
                <div className="col-xs-12 info-wrap first">
                    <span>© {new Date().getFullYear()} Alle Rechte vorbehalten.&nbsp;</span>
                    <Link href="/impressum">
                        <a>Impressum</a>
                    </Link>
                </div>
                <div className="col-xs-12 info-wrap">
                    <span>Design & Development with &#10084; by <a href="https://www.simplweb.ch">Simplweb</a></span>
                </div>
            </div>




            <style jsx>{`
                footer {
                    padding-top: 120px;
                }

                .info-wrap {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    color: #7A7A7A;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .info-wrap.first {
                    margin-bottom: 5px;
                }

                .info-wrap a {
                    color: #7A7A7A;
                    text-decoration: none;
                }

                @media only screen and (min-width: 768px) { 
                    footer {
                        padding-top: 100px;
                    }
                    hr {
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (min-width: 1280px) { 
                    footer {
                        padding-top: 150px;
                        padding-bottom: 20px;
                    }
                    hr {
                        margin-bottom: 70px;
                    }
                }

                @media only screen and (min-width: 1920px) { 
                    footer {
                        padding-bottom: 115px;
                    }
                    
                }

            `}</style>
        </footer>)
}

export default Footer