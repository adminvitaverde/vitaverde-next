import Router from 'next/router'
import { CSSTransition } from 'react-transition-group';

function Article({ bild, titel, datum, id }) {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || '';

    const date = new Date(datum) 

    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <div className="col-xs-12 col-sm-6" onClick={() => Router.push('/blog/[id]', `/blog/${id}`).then(() => window.scrollTo(0, 0))}>
                <div className="article-wrap">
                    <div className="img-wrap"></div>
                    <div>
                        <div className='date-wrap'>
                            <p className='nu'>{date.getDate()}<span className='mo'>{date.toLocaleString('de', { month: 'short' })}</span></p>
                        </div>
                        <div className='title-wrap'>
                            <h3 className='title'>{titel}</h3>
                        </div>
                    </div>
                </div>


                <style jsx>{`
                .article-wrap {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                    cursor: pointer;
                }

                .img-wrap {
                    width: 100%;
                    height: 185px;
                    background: url('${IMAGE_URL}${bild}') no-repeat;
                    background-size: cover;
                    margin-bottom: 10px;
                }

                .article-wrap > div:last-child {
                    display: flex;
                }

                .date-wrap {
                    position: relative;
                }

                .nu {
                    font-size: 40px;
                    text-align: center;
                    color: lightgray;
                    font-family: 'Montserrat SemiBold';
                    margin: 0;
                    position: relative;
                }

                .mo {
                    position: absolute;
                    font-size: 16px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    margin: auto;
                    text-align: center;
                    color: #005143;
                }

                .title-wrap {
                    display: flex;
                    align-items: center;
                }

                .title {
                    font-size: 17px;
                    font-family: 'Montserrat SemiBold';
                    margin: 0;
                    margin-left: 10px;
                }

                .title:after {
                    content: '';
                    margin-left: 5px;
                    display: inline-block;
                    background-image: url(/img/icons/arrowrightvitaverde.svg);
                    width: 12px;
                    height: 11px;
                    background-repeat: no-repeat;
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
                    .img-wrap {
                        height: 300px;
                    }
                    .nu {
                        font-size: 60px;
                    }
    
                    .mo {
                        font-size: 22px;
                    }

                    .title {
                        font-size: 20px;
                        margin-left: 15px;
                    }
                }

                @media screen and (min-width: 1920px) {
                    .img-wrap {
                        height: 450px;
                    }

                    .title {
                        font-size: 24px;
                        margin-left: 20px;
                    }
                }
            `}</style>
            </div>
        </CSSTransition>
    )
}

export default Article