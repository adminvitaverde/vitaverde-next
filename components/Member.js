import { CSSTransition } from 'react-transition-group';

function Member({ bild, name, titel, beschreibung, telnummer, email }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';

    const tel = `tel:${telnummer}`
    const mailTo = `mailto:${email}`

    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <div className="col-xs-12 col-md-4 ml-auto img-margin-bottom team-wrap">
                <img className="img-team" src={`${IMAGE_URL}${bild}`} />
                <p>{name}</p>
                <p className="img-team-bottom">{titel}</p>
                <p className="img-team-bottom">{beschreibung}</p>
                <a className="img-team-bottom" href={tel}>{telnummer}</a>
                <a className="img-team-bottom" href={mailTo}>{email}</a>
                <style jsx>{`

                .img-team {
                    width: 75%;
                    border-radius: 50%;
                    margin-bottom: 5px;
                    border: 5px solid lightgray;
                }

                a {
                    color: black;
                    display: block;
                    margin-bottom: 5px;
                }

                p {
                    margin-top: 0;
                    margin-bottom: 5px;
                }
                
                .team div a::hover {
                    text-decoration: none;
                }

                .team-wrap {
                    margin-bottom: 50px;
                }
                
                @media screen and (max-width: 768px) {
                    .img-margin-bottom {
                        margin-bottom: 60px;
                    }
                }
                                


                /* ANIMATION: appear - on page load & when element appears in dom */
                .fade-appear {
                    opacity: 0;
                    transform: translateY(20%);
                }
                .fade-appear-active {
                    opacity: 1;
                    transform: translateY(0%);
                    transition: opacity 1000ms, transform 1000ms;
                }

                
                @media screen and (min-width: 1280px) {
                   
                }

                @media screen and (min-width: 1920px) {
                   
                }
            `}</style>
            </div>
        </CSSTransition>
    )
}

export default Member