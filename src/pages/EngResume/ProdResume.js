import React from 'react';
const saveSvgAsPng = require('save-svg-as-png');

function ProdResume(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('prodResume'), `${user.name}.png`, imageOptions)
    }
    return (
        <div className="resumeBackground">
            <button onClick={downloadResume}>Baixar Currículo</button>
            <div className="resumeReady">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 595.3 841.9" xmlSpace="preserve">
                    <g id="guias" display='none'>
                    </g>
                    <g id="Layer_1">
                        <polygon fill="#B3B3B3" points="193,841.9 223,841.9 223,257.9 193,237.9" />
                        <polygon fill="#353535" points="223,648.3 223,676.6 568.6,676.6 534.2,648.3" />
                        <polygon fill="#353535" points="223,453.3 223,481.7 568.6,481.7 534.2,453.3" />
                        <polygon fill="#353535" points="223,229.3 223,257.7 568.6,257.7 534.2,229.3" />
                        <rect fill="#353535" width="193" height="841.9" />
                        <circle fill="#070909" cx="96.5" cy="117.1" r="67.6" />
                        <g>
                            <text transform="matrix(1 0 0 1 249.2466 252.1279)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >EXPERIÊNCIA</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 249.2466 476.105)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >FORMAÇÃO</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 249.2466 671.0806)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >CURSOS</text>
                        </g>
                        <polygon fill="#666666" points="193,209.1 193,237.9 223,257.9 223,229.1" />
                        <polygon fill="#666666" points="193,433.4 193,462.2 223,482.1 223,453.3" />
                        <polygon fill="#B3B3B3" points="223,30 193,0 193,209.1 223,229.1" />
                        <polygon fill="#666666" points="193,628.7 193,657.5 223,677.5 223,648.7" />
                        <rect y="209.3" fill="#070909" width="193" height="28.3" />
                        <rect y="433.6" fill="#070909" width="193" height="28.3" />
                        <rect y="628.7" fill="#070909" width="193" height="28.3" />
                        <g>
                            <text transform="matrix(1 0 0 1 52.9136 229.3418)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >CONTATO</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 37.2407 648.7773)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >HABILIDADES</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 45.0684 454.3184)" fill="#FFFFFF" fontFamily="'MyriadPro-Semibold'" fontSize="20px" >SOBRE MIM</text>
                        </g>
                        <g>
                            <path fill="#070909" d="M28.9,287.4c7.1,0,12.8-5.8,12.8-12.8c0-7.1-5.8-12.9-12.8-12.9c-7.1,0-12.8,5.8-12.8,12.9
			C16.1,281.7,21.8,287.4,28.9,287.4z M35.1,282.3c0,0.2-0.1,0.4-0.2,0.6c-1.3,0-2.7,0-4,0c0-1.1,0-2.2,0-3.3c0-0.3-0.2-0.5-0.5-0.5
			c-1,0-2,0-2.9,0c-0.3,0-0.5,0.1-0.5,0.5c0,1.1,0,2.2,0,3.3c-1.3,0-2.7,0-4,0c-0.1-0.2-0.2-0.4-0.2-0.6c0-2.4,0-4.8,0-7.2
			c0-0.3,0.1-0.4,0.3-0.6c0.9-0.7,1.7-1.5,2.5-2.2c1.1-1,2.2-2,3.4-3c0,0,0.1,0,0.1,0c2,1.7,4,3.5,5.9,5.2c0.1,0.1,0.2,0.3,0.2,0.4
			C35.1,277.4,35.1,279.9,35.1,282.3z M22.8,267.4c0.7,0,1.4,0,2.2,0c0,0.4,0,0.8,0,1.1c0,0.1,0,0.2-0.1,0.2c-0.7,0.6-1.3,1.2-2,1.9
			C22.8,269.5,22.8,268.5,22.8,267.4z M20.1,273.9c0.2-0.2,0.5-0.4,0.7-0.6c2.7-2.4,5.4-4.7,8-7.1c0,0,0.1,0,0.1,0
			c2.8,2.5,5.7,5,8.5,7.5c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0,0.1,0,0.1c-0.3,0.3-0.6,0.6-0.9,1c-2.6-2.3-5.2-4.6-7.9-7
			c-2.6,2.3-5.2,4.6-7.9,7C20.7,274.7,20.4,274.4,20.1,273.9C20.1,274,20.1,274,20.1,273.9z"/>
                        </g>
                        <g>
                            <path fill="#070909" d="M28.9,299.4c-7.1,0-12.9,5.8-12.9,12.8c0,7.1,5.8,12.8,12.9,12.8c7.1,0,12.8-5.8,12.8-12.8
			C41.8,305.2,36,299.4,28.9,299.4z M21.9,304.9c0.4-0.4,0.8-0.8,1.1-1.1c0.1-0.1,0.3-0.2,0.4-0.3c0.1,0,0.2,0,0.3,0
			c0.2,0.1,0.3,0.2,0.5,0.4c1,1,1.9,1.9,2.9,2.9c0.4,0.4,0.4,0.7,0,1.1c-0.5,0.5-1,0.9-1.5,1.4c-1.3-1.3-2.7-2.6-4-4
			C21.7,305.1,21.8,305,21.9,304.9z M34,321c-0.2,0-0.4,0.1-0.6,0.1c-0.3,0-0.6,0-1,0c0,0-0.1,0-0.1,0c-0.3,0-0.6-0.1-0.8-0.1
			c-1.3-0.3-2.4-0.8-3.5-1.5c-1.6-1.1-3-2.3-4.3-3.7c-1.1-1.2-2-2.5-2.7-3.9c-0.4-0.7-0.6-1.5-0.8-2.3c-0.1-0.3-0.1-0.6-0.1-0.9
			c0-0.3,0-0.6,0-0.9c0.1-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.5,0.5-0.8c0.1,0,0.1,0.1,0.1,0.1c1.3,1.3,2.6,2.6,3.9,3.9
			c0.1,0.1,0.1,0.2,0.1,0.3c-0.2,0.7-0.1,1.3,0.4,1.9c1.1,1.3,2.3,2.5,3.6,3.6c0.6,0.5,1.2,0.6,1.9,0.4c0.1,0,0.2,0,0.3,0
			c1.3,1.3,2.7,2.7,4,4c0,0,0.1,0.1,0.1,0.1C34.8,320.7,34.5,320.9,34,321z M37.7,317.7c-0.1,0.2-0.3,0.4-0.4,0.5
			c-0.4,0.4-0.8,0.8-1.2,1.2c0,0-0.1,0.1-0.1,0.1c-1.4-1.4-2.7-2.7-4.1-4.1c0.1-0.1,0.2-0.2,0.3-0.3c0.4-0.4,0.8-0.8,1.2-1.2
			c0.3-0.3,0.7-0.3,1,0c1,1,2,2,3,3c0.1,0.1,0.2,0.2,0.2,0.3C37.7,317.5,37.7,317.6,37.7,317.7z"/>
                        </g>
                        <g>
                            <path fill="#070909" d="M27.8,341.3c-5.1,0.9-7.7,6.7-4.8,11.1c0.1,0.2,0.2,0.3,0.1,0.6c-0.3,0.8-0.5,1.5-0.8,2.4
			c0.1,0,0.2-0.1,0.3-0.1c0.8-0.2,1.6-0.5,2.3-0.7c0.1,0,0.2,0,0.3,0c1.7,1,3.6,1.3,5.6,0.9c3.8-0.9,6.3-4.8,5.4-8.7
			C35.2,343,31.6,340.7,27.8,341.3z M32,352.4c-0.5,0.1-0.9,0-1.4-0.1c-2-0.5-3.6-1.8-4.8-3.5c-0.4-0.6-0.8-1.1-0.9-1.8
			c0-0.2,0-0.3-0.1-0.5c0-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.4,1.2-0.4c0.1,0,0.2,0.1,0.3,0.3c0.3,0.6,0.5,1.2,0.8,1.8
			c0.1,0.2,0,0.4-0.2,0.6c-0.1,0.2-0.2,0.3-0.4,0.4c-0.1,0.1-0.2,0.3-0.1,0.5c0.7,1.2,1.7,2,2.9,2.5c0.2,0.1,0.3,0,0.4-0.1
			c0.2-0.3,0.4-0.5,0.6-0.8c0.1-0.2,0.3-0.3,0.5-0.2c0.6,0.3,1.1,0.5,1.7,0.8c0.1,0,0.2,0.2,0.2,0.3C33.5,351.5,32.8,352.2,32,352.4
			z"/>
                            <path fill="#070909" d="M28.9,335.8c-7.1,0-12.9,5.8-12.9,12.8c0,7.1,5.8,12.8,12.9,12.8c7.1,0,12.8-5.8,12.8-12.8
			C41.8,341.6,36,335.8,28.9,335.8z M30.9,356.8c-2,0.4-4,0.1-5.8-0.8c-0.1-0.1-0.3-0.1-0.4,0c-1.5,0.5-3,1-4.6,1.5
			c0.3-1,0.6-1.9,1-2.8c0.2-0.5,0.3-1,0.5-1.6c0.1-0.2,0-0.3,0-0.4c-0.9-1.6-1.3-3.3-1.1-5.1c0.3-3,1.8-5.2,4.4-6.6
			c5.1-2.8,11.5,0.1,12.7,5.8C38.5,351.3,35.5,355.9,30.9,356.8z"/>
                        </g>
                        <g>
                            <path fill="#070909" d="M34.8,380.8c-3.9,0-7.9,0-11.8,0c2,1.7,3.9,3.3,5.9,5C30.9,384.1,32.8,382.4,34.8,380.8z" />
                            <path fill="#070909" d="M28.9,372.8c-7.1,0-12.9,5.8-12.9,12.8s5.8,12.8,12.9,12.8c7.1,0,12.8-5.8,12.8-12.8S36,372.8,28.9,372.8z
			 M37.7,390.6c0,0.1-0.1,0.2-0.1,0.3c-0.3,0.9-1.1,1.4-2.1,1.4c-4.4,0-8.9,0-13.3,0c-0.7,0-1.4-0.3-1.8-0.9
			c-0.2-0.3-0.3-0.6-0.4-0.9c0-3.3,0-6.6,0-9.9c0-0.1,0.1-0.2,0.1-0.3c0.3-0.9,1.1-1.4,2.1-1.4c4.4,0,8.9,0,13.3,0
			c0.7,0,1.4,0.3,1.8,0.9c0.2,0.3,0.3,0.6,0.4,0.9C37.7,384,37.7,387.3,37.7,390.6z"/>
                            <path fill="#070909" d="M35.9,382.2c-0.1,0.1-0.1,0.1-0.2,0.2c-1.9,1.6-3.9,3.3-5.8,4.9c-0.2,0.1-0.4,0.2-0.6,0.2c-0.3,0-0.6,0-0.8,0
			c-0.2,0-0.5-0.1-0.6-0.2c-1.9-1.6-3.9-3.3-5.8-4.9c0,0-0.1-0.1-0.2-0.1c0,0.1,0,0.2,0,0.2c0,2.6,0,5.2,0,7.7
			c0,0.3,0.1,0.4,0.4,0.4c4.4,0,8.8,0,13.3,0c0.3,0,0.4-0.1,0.4-0.4c0-2.6,0-5.2,0-7.7C35.9,382.4,35.9,382.3,35.9,382.2z"/>
                        </g>
                        <text transform="matrix(1 0 0 1 69.166 136.1489)" fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="64.8734px">{user.name.charAt(0)}</text>
                        <rect x="223.5" y="788.3" fill="#2DBEB7" width="100%" height="28.1"/>
                        <text transform="matrix(1 0 0 1 292.291 808.1787)" fill='#FFF'fontFamily="'MyriadPro-Regular'" fontSize="12.5417px">Currículo Gerado pela Curvi</text>
                        {/* <g>
		<rect x="256.5" y="788.3" fill="#070909" width="28.1" height="28.1"/>
		<rect x="367.9" y="788.3" fill="#353535" width="28.1" height="28.1"/>
		<rect x="475.3" y="788.3" fill="#B3B3B3" width="28.1" height="28.1"/>
		<text transform="matrix(1 0 0 1 292.291 808.1787)" fontFamily="'MyriadPro-Regular'" fontSize="12.5417px">070909</text>
		<text transform="matrix(1 0 0 1 401.2988 808.1787)" fontFamily="'MyriadPro-Regular'" fontSize="12.5417px">353535</text>
		<text transform="matrix(1 0 0 1 510.3066 808.1797)" fontFamily="'MyriadPro-Regular'" fontSize="12.5417px">B2B2B2</text>
	</g> */}
                    </g>
                    <g id="TEXTOS">
                        <text transform="matrix(1 0 0 1 249.2476 129.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="27.833px">{user.name.toUpperCase()}</text>
                        <text transform="matrix(1 0 0 1 249.2471 156.21)" fill="#070909" fontFamily="'MyriadPro-Regular'" fontSize="21.3416px">{user.area} - {user.area_level}</text>
                        <text transform="matrix(1 0 0 1 45.3115 268.9541)"  fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.address.substring(0, 19)}</text>
                        <text transform="matrix(1 0 0 1 50.3115 283.9541)"  fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.address.substring(20, user.address.length)}</text>
                        <text transform="matrix(1 0 0 1 45.3115 313.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='12'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 45.3115 350.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='12'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 45.3110 385.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='12'>{user.email}</text>
                        <text transform="matrix(1 0 0 1 15.3115 477.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(0,26)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 497.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(26,50)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 517.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(50,75)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 537.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(75,100)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 553.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(100,125)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 573.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(125,150)}</text>
                        <text transform="matrix(1 0 0 1 15.3115 593.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(150,user.goal.length)}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 285.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 305.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,38)}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 320.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(38,75)}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 335.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(75,user.companyName.length)}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 325.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyStartEnd  !== "NOT_PRINT"?  `Período: ${user.companyStartEnd}` :<></>}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 345.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                        <text transform="matrix(0.9856 0 0 1 249.5903 360.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription}`:<></>}</text>
                        {/* <text transform="matrix(0.9856 0 0 1 249.2612 341.938)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">Cargo / Nome da Compainha</text>
                        <text transform="matrix(0.9856 0 0 1 248.9321 399.7686)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">Cargo / Nome da Compainha</text> */}
                        <text transform="matrix(1 0 0 1 249.8784 506.5454)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courseName} / {user.courseSchool}</text>
                        <text transform="matrix(1 0 0 1 249.8784 526.5454)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">Período - {user.courseEndYear}</text>
                        {/* <text transform="matrix(1 0 0 1 249.2466 584.5894)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text> */}
                        <text transform="matrix(1 0 0 1 250.1948 696.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{(user.courses !== 'NOT_PRINT' )? user.courses:<></> }</text>
                        {/* <text transform="matrix(1 0 0 1 249.563 755.8696)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text> */}
                    </g>
                </svg>

            </div>
        </div>
    )
}
export default ProdResume;