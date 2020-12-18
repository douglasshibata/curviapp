import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function ResumeCurvi2(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('resumeCurvi2'), `${user.name}.png`, imageOptions)
    }
    return (
        <>
            <Form>
                <button onClick={downloadResume}>Baixar Currículo</button>
            </Form>
            <div className="resumeBackground">
                <div className="resumeReady">
                    <svg xmlns="http://www.w3.org/2000/svg" id='resumeCurvi2' xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="595.5pt" height="842.25pt" viewBox="0 0 595.5 842.25">
                        <g enableBackground="new">
                            <clipPath id="cp0">
                                <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3540.4703 L 0 3540.4703 Z " fillRule="evenodd" />
                            </clipPath>
                            <g clip-path="url(#cp0)">
                                <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1132 L 0 1132 Z " fill="#ffffff" />
                                <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1123 L 0 1123 Z " fill="#ffffff" />
                            </g>
                            <clipPath id="cp1">
                                <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3512.3216 L 0 3512.3216 Z " fillRule="evenodd" />
                            </clipPath>
                            <g clip-path="url(#cp1)">
                                <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1123 L 0 1123 Z " fill="#ffffff" />
                            </g>
                            <clipPath id="cp2">
                                <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3512.3216 L 0 3512.3216 Z " fillRule="evenodd" />
                            </clipPath>
                            <g clip-path="url(#cp2)">
                                <path transform="matrix(.6710324,0,0,.6726271,25.231806,-23.910792)" d="M 0 0 L 473.9136 0 L 473.9136 344.89418 L 0 344.89418 Z " />
                                <path transform="matrix(.35876308,0,0,.35893459,343.36164,105.2507)" d="M 598.40676 20.1 L 0 20.1 L 0 25.6 L 621.30679 25.6 L 621.30679 20.1 L 598.40676 20.1 Z " />
                                <path transform="matrix(.000000000000000021978962,-.3589437,.35893775,.000000000000000021978599,558.2941,789.9173)" d="M 1862.082 20.1 L 0 20.1 L 0 25.6 L 1884.982 25.6 L 1884.982 20.1 L 1862.082 20.1 Z " />
                                <path transform="matrix(.3590306,0,0,.3589376,25.227818,783.0192)" d="M 1484.7207 20.1 L 0 20.1 L 0 25.6 L 1507.6207 25.6 L 1507.6207 20.1 L 1484.7207 20.1 Z " />
                                <path transform="matrix(.000000000000000021978962,-.3589437,.35893775,.000000000000000021978599,18.349314,791.0897)" d="M 1862.082 20.1 L 0 20.1 L 0 25.6 L 1884.982 25.6 L 1884.982 20.1 L 1862.082 20.1 Z " />
                                <text fill="#ffffff" xmlSpace="preserve" transform="matrix(.58659067 0 0 .58659067 59.577539 95.60123)" fontSize="37.63" fontFamily="Roboto">{user.name.toUpperCase().substring(0,17)}</text>
                                <text fill="#ffffff" xmlSpace="preserve" transform="matrix(.58659067 0 0 .58659067 62.577539 115.60123)" fontSize="37.63" fontFamily="Roboto">{user.name.toUpperCase().substring(17,34)}</text>
                                <text fill="#ffffff" xmlSpace="preserve" transform="matrix(.58659067 0 0 .58659067 65.577539 135.60123)" fontSize="37.63" fontFamily="Roboto">{user.name.toUpperCase().substring(34,user.name.length)}</text>
                                <text fill="#ffffff" xmlSpace="preserve" transform="matrix(.55770376 0 0 .55770376 75.577539 177.81613)" fontSize="28.04" fontFamily="Roboto">{user.area} - {user.area_level}</text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 309.52647 263.81089)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="0 10.267105 14.420975 22.833207 30.814377 41.329668 50.786897 54.940767 63.979997">HISTÓRICO</tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 309.52647 263.81089)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="74.495288"> </tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 309.52647 263.81089)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="77.52579 86.40828 95.86551 106.3808 114.27054 118.42441 126.83664 135.24887 139.40274 149.91803 160.18514 170.24324">PROFISSIONAL</tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 309.52897 297.1321)" fontSize="11.62" fontFamily="Roboto">{user.companyOccupation}</text> 
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 304.31416 486.52424)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="0 7.88974 18.40503 27.862259 39.749116 49.80722 58.84645 68.90456">FORMAÇÃO</tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 304.31416 486.52424)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="82.45035 92.50845 101.54768 111.60579 121.62471 130.42882 142.31568 146.46955 155.50878">ACADÊMICA</tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 59.57763 263.81117)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="0 10.502823 19.83142 26.8246 35.61827 43.58998 47.738924 57.250169">OBJETIVO</tspan></text>
                                <text fill="#323232" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 59.577539 367.9334)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="0 9.028503 19.531327 29.786255 37.757966 47.80414 55.77585">CONTATO</tspan></text>
                                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 59.57763 486.5239)" fontSize="15.07" fontWeight='bold' fontFamily="Roboto"><tspan y="14" x="0 9.028503 17.822175 27.268189 35.2399 39.38884 47.26921 51.41815 60.446657 70.49283 79.52133 90.024158 98.817829">CERTIFICAÇÕES</tspan></text>
                            </g >
                        </g >
                    </svg >

                </div>
            </div>
        </>
    )
}
export default ResumeCurvi2;