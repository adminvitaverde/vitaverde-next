import React, { useState } from 'react'
import Link from 'next/link';
import Router from 'next/router'
import { CSSTransition } from 'react-transition-group';
import IconHamburger from './IconHamburger';
import { useScrollPosition } from '../hooks/useScrollPosition.js'

function Header({ isThemeLight }) {

    const [navIsOpen, setNavIsOpen] = useState(false)

    const [headerStyle, setHeaderStyle] = useState({
        transition: 'all 200ms ease-in',
        colorIconHamburger: '#fff'
    })

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isVisible = currPos.y > prevPos.y || currPos.y >= 0    

            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                transform: isVisible ? 'none' : 'translate(0, -100%)',
                paddingTop: isVisible && currPos.y !== 0 ? '10px' : '',
                paddingBottom: isVisible && currPos.y !== 0 ? '10px' : '',
                backgroundColor: isVisible && currPos.y !== 0 ? '#ffffff' : 'transparent',
                colorIconHamburger: isVisible && currPos.y !== 0 ? '#000' : '#fff',
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
            setHeaderStyle(shouldBeStyle)
        },
        [headerStyle]
    )

    return (
        <header className="container" style={{ ...headerStyle }}>
            <div className="row">
                <div className="col-xs-2">
                    <img src="/img/logo.svg" alt="Logo Vitaverde" className="logo" onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))} />
                </div>
                <div className="col-xs-10" id="right-wrapper">
                    <button onClick={() => setNavIsOpen(!navIsOpen)}>
                        <IconHamburger fill={headerStyle.colorIconHamburger} />
                    </button>
                </div>
            </div>

            <CSSTransition in={navIsOpen} timeout={600} classNames="fade">
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-2 col-md-2">
                                <img src="/img/logo.svg" alt="Logo Vitaverde" className="logo" onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))} />
                            </div>
                            <div className="col-xs-10" id="right-wrapper">
                                <button onClick={() => setNavIsOpen(!navIsOpen)}>
                                    <IconHamburger fill='#000' navIsOpen={navIsOpen} />
                                </button>
                            </div>
                        </div>
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
                    </div>
                </nav>
            </CSSTransition>

            <style jsx>{`
                header {
                    position: fixed;
                    width: 100%;
                    background-color: transparent;
                    z-index: 1;
                }
                .container {
                    padding-top: 23px;
                }
                .logo {
                    width: 80px;
                    cursor: pointer;
                }
                #right-wrapper {
                    display: flex;
                    justify-content: flex-end;
                }
                #right-wrapper button {
                    background-color: transparent;
                    border: none;
                    padding: 0;
                    outline: none;
                }
                nav {
                    height: 100vh;
                    transform: translateY(-100%);
                    width: 100%;
                    background-color: red;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: white;
                }

                /* ANIMATION: appear - on page load */
                .fade-enter {
                    transform: translateY(-100%);
                }
                .fade-enter-active {
                    transform: translateY(0%);
                    transition: transform 600ms;
                }
                .fade-enter-done {
                    transform: translateY(0%);
                }
                .fade-exit {
                    transform: translateY(0%);
                }
                .fade-exit-active {
                    transform: translateY(-100%);
                    transition: transform 600ms;
                }

                .fade-dropdown-appear {
                    opacity: 0;
                }
                .fade-dropdown-appear-active {
                    opacity: 1;
                    transition: opacity 600ms;
                }
                .fade-dropdown-exit {
                    opacity: 1;
                }
                .fade-dropdown-exit-active {
                    opacity: 0;
                    transition: opacity 600ms;
                }

                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    padding-top: 109px;
                    padding-top: 16.34vh;
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
                    padding-right: 10px;
                    white-space: nowrap;
                }

                li > a.active {
                    color: rgb(0, 81, 67);
                }

                @media only screen and (min-width: 768px) { 
                    li > a {
                        font-size: 35px;
                    }
                }


                @media only screen and (min-width: 1280px) {
                    .container {
                        padding-top: 20px;
                    }
                }

                @media only screen and (min-width: 1920px) {
                    .logo {
                        width: 110px;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header