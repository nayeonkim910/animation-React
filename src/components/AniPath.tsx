import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef,useEffect } from 'react';
import styled from 'styled-components';
 
const Step =styled(motion.div)`
width: 300px;
height: 40vh;
padding: 10px;
text-align: center;
display: flex;
border: 1px solid pink;
flex-direction: column;
justify-content: center;
border-radius: 20px;
align-items: center;
margin: 10px;
position: relative;
overflow: hidden;
`
 
const Title =styled.h3`
    position: absolute;
    z-index: 50;
    color: #ffffff;
`
const Svg = styled(motion.svg)`
    width: 200px;
    height: 200px;
`
export default function AniPath() {
    const XValue = useMotionValue(0);
    const rotateChanged = useTransform(XValue,[-150,0,150],[-180,0,180]);
    const backColorChanged = useTransform(XValue,[-50,50],
         ['rgb(192, 222, 140)','rgb(29, 153, 206)']
         );
    return (
        <Step>
            <Title>Path</Title>
                 <Svg
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 448 512">

                 <motion.path 
                    transition={{
                     pathLength:{duration:3},
                    fill:{delay:1, duration:2},
                    }}
                    initial={{
                        pathLength:0,
                        fill:'rgba(0, 0, 0, 0.144)',
                    }}
                    animate={{
                        pathLength:1,
                        fill:'rgb(244, 246, 255)',
                    }}

                 stroke='white'
                 strokeWidth={2}
                 fill='transparent'
                 d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"/>
                 </Svg>
        </Step>
        
    );
}

