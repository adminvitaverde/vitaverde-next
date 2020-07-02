import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="container">
            <img src="/img/logo.svg" alt="Logo Vitaverde" className="logo" />
            <h1>404 - Diese Seite wurde nicht gefunden. Hier gehts zurück.</h1>
            <div className="row">
                <div className="col-xs-12">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dienstleistungen">
                                <a>Dienstleistungen</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ueber-uns">
                                <a>Über uns</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt">
                                <a>Kontakt</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .container {
                    height: 100vh;
                    width: 100%;
                    background-color: lightgray;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .logo {
                    width: 100px;
                    margin-bottom: 20px;
                } 

                h1 {
                    margin: 0;
                }

                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    padding-top: 50px;
                    display: flex;
                    flex-direction: column;
                }

                li {
                    margin-bottom: 29px;
                }


                li > a {
                    font-family: 'Montserrat Medium';
                    text-decoration: none;
                    color: black;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 25px;
                    display: flex;
                    align-items: center;
                    padding-right: 30px;
                    white-space: nowrap;
                }

                li > a.active {
                    color: rgb(0, 81, 67);
                }

                @media only screen and (min-width: 1280px) { 
                    li > a {
                        font-size: 35px;
                    }

                    ul {
                        flex-direction: row;
                    }
                }
            `}</style>
        </div>

    )
}