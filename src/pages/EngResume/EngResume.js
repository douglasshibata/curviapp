import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function EngResume(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('engResume'), `${user.name}.png`, imageOptions)
    }
    return (
        <>
        <Form>
            <button onClick={downloadResume}>Baixar Currículo</button>
            </Form>
        <div className="resumeBackground">
            <div className="resumeReady">
                <svg version="1.1" id='engResume' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 595.3 841.9"  xmlSpace="preserve">
                    <g id="GUIAS" display='none' >
                    </g>
                    <g id="Layer_1">
                        <rect width="261" height="841.9" fill='#1B1E1F' />
                        <circle  cx="130.5" cy="141.1" r="75.5" fill='#FFFFFF' stroke='#341716' strokeWidth={7} strokeMiterlimit='10' />
                        <g>
                            <path fill='#FFFFFF' d="M49.7,313c4.6,0.2,8.3-3.4,8.4-7.8c0.1-4.7-3.5-8.3-8-8.4c-4.5-0.1-8.1,3.6-8.2,8
			C41.8,309.1,45.2,312.8,49.7,313z"/>
                            <path fill='#FFFFFF' d="M62.7,322.5c0-1.5-0.5-2.9-1.5-4c-0.2-0.2-1-1.1-3-1.8c-1.7-0.6-3.5-0.9-5.3-1.3c-0.7-0.2-1.2-0.1-1.7,0.5
			c-0.4,0.4-0.8,0.8-1.2,1.2c-0.5-0.5-0.9-0.9-1.4-1.3c-0.4-0.4-0.9-0.6-1.5-0.4c-1.8,0.5-3.6,0.9-5.4,1.4c-1.8,0.4-3.1,1.4-3.9,3.1
			c-0.5,1-0.6,2.1-0.6,3.2c0,2.3,0,4.5,0,6.8h25.5C62.7,327.4,62.7,325,62.7,322.5z"/>
                        </g>
                        <text transform="matrix(1 0 0 1 7.2471 240.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{user.name.toUpperCase().substring(0,18)}</text>
                        <text transform="matrix(1 0 0 1 7.2471 262.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{user.name.toUpperCase().substring(18,user.name.length)}</text>
                        <text transform="matrix(1 0 0 1 83.4863 324.5352)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='22px'>SOBRE MIM</text>
                        <text transform="matrix(1 0 0 1 74.8567 288.0645)" fill='#FFFFFF' fontFamily='MyriadPro-Regular' fontSize='12.9183px'>{user.area} - {user.area_level}</text>
                        <rect x="232.7" y="72.7" fill='#341716' width="362.6" height="41.3" />
                        <polygon fill='#200F0F' points="232.7,114 261,133.2 261,114 	" />
                        <text transform="matrix(1 0 0 1 345.5391 102.4419)" fill='#E9E6E9'fontFamily='MyriadPro-Bold' fontSize='26px'>FORMAÇÃO</text>
                        <rect x="232.7" y="313.7" fill='#341716' width="362.6" height="41.3" />
                        <polygon fill='#200F0F' points="232.7,355 261,374.2 261,355 	" />
                        <text transform="matrix(1 0 0 1 337.2974 343.4419)" fill='#E9E6E9'fontFamily='MyriadPro-Bold' fontSize='26px'>EXPERIÊNCIA</text>
                        <rect x="232.7" y="574.1" fill='#341716' width="362.6" height="41.3" />
                        <polygon fill='#200F0F' points="232.7,615.5 261,634.7 261,615.5 	" />
                        <text transform="matrix(1 0 0 1 366.3257 603.9175)" fill='#E9E6E9' fontFamily='MyriadPro-Bold' fontSize='26px'>CURSOS</text>
                        <g>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#E9E6E9' d="M312.1,91.7c-0.7,0.4-1.4,0.8-2.1,1.1c-1.1,0.5-2.1,1.1-3.2,1.6c-1.3,0.7-2.6,1.3-3.8,2
			c-1.4,0.8-2.9,1.5-4.3,2.3c-0.6,0.3-1.2,0.3-1.8,0c-1.8-0.9-3.5-1.8-5.3-2.7c-1-0.5-2-1-3-1.5c-1-0.5-2-1-3-1.5
			c-1.3-0.7-2.6-1.3-3.9-2c-1-0.5-1.3-1.6-0.7-2.5c0.2-0.3,0.5-0.5,0.8-0.6c1.4-0.7,2.8-1.5,4.2-2.2c2.3-1.2,4.6-2.4,6.9-3.6
			c1.3-0.7,2.6-1.4,3.9-2.1c0.6-0.3,1.1-0.3,1.7,0c1.7,0.9,3.5,1.8,5.2,2.7c1.3,0.7,2.5,1.3,3.8,2c2.1,1.1,4.1,2.1,6.2,3.2
			c1.1,0.5,1.2,2,0.5,2.7c-0.1,0.1-0.3,0.3-0.5,0.4c-0.1,0.1-0.2,0.2-0.2,0.3c0,1.8,0,3.6,0,5.4c0,0.1,0,0.2,0.1,0.2
			c0.7,0.7,0.8,1.6,0.8,2.5c0,0.7-0.2,1.4-0.6,1.9c-0.3,0.4-0.7,0.7-1.3,0.6c-0.4-0.1-0.6-0.3-0.8-0.6c-0.8-1.3-0.7-2.7-0.1-4
			c0,0,0-0.1,0.1-0.1c0.3-0.2,0.3-0.6,0.3-1c0-1.4,0-2.8,0-4.3C312.1,91.9,312.1,91.8,312.1,91.7z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#E9E6E9' d="M285.6,94.2c0.4,0.2,0.9,0.4,1.3,0.6c2.1,1.1,4.2,2.2,6.4,3.3c1.2,0.6,2.4,1.2,3.5,1.8
			c0.6,0.3,1.2,0.3,1.7,0c1.8-1,3.7-1.9,5.5-2.9c1.8-0.9,3.5-1.8,5.3-2.7c0.1-0.1,0.2-0.1,0.3-0.2c0,0.2,0,0.3,0,0.5
			c0,1.9,0,3.8,0,5.6c0,0.2-0.1,0.3-0.2,0.4c-2.2,1.1-4.4,2.3-6.5,3.4c-1.7,0.9-3.4,1.7-5.1,2.6c-0.1,0.1-0.2,0.1-0.4,0
			c-2-1-3.9-2-5.9-3c-1.8-0.9-3.6-1.9-5.4-2.8c-0.5-0.3-0.5-0.3-0.5-0.9c0-1.8,0-3.6,0-5.5C285.6,94.5,285.6,94.4,285.6,94.2z"/>
                        </g>
                        <path fill='#E9E6E9' d="M311.8,325.1h-7.7V324c0-1.6-1.3-2.8-2.8-2.8H294c-1.6,0-2.8,1.3-2.8,2.8v1.1h-7.7c-1.6,0-2.8,1.3-2.8,2.8
		v16.8c0,1.6,1.3,2.8,2.8,2.8h28.3c1.6,0,2.8-1.3,2.8-2.8v-16.8C314.6,326.4,313.4,325.1,311.8,325.1z M292.4,324.8
		c0-1.1,0.9-2.1,2.1-2.1h6.2c1.2,0,2.1,0.9,2.1,2.1v0.3h-10.4V324.8z"/>
                        <path fillRule='evenodd' clipRule='evenodd' fill='#E9E6E9' d="M301.8,609.4c-0.3,0-0.7,0-1,0c0,0-0.1-0.1-0.1-0.1c-5-1.3-10-2.5-15-3.8c-1.4-0.3-2.8-0.5-3.8-1.5
		c-1.4-1.6-1.7-3.3-0.7-5.1c0.2-0.4,0.2-0.6,0-1c-1-1.6-0.9-4.8,1.1-6.5c4-3.5,7.9-7,11.8-10.5c0.7-0.6,1.3-0.8,2.3-0.6
		c5.5,1,11.1,2,16.6,3c1.6,0.3,2,1.1,0.9,2.1c-4.1,3.9-8.2,7.7-12.3,11.6c-0.7,0.6-1.3,0.8-2.3,0.5c-4.6-1.1-9.2-2.2-13.8-3.3
		c-1.2-0.3-2.1,0.2-2.1,1.2c0,0.4,0,0.9,0.2,1.2c0.2,0.3,0.6,0.7,1,0.8c5.1,1.3,10.3,2.5,15.4,3.8c0.5,0.1,0.8,0.1,1.1-0.3
		c3.2-3.1,6.3-6.3,9.5-9.4c0.5-0.5,0.9-1,0.8-1.7c-0.1-0.4,0.1-0.7,0.2-1.1c0.3-0.8,0.9-1.2,1.8-1.1c0.9,0.1,1.2,0.7,1,1.6
		c-0.1,0.3-0.1,0.7-0.1,1c0,0.5,0.1,1.1-0.1,1.6c-0.5,1.4-0.6,2.7,0,4c0.4,0.8,0.2,1.4-0.5,2.1c-3,2.9-5.9,5.8-8.9,8.6
		C304,607.5,302.9,608.5,301.8,609.4z M284.1,599.6c-1.2,1.5-0.5,2.9,1.4,3.4c4.5,1.2,9,2.3,13.4,3.5c1.4,0.4,2.1,0.2,3.1-0.7
		c3-3,6.1-6,9.1-8.9c0.2-0.2,0.3-0.5,0.3-0.7c0-0.4-0.2-0.8-0.4-1.3c-0.2,0.2-0.4,0.4-0.6,0.6c-2.6,2.5-5.1,5-7.6,7.5
		c-0.8,0.8-1.2,0.9-2.4,0.6C294.9,602.3,289.5,601,284.1,599.6z M305.3,586.2c-0.4-0.1-0.6-0.3-0.9-0.3c-2.7-0.5-5.4-1-8.1-1.6
		c-1.2-0.3-2-0.1-2.7,0.8c-0.6,0.7-0.6,0.8,0.5,1c2.7,0.5,5.4,1,8,1.6c1.1,0.2,1.9,0.1,2.5-0.6C304.8,586.7,305,586.5,305.3,586.2z"
                        />
                        <line fill='#FFFFFF' stroke='#FFFFFF' strokeMiterlimit='10' x1="27.6" y1="334.3" x2="228.8" y2="334.3" />
                        <text transform="matrix(1 0 0 1 83.5654 465.5352)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='22px'>CONTATO</text>
                        <line fill='#FFFFFF' stroke='#FFFFFF' strokeMiterlimit='10' x1="27.7" y1="476.3" x2="228.9" y2="476.3" />
                        <g>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M42.9,439c0.2,0,0.3,0,0.4,0c5.9,0,11.7,0,17.6,0c1,0,1.8,0.6,1.8,1.8c0,9.2,0,18.3,0,27.5
			c0,1.2-0.8,1.8-1.8,1.8c-5.9,0-11.7,0-17.6,0c-0.1,0-0.3,0-0.4,0C42.9,459.7,42.9,449.3,42.9,439z M58.3,451.7
			c0.3-2-0.6-4.3-2.1-5.2c-0.9,1-2,1.5-3.4,1.5c-1.3,0-2.4-0.6-3.3-1.6c-1.8,1.3-2.5,3.5-2.2,5.3C51,451.7,54.6,451.7,58.3,451.7z
			 M52.9,440.6c-1.6,0-2.9,1.3-3,2.9c0,1.6,1.3,2.9,2.9,2.9c1.6,0,3-1.3,3-2.9C55.9,442,54.5,440.7,52.9,440.6z M53,457.3
			c0.9,0,1.8,0,2.7,0c1.5,0,2.9,0,4.4,0c0.5,0,0.8-0.4,0.8-0.8c-0.1-0.4-0.4-0.6-0.9-0.6c-2.4,0-4.9,0-7.3,0c-2.2,0-4.5,0-6.7,0
			c-0.5,0-0.8,0.3-0.8,0.7c0,0.4,0.3,0.7,0.8,0.7C48.3,457.3,50.7,457.3,53,457.3z M53,463.7C53,463.7,53,463.7,53,463.7
			c-0.9,0-1.7,0-2.6,0c-1.5,0-3,0-4.5,0c-0.5,0-0.9,0.3-0.8,0.8c0.1,0.4,0.4,0.6,0.9,0.6c4.6,0,9.2,0,13.8,0c0.1,0,0.2,0,0.4,0
			c0.4-0.1,0.6-0.3,0.6-0.7c0-0.5-0.3-0.8-0.8-0.8C57.7,463.7,55.4,463.7,53,463.7z M53,461.3c1.9,0,3.9,0,5.8,0c0.4,0,0.9,0,1.3,0
			c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.2-0.7-0.6-0.8c-0.1,0-0.3,0-0.4,0c-4.5,0-9,0-13.5,0c-0.2,0-0.3,0-0.5,0c-0.4,0.1-0.6,0.3-0.6,0.7
			c0,0.5,0.3,0.7,0.8,0.7C48.4,461.3,50.7,461.3,53,461.3z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M37.8,463.9c0-1.1,0-2.2,0-3.3c1.2-0.2,2.5,0.3,3.5-0.7c0,1.6,0,3.1,0,4.7C40.3,463.5,39,464,37.8,463.9z" />
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M41.3,449.1c-1-1-2.3-0.5-3.5-0.7c0-1.1,0-2.2,0-3.3c1.1-0.2,2.4,0.3,3.5-0.7
			C41.3,446,41.3,447.5,41.3,449.1z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M37.8,452.8c1.2-0.2,2.5,0.3,3.5-0.7c0,1.6,0,3.1,0,4.7c-1-1-2.3-0.5-3.5-0.7
			C37.8,455,37.8,453.9,37.8,452.8z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M38.1,468.3c1.1-0.1,2.3,0.3,3.2-0.7c0,0.9,0,1.6,0,2.4C40.1,470.3,38.5,469.4,38.1,468.3z" />
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M41.3,439c0,0.8,0,1.5,0,2.4c-0.9-1-2.1-0.6-3.2-0.7C38.5,439.6,39.9,438.8,41.3,439z" />
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M38.8,442.2c0.3,0,0.6,0,0.9,0c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.6,0-1.2,0-1.8,0
			c-0.5,0-0.8-0.3-0.8-0.7c0-0.4,0.3-0.7,0.8-0.7C38.3,442.2,38.6,442.2,38.8,442.2C38.8,442.2,38.8,442.2,38.8,442.2z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M38.9,457.6c0.3,0,0.6,0,0.9,0c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.6,0-1.3,0-1.9,0
			c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C38.2,457.6,38.5,457.6,38.9,457.6C38.9,457.6,38.9,457.6,38.9,457.6z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M38.8,451.3c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.6,0,1.3,0,1.9,0
			c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7C39.5,451.3,39.2,451.3,38.8,451.3z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M38.8,465.4c0.3,0,0.6,0,1,0c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.6,0.7c-0.7,0-1.4,0-2,0
			c-0.4,0-0.6-0.3-0.6-0.7c0-0.4,0.3-0.6,0.7-0.6C38.2,465.4,38.5,465.4,38.8,465.4z"/>
                        </g>
                        <text transform="matrix(1 0 0 1 68.4863 679.3106)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='22px'>HABILIDADES</text>
                        <line fill='#FFFFFF' stroke='#FFFFFF' strokeMiterlimit='10' x1="27.6" y1="690.1" x2="228.8" y2="690.1" />
                        <g>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M55.2,656.4c-1-0.3-1.9-0.7-2.8-1c-0.3-0.1-0.5-0.2-0.5-0.5c0-0.3,0.1-0.5,0.4-0.6c2.3-1.5,4.6-3,6.9-4.6
			c0.5-0.3,0.8-0.2,1,0.3c0.9,2.6,1.7,5.2,2.6,7.8c0.1,0.3,0.1,0.5-0.1,0.7c-0.2,0.2-0.4,0.2-0.7,0.1c-1-0.3-2-0.7-3-1
			c-0.2,0.3-0.3,0.7-0.5,1c-1.2,2.6-2.8,4.9-4.6,7.1c-4.3,5.1-9.7,8.5-16,10.4c-0.1,0-0.1,0.1-0.2,0c-0.1,0-0.2-0.1-0.3-0.1
			c0.1-0.1,0.1-0.2,0.2-0.3c0.5-0.3,1-0.5,1.6-0.8c3.5-1.8,6.7-4.1,9.3-7c2.6-2.9,4.6-6.1,6.1-9.7C54.7,657.7,54.9,657.1,55.2,656.4
			z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M58.5,671.6c0-2.8,0-5.6,0-8.4c0-0.6,0.2-0.8,0.8-0.8c0.9,0,1.8,0,2.7,0c0.6,0,0.8,0.2,0.8,0.8
			c0,5.5,0,10.9,0,16.4c0,0.2,0,0.5,0,0.7c0,0.3-0.2,0.5-0.6,0.5c-1,0-2.1,0-3.1,0c-0.4,0-0.5-0.2-0.5-0.6c0-1.3,0-2.5,0-3.8
			C58.5,674.7,58.5,673.2,58.5,671.6z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M50,681.6c3.9,0,7.9,0,11.8,0c0.7,0,1,0.3,1,1c0,0.2,0,0.4,0,0.7c0,0.5-0.3,0.7-0.8,0.8c-0.1,0-0.2,0-0.3,0
			c-7.8,0-15.6,0-23.3,0c-0.8,0-1.1-0.2-1.1-1.1c0-0.2,0-0.4,0-0.6c0-0.5,0.3-0.8,0.8-0.8c0.5,0,1,0,1.6,0
			C43.1,681.6,46.5,681.6,50,681.6z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M53.2,674.3c0-1.9,0-3.9,0-5.8c0-0.4,0.2-0.6,0.6-0.6c1,0,2.1,0,3.1,0c0.3,0,0.5,0.2,0.5,0.6
			c0,0.2,0,0.4,0,0.6c0,3.6,0,7.3,0,10.9c0,0.6-0.2,0.8-0.8,0.8c-0.9,0-1.8,0-2.7,0c-0.5,0-0.7-0.2-0.7-0.7
			C53.2,678.2,53.2,676.2,53.2,674.3z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M52.1,676.4c0,1.2,0,2.4,0,3.6c0,0.6-0.2,0.7-0.7,0.8c-0.9,0-1.9,0-2.8,0c-0.5,0-0.7-0.2-0.7-0.7
			c0-2.4,0-4.8,0-7.2c0-0.5,0.2-0.7,0.7-0.7c1,0,1.9,0,2.9,0c0.5,0,0.7,0.2,0.7,0.7C52.1,674,52.1,675.2,52.1,676.4z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M46.8,678c0,0.7,0,1.4,0,2.2c0,0.4-0.2,0.6-0.6,0.6c-1,0-2,0-2.9,0c-0.4,0-0.6-0.2-0.6-0.6
			c0-1.5,0-2.9,0-4.4c0-0.4,0.2-0.6,0.6-0.6c1,0,2,0,3,0c0.4,0,0.6,0.2,0.6,0.6C46.8,676.5,46.8,677.2,46.8,678z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M39.4,680.8c-0.5,0-1,0-1.5,0c-0.4,0-0.6-0.2-0.6-0.6c0-0.5,0-1.1,0-1.6c0-0.4,0.2-0.6,0.6-0.6
			c1,0,2.1,0,3.1,0c0.4,0,0.5,0.2,0.6,0.6c0,0.5,0,1.1,0,1.6c0,0.4-0.2,0.6-0.6,0.6C40.4,680.8,39.9,680.8,39.4,680.8z"/>
                        </g>
                        <g>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M28.1,592.4c0.3-0.8,0.5-1.5,0.8-2.3c0.1-0.4,0.3-0.8,0.4-1.3c0-0.1,0-0.2,0-0.3c-0.7-1.3-1-2.7-0.9-4.1
			c0.3-2.4,1.5-4.2,3.5-5.3c4.1-2.3,9.2,0.1,10.2,4.6c0.8,3.7-1.7,7.4-5.4,8.1c-1.6,0.3-3.2,0.1-4.7-0.6c-0.1,0-0.2,0-0.3,0
			C30.6,591.6,29.3,592,28.1,592.4z M29.8,590.7c0.1,0,0.2,0,0.2-0.1c0.6-0.2,1.3-0.4,1.9-0.6c0.1,0,0.2,0,0.3,0
			c1.4,0.8,2.9,1.1,4.5,0.7c3.1-0.7,5.1-3.9,4.3-7c-0.7-3-3.6-4.9-6.7-4.4c-4.1,0.7-6.2,5.4-3.8,8.9c0.1,0.2,0.1,0.3,0.1,0.5
			C30.3,589.4,30.1,590,29.8,590.7z"/>
                            <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M31.9,583.6c0-0.5,0.2-0.9,0.5-1.3c0.3-0.3,0.6-0.3,1-0.3c0.1,0,0.2,0.1,0.2,0.2c0.2,0.5,0.4,0.9,0.6,1.4
			c0.1,0.2,0,0.3-0.1,0.5c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.1,0.2,0,0.4c0.6,0.9,1.3,1.6,2.4,2c0.1,0,0.2,0,0.3-0.1
			c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.2,0.4-0.1c0.5,0.2,0.9,0.4,1.4,0.7c0.1,0,0.1,0.2,0.1,0.3c0,0.7-0.5,1.3-1.2,1.4
			c-0.4,0.1-0.7,0-1.1-0.1c-1.6-0.4-2.9-1.4-3.8-2.8c-0.3-0.5-0.6-0.9-0.7-1.5C31.9,583.9,31.9,583.7,31.9,583.6z"/>
                        </g>
                        <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M29.4,523.3c0.2-0.9,0.8-1.7,1.6-2.2c0.6-0.4,1.3-0.4,2-0.2c0.2,0,0.3,0.3,0.4,0.5c0.2,1,0.4,2,0.5,3
		c0.1,0.4-0.2,0.6-0.5,0.8c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.3,0.4-0.3,0.7c0.6,2,1.8,3.7,3.6,4.9c0.2,0.2,0.4,0.2,0.6,0
		c0.4-0.3,0.8-0.6,1.2-0.9c0.3-0.3,0.6-0.3,0.9,0c0.8,0.6,1.6,1.2,2.3,1.9c0.1,0.1,0.2,0.4,0.1,0.6c-0.3,1.3-1.5,2.2-2.9,2.1
		c-0.8,0-1.4-0.3-2.1-0.6c-2.9-1.6-4.8-4-6-7.1c-0.4-1-0.7-2-0.7-3.1C29.3,523.8,29.3,523.5,29.4,523.3z"/>
                        <path fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'  d="M28.1,560.4c0-2.7,0-5.3,0-8c0-0.1,0.1-0.2,0.1-0.3c0.2-0.7,0.9-1.1,1.7-1.1c3.6,0,7.1,0,10.7,0
		c0.6,0,1.1,0.2,1.4,0.7c0.1,0.2,0.2,0.5,0.3,0.7c0,2.7,0,5.3,0,8c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.7-0.9,1.1-1.7,1.1
		c-3.6,0-7.1,0-10.7,0c-0.6,0-1.1-0.2-1.4-0.7C28.3,560.9,28.2,560.6,28.1,560.4z M40.8,553.6c-0.1,0.1-0.1,0.1-0.2,0.1
		c-1.6,1.3-3.1,2.6-4.7,3.9c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4,0-0.7,0c-0.2,0-0.4-0.1-0.5-0.2c-1.6-1.3-3.1-2.6-4.7-4
		c0,0-0.1-0.1-0.1-0.1c0,0.1,0,0.1,0,0.2c0,2.1,0,4.1,0,6.2c0,0.2,0,0.3,0.3,0.3c3.6,0,7.1,0,10.7,0c0.3,0,0.3-0.1,0.3-0.3
		c0-2.1,0-4.2,0-6.2C40.8,553.8,40.8,553.7,40.8,553.6z M39.9,552.4c-3.2,0-6.3,0-9.5,0c1.6,1.3,3.2,2.7,4.7,4
		C36.8,555.1,38.3,553.8,39.9,552.4z"/>
                        <path fill='#FFFFFF' d="M39,498c-0.1-0.3-0.2-0.6-0.2-0.8c0,0,0-0.1-0.1-0.1c-0.8-1.9-3.3-3.7-6.2-2.7c-2.5,0.8-3.6,3.3-3.3,5.4
		c0,0.1,0,0.2,0,0.3c0.2,1.4,0.7,2.6,1.4,3.7c0,0.1,0.2,0.4,0.2,0.4c0.2,0.4,0.5,0.7,0.7,1.1c0.3,0.4,0.6,0.8,0.9,1.2
		c0.2,0.3,0.5,0.6,0.7,0.9c0.3,0.3,0.5,0.6,0.8,0.8c0.1,0.1,0.1,0.1,0.3,0c0.3-0.3,0.6-0.6,0.9-0.9c0.5-0.6,1-1.2,1.5-1.8
		c0.3-0.4,0.5-0.8,0.8-1.2c0.3-0.5,0.6-1,0.8-1.5c0.1-0.3,0.3-0.6,0.4-0.9c0.2-0.5,0.3-0.9,0.4-1.4c0.1-0.4,0.1-0.9,0.1-1.3
		C39.1,498.7,39.1,498.3,39,498z M37.9,499.5c0,0.3-0.1,0.6-0.2,0.9c-0.1,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.5,0.5-0.8,0.8
		c-0.2,0.1-0.4,0.3-0.6,0.4c-0.4,0.2-0.9,0.3-1.3,0.4c-0.1,0-0.2,0-0.3,0c-0.5,0-1-0.1-1.5-0.3c0,0-0.5-0.3-0.6-0.3
		c-0.4-0.2-0.7-0.6-1-0.9c-0.2-0.2-0.3-0.5-0.4-0.8c-0.2-0.5-0.3-1-0.3-1.5c0-0.4,0.1-0.8,0.2-1.2c0.2-0.5,0.5-1,0.9-1.4
		c0.3-0.3,0.7-0.6,1.1-0.8c0.4-0.2,0.7-0.3,1.1-0.3c0.4,0,0.8,0,1.2,0.1c0.5,0.1,0.9,0.3,1.3,0.5c0.3,0.2,0.5,0.4,0.8,0.7
		c0.2,0.3,0.4,0.6,0.6,0.9c0.1,0.3,0.2,0.6,0.3,0.9C37.9,498.9,37.9,499.2,37.9,499.5z"/>
                    </g>
                    <g id="textos">
                        <text transform="matrix(1 0 0 1 50.6318 357.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(0,26)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 377.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(26,51)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 397.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(51,75)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 417.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(75,100)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 433.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(100,user.goal.length)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 493.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(0,28)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 509.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(28,user.address.length)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 529.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 50.6318 559.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.email}</text>
                        <text transform="matrix(1 0 0 1 50.6318 589.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 280.6318 147.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courseName} / {user.courseSchool}</text>
                        <text transform="matrix(1 0 0 1 280.6318 167.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>Período - {user.courseEndYear}</text>
                        {/* <text transform="matrix(1 0 0 1 280.6318 737.6553)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'></text> */}
                        <text transform="matrix(1 0 0 1 280.6318 652.7178)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{(user.courses !== 'NOT_PRINT' )? user.courses:<></> }</text>
                        <text transform="matrix(1 0 0 1 280 395.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>} </text>
                        <text transform="matrix(1 0 0 1 280 400.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,38)}</text>
                        <text transform="matrix(1 0 0 1 280 415.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(38,75)}</text>
                        <text transform="matrix(1 0 0 1 280 435.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(75,user.companyName.length)}</text>
                        <text transform="matrix(1 0 0 1 279.6836 435.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyStartEnd  !== "NOT_PRINT"?  `Período: ${user.companyStartEnd}` :<></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 455.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 475.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription}`:<></>}</text>
                        <text transform="matrix(1 0 0 1 104.5471 158.209)" fill='#341716' fontFamily='MyriadPro-Bold'fontSize='58.4611px'>{user.name.charAt(0).toUpperCase()}</text>
                        <rect x="260.9" y="790" fill='#2DBEB7' width="100%" height="20" />
                        <text transform="matrix(1 0 0 1 298.4359 806.5256)" fill='#FFF' fontFamily='MyriadPro-Regular' fontSize='17.2529px '>Currículo Gerado pela Curvi</text>
                        {/* <g>
                            <rect x="274.9" y="790" width="20.6" height="20.6" />
                            <rect x="381.2" y="790" fill='#341716' width="20.6" height="20.6" />
                            <rect x="487.4" y="790" fill='#200F0F' width="20.6" height="20.6" />
                            <text transform="matrix(1 0 0 1 298.4359 806.5256)" fontFamily='MyriadPro-Regular' fontSize='17.2529px '>1B1E1F</text>
                            <text transform="matrix(1 0 0 1 405.9876 806.5256)" fontSize='17.2529px '>341716</text>
                            <text transform="matrix(1 0 0 1 520.0717 806.5256)" fontSize='17.2529px '>200F0F</text>
                        </g> */}
                    </g>
                </svg>

            </div>
        </div>
        </>
    )
}
export default EngResume;