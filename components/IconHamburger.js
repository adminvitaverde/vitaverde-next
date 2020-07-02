export default function IconHamburger({ fill, navIsOpen }) {
    return (
        <svg id="icon-hamburger" data-name="icon-hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13">
            <g id="Gruppe_96" data-name="Gruppe 96">
                <line id="Linie_67" data-name="Linie 67" y1="0.5" x2="18" y2="0.5" fill={fill} stroke={fill} />
                {navIsOpen ?
                    <line id="Linie_68" data-name="Linie 68" y1="6.5" x2="9" y2="6.5" fill={fill} stroke={fill} />:
                    <line id="Linie_68" data-name="Linie 68" x1="9" y1="6.5" x2="18" y2="6.5" fill={fill} stroke={fill} />
                }

                <line id="Linie_69" data-name="Linie 69" y1="12.5" x2="18" y2="12.5" fill={fill} stroke={fill} />
            </g>
            <style jsx>{`
                svg {
                    width: 18px;
                    padding: 0;
                    cursor: pointer;
                }
                @media only screen and (min-width: 1280px) {
                    svg {
                        width: 25px;
                    }
                }
            `}</style>
        </svg>
    );
}