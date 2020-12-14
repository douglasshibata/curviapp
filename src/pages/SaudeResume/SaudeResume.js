import React from 'react';
const saveSvgAsPng = require('save-svg-as-png');

function SaudeResume(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('saudeResume'), `${user.name}.png`, imageOptions)
    }
    return (
        <div className="resumeBackground">
            <button onClick={downloadResume}>Baixar Currículo</button>
            <div className="resumeReady">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id='saudeResume' xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 595.3 841.9" xmlSpace="preserve">
          
                    <g id="Guias" display='none'>
                    </g>
                    <g id="Layer_1">
                        <path fill="#D1D4D6" d="M55.2,131.3l-1.9,537.6c60.9,28.4,97.4,20,143.5,25.6L238.2,102C155.5,115.9,85.1,144.6,55.2,131.3z" />
                        <path fill="#25201D" d="M38.9,111.5l-3,647c61.9,26.3,111.1,30,157.4,34l26.2-694.5C137.4,114.9,69.4,123.8,38.9,111.5z" />
                        <path fill="#84CFEC" d="M438,0c-32,3.8-47.4,6.7-86.3,22.2l0,0c0,0,143.9-3.2,243.6,61.8V0H438z" />
                        <path fill="#25201D" d="M245.1,841.9h350.2v-44.1c0,0-120-41.3-249-2.1c-48.1,14.6-79.6,24.2-102.7,30.7
		c-38.9,10.9-54.3,12.9-86.3,15.6H245.1z"/>
                        <path fill="#84CFEC" d="M16,81.6v695.2c62.6,24.5,137.7,32.6,184,35.3V94.2C118.4,113.4,46.8,93,16,81.6z" />
                        <path fill="#25201D" d="M350.2,0H0v63c0,0,5.7,2.8,16,6.6C46.8,81,118.4,101.4,200,82.2c16-3.8,32.4-9,49-16.2
		c48.1-20.9,79.6-34.5,102.7-43.8C390.6,6.7,406,3.8,438,0H350.2z"/>
                        <path fill="#D1D4D6" d="M200,825.1c-46.3-2.6-121.4-10.7-184-35.3c-5.4-2.1-10.8-4.4-16-6.8v58.8h157.3c32-2.6,47.4-4.7,86.3-15.6
		C243.6,826.3,226.5,826.6,200,825.1z"/>
                        <g>
                            <text transform="matrix(1 0 0 1 48.1782 155.771)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.toUpperCase().substring(0,8)}</text>
                            <text transform="matrix(1 0 0 1 48.1782 185.771)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.toUpperCase().substring(8,18)}</text>
                            <text transform="matrix(1 0 0 1 48.1782 215.771)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.toUpperCase().substring(18,user.name.length)}</text>
                            <text transform="matrix(1 0 0 1 51.4585 234.3408)" fill="#25201D" fontFamily="MyriadPro-Regular" fontSize="12.9183px">{user.area} - {user.area_level}</text>
                        </g>
                        <path fill="#25201D" d="M577.7,156.8c0,8.8-7.1,15.9-15.9,15.9H262.4c-8.8,0-15.9-7.1-15.9-15.9l0,0c0-8.8,7.1-15.9,15.9-15.9h299.4
		C570.6,140.9,577.7,148,577.7,156.8L577.7,156.8z"/>
                        <circle fill="#84CFEC" cx="262.3" cy="156.8" r="15.7" />
                        <text transform="matrix(1 0 0 1 296.0269 163.7061)" fill="#D1D4D6" fontFamily="MyriadPro-Semibold" fontSize="20px">EXPERIÊNCIA</text>
                        <path fill="#25201D" d="M577.7,395.4c0,8.8-7.1,15.9-15.9,15.9H262.4c-8.8,0-15.9-7.1-15.9-15.9l0,0c0-8.8,7.1-15.9,15.9-15.9h299.4
		C570.6,379.6,577.7,386.7,577.7,395.4L577.7,395.4z"/>
                        <circle fill="#84CFEC" cx="262.3" cy="395.4" r="15.7" />
                        <text transform="matrix(1 0 0 1 296.0269 402.3804)" fill="#D1D4D6" fontFamily="MyriadPro-Semibold" fontSize="20px">FORMAÇÃO</text>
                        <path fill="#25201D" d="M578,594.8c0,8.8-7.1,15.9-15.9,15.9H262.8c-8.8,0-15.9-7.1-15.9-15.9l0,0c0-8.8,7.1-15.9,15.9-15.9h299.4
		C570.9,578.9,578,586,578,594.8L578,594.8z"/>
                        <circle fill="#84CFEC" cx="262.6" cy="594.8" r="15.7" />
                        <text transform="matrix(1 0 0 1 296.3423 601.6948)" fill="#D1D4D6" fontFamily="MyriadPro-Semibold" fontSize="20px">CURSOS</text>
                        <text transform="matrix(1 0 0 1 247.2563 439.9448)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text>
                        <text transform="matrix(1 0 0 1 246.6245 517.9888)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text>
                        <text transform="matrix(0.9856 0 0 1 247.2417 203.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">Cargo / Nome da Compainha</text>
                        <text transform="matrix(0.9856 0 0 1 246.5835 317.8145)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">Cargo / Nome da Compainha</text>
                        <text transform="matrix(1 0 0 1 247.0435 636.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text>
                        <text transform="matrix(1 0 0 1 246.4116 695.4033)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Curso / Nome da Instituição</text>
                        <path fill="#FFFFFF" d="M178.2,282.1c0,6.4-5.2,11.6-11.6,11.6H49.4c-6.4,0-11.6-5.2-11.6-11.6l0,0c0-6.4,5.2-11.6,11.6-11.6h117.2
		C173,270.5,178.2,275.7,178.2,282.1L178.2,282.1z"/>
                        <circle fill="#25201D" cx="49" cy="282.1" r="11.1" />
                        <text transform="matrix(1 0 0 1 87.4585 287.6353)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="15px">PERFIL</text>
                        <text transform="matrix(1 0 0 1 42.4585 310.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(0,27)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 325.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(27,54)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 340.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(54,81)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 355.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(81,107)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 370.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(107,134)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 385.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(134,161)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 400.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(161,188)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 415.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(215,242)}</text>
                        <text transform="matrix(1 0 0 1 42.4585 430.6353)" fill="#2C242D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(242,user.goal.length)}</text>
                        <path fill="#FFFFFF" d="M176.3,469.2c0,6.4-5.2,11.6-11.6,11.6H47.6c-6.4,0-11.6-5.2-11.6-11.6l0,0c0-6.4,5.2-11.6,11.6-11.6h117.2
		C171.2,457.6,176.3,462.8,176.3,469.2L176.3,469.2z"/>
                        <circle fill="#25201D" cx="47.1" cy="469.2" r="11.1" />
                        <text transform="matrix(1 0 0 1 76.6108 474.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold"fontSize="15px">CONTATO</text>
                        <g>
                            <path fill="#25201D" d="M47.9,526.5c6.9,0,12.6-5.8,12.6-12.8c0-7.1-5.6-12.8-12.6-12.8c-6.9,0-12.6,5.8-12.6,12.8
			C35.3,520.8,40.9,526.5,47.9,526.5z M53.9,521.4c0,0.2-0.1,0.4-0.2,0.6c-1.3,0-2.6,0-4,0c0-1.1,0-2.2,0-3.3c0-0.3-0.2-0.5-0.5-0.5
			c-1,0-1.9,0-2.9,0c-0.3,0-0.5,0.1-0.5,0.5c0,1.1,0,2.2,0,3.3c-1.3,0-2.6,0-4,0c-0.1-0.2-0.2-0.4-0.2-0.6c0-2.4,0-4.8,0-7.2
			c0-0.3,0.1-0.4,0.3-0.6c0.8-0.7,1.7-1.5,2.5-2.2c1.1-1,2.2-2,3.3-3c0,0,0.1,0,0.1,0c1.9,1.7,3.9,3.5,5.8,5.2
			c0.1,0.1,0.2,0.3,0.2,0.4C53.9,516.5,53.9,519,53.9,521.4z M41.9,506.5c0.7,0,1.4,0,2.1,0c0,0.4,0,0.8,0,1.1c0,0.1,0,0.2-0.1,0.2
			c-0.6,0.6-1.3,1.2-2,1.9C41.9,508.6,41.9,507.6,41.9,506.5z M39.3,513.1c0.2-0.2,0.5-0.4,0.7-0.6c2.6-2.4,5.3-4.7,7.9-7.1
			c0,0,0,0,0.1,0c2.8,2.5,5.6,5,8.3,7.5c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0,0.1,0,0.1c-0.3,0.3-0.6,0.6-0.9,1c-2.6-2.3-5.1-4.6-7.7-7
			c-2.6,2.3-5.1,4.6-7.7,7C39.9,513.8,39.6,513.5,39.3,513.1C39.3,513.1,39.3,513.1,39.3,513.1z"/>
                        </g>
                        <g>
                            <path fill="#25201D" d="M47.9,538.5c-6.9,0-12.6,5.8-12.6,12.8c0,7.1,5.6,12.8,12.6,12.8c6.9,0,12.6-5.8,12.6-12.8
			C60.5,544.3,54.8,538.5,47.9,538.5z M41,544c0.4-0.4,0.7-0.8,1.1-1.1c0.1-0.1,0.3-0.2,0.4-0.3c0.1,0,0.2,0,0.3,0
			c0.2,0.1,0.3,0.2,0.5,0.4c0.9,1,1.9,1.9,2.8,2.9c0.4,0.4,0.4,0.7,0,1.1c-0.5,0.5-1,0.9-1.5,1.4c-1.3-1.3-2.6-2.6-3.9-4
			C40.8,544.2,40.9,544.1,41,544z M52.9,560.1c-0.2,0-0.4,0.1-0.5,0.1c-0.3,0-0.6,0-0.9,0c0,0-0.1,0-0.1,0c-0.3,0-0.5-0.1-0.8-0.1
			c-1.3-0.3-2.4-0.8-3.4-1.5c-1.6-1.1-2.9-2.3-4.2-3.7c-1-1.2-2-2.5-2.7-3.9c-0.4-0.7-0.6-1.5-0.8-2.3c-0.1-0.3-0.1-0.6-0.1-0.9
			c0-0.3,0-0.6,0-0.9c0.1-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.5,0.4-0.8c0,0,0.1,0.1,0.1,0.1c1.3,1.3,2.6,2.6,3.8,3.9
			c0.1,0.1,0.1,0.2,0.1,0.3c-0.2,0.7-0.1,1.3,0.4,1.9c1.1,1.3,2.3,2.5,3.5,3.6c0.5,0.5,1.2,0.6,1.9,0.4c0.1,0,0.2,0,0.3,0
			c1.3,1.3,2.6,2.7,3.9,4c0,0,0.1,0.1,0.1,0.1C53.7,559.8,53.3,560,52.9,560.1z M56.5,556.9c-0.1,0.2-0.2,0.4-0.4,0.5
			c-0.4,0.4-0.8,0.8-1.2,1.2c0,0-0.1,0.1-0.1,0.1c-1.3-1.4-2.6-2.7-4-4.1c0.1-0.1,0.2-0.2,0.3-0.3c0.4-0.4,0.8-0.8,1.2-1.2
			c0.3-0.3,0.7-0.3,1,0c1,1,2,2,3,3c0.1,0.1,0.2,0.2,0.2,0.3C56.5,556.6,56.5,556.8,56.5,556.9z"/>
                        </g>
                        <g>
                            <path fill="#25201D" d="M46.8,580.5c-5,0.9-7.5,6.7-4.7,11.1c0.1,0.2,0.1,0.3,0.1,0.6c-0.3,0.8-0.5,1.5-0.8,2.4
			c0.1,0,0.2-0.1,0.3-0.1c0.8-0.2,1.5-0.5,2.3-0.7c0.1,0,0.2,0,0.3,0c1.7,1,3.5,1.3,5.5,0.9c3.8-0.9,6.2-4.8,5.2-8.7
			C54.1,582.2,50.6,579.8,46.8,580.5z M50.9,591.5c-0.5,0.1-0.9,0-1.4-0.1c-2-0.5-3.5-1.8-4.7-3.5c-0.4-0.6-0.7-1.1-0.9-1.8
			c0-0.2,0-0.3-0.1-0.5c0-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.4,1.2-0.4c0.1,0,0.2,0.1,0.3,0.3c0.3,0.6,0.5,1.2,0.7,1.8
			c0.1,0.2,0,0.4-0.2,0.6c-0.1,0.2-0.2,0.3-0.4,0.4c-0.1,0.1-0.2,0.3-0.1,0.5c0.7,1.2,1.6,2,2.9,2.5c0.2,0.1,0.3,0,0.4-0.1
			c0.2-0.3,0.4-0.5,0.6-0.8c0.1-0.2,0.3-0.3,0.5-0.2c0.6,0.3,1.1,0.5,1.7,0.8c0.1,0,0.2,0.2,0.2,0.3
			C52.3,590.7,51.7,591.4,50.9,591.5z"/>
                            <path fill="#25201D" d="M47.9,574.9c-6.9,0-12.6,5.8-12.6,12.8c0,7.1,5.6,12.8,12.6,12.8c6.9,0,12.6-5.8,12.6-12.8
			C60.5,580.7,54.8,574.9,47.9,574.9z M49.8,596c-2,0.4-3.9,0.1-5.7-0.8c-0.1-0.1-0.2-0.1-0.4,0c-1.5,0.5-3,1-4.5,1.5
			c0.3-1,0.6-1.9,0.9-2.8c0.2-0.5,0.3-1,0.5-1.6c0.1-0.2,0-0.3,0-0.4c-0.9-1.6-1.3-3.3-1.1-5.1c0.3-3,1.8-5.2,4.3-6.6
			c5-2.8,11.2,0.1,12.4,5.8C57.3,590.4,54.3,595.1,49.8,596z"/>
                        </g>
                        <g>
                            <path fill="#25201D" d="M53.7,619.9c-3.9,0-7.7,0-11.5,0c1.9,1.7,3.9,3.3,5.8,5C49.8,623.2,51.7,621.6,53.7,619.9z" />
                            <path fill="#25201D" d="M47.9,612c-6.9,0-12.6,5.8-12.6,12.8c0,7.1,5.6,12.8,12.6,12.8c6.9,0,12.6-5.8,12.6-12.8
			C60.5,617.7,54.8,612,47.9,612z M56.5,629.8c0,0.1-0.1,0.2-0.1,0.3c-0.3,0.9-1,1.4-2,1.4c-4.3,0-8.7,0-13,0
			c-0.7,0-1.3-0.3-1.7-0.9c-0.2-0.3-0.2-0.6-0.4-0.9c0-3.3,0-6.6,0-9.9c0-0.1,0.1-0.2,0.1-0.3c0.3-0.9,1-1.4,2-1.4c4.3,0,8.7,0,13,0
			c0.7,0,1.3,0.3,1.7,0.9c0.2,0.3,0.2,0.6,0.4,0.9C56.5,623.1,56.5,626.5,56.5,629.8z"/>
                            <path fill="#25201D" d="M54.8,621.4c-0.1,0.1-0.1,0.1-0.2,0.2c-1.9,1.6-3.8,3.3-5.7,4.9c-0.2,0.1-0.4,0.2-0.6,0.2c-0.3,0-0.5,0-0.8,0
			c-0.2,0-0.4-0.1-0.6-0.2c-1.9-1.6-3.8-3.3-5.7-4.9c0,0-0.1-0.1-0.2-0.1c0,0.1,0,0.2,0,0.2c0,2.6,0,5.2,0,7.7
			c0,0.3,0.1,0.4,0.4,0.4c4.3,0,8.7,0,13,0c0.3,0,0.4-0.1,0.4-0.4c0-2.6,0-5.2,0-7.7C54.8,621.5,54.8,621.5,54.8,621.4z"/>
                        </g>
                        <rect x="210.1" y="732.8" fill="#25201D" width="100%" height="30.4" />
                        <text transform="matrix(1 0 0 1 308.8086 751.5225)" fill='#FFF' fontFamily="MyriadPro-Regular" fontSize="11.3951px">Currículo Gerado pela Curvi</text>
                       {/* 
                        <rect x="272.1" y="732.8" fill="#84CFEC" width="30.4" height="30.4" />
                        <rect x="378.6" y="732.8" fill="#25201D" width="30.4" height="30.4" />
                        <rect x="485.1" y="732.8" fill="#D1D4D6" width="30.4" height="30.4" />
                        <text transform="matrix(1 0 0 1 308.8086 751.5225)" fontFamily="MyriadPro-Regular" fontSize="11.3951px">84CFEC</text>
                        <text transform="matrix(1 0 0 1 416.5309 751.5225)" fontFamily="MyriadPro-Regular" fontSize="11.3951px">25201D</text>
                        <text transform="matrix(1 0 0 1 524.2552 751.5225)" fontFamily="MyriadPro-Regular" fontSize="11.3951px">D1D4D6</text> */}
                    </g>
                    <g id="Layer_3">
                    </g>
                </svg>

            </div>
        </div>
    )
}
export default SaudeResume;