import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef,useEffect } from 'react';
import styled from 'styled-components';
 
const Step =styled(motion.div)`
width: 300px;
height: 40vh;
padding: 10px;
text-align: center;
display: flex;
margin: 10px;
flex-direction: column;
justify-content: center;
border-radius: 20px;
align-items: center;
border: 1px solid pink;
position: relative;
overflow: hidden;
`
 
const Title =styled.h3`
    position: absolute;
    z-index: 50;
    color: #ffffff;
`
const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 10px;
border: 1px solid pink;
  background-color: #000000;
  border-radius:20px;
`
export default function AniMotionValue() {
    const XValue = useMotionValue(0);
    const rotateChanged = useTransform(XValue,[-150,0,150],[-180,0,180]);
    const backColorChanged = useTransform(XValue,[-50,0,50],
         ['rgb(192, 222, 140)','rgb(0,0,0)','rgb(29, 153, 206)']
         );
    return (
        <Step 
        style={{background:backColorChanged}}
        >
            <Title>MotionValue<br/>& useTransform<br/>👈 Drag 👉</Title>
                 <Box 
                 style={{x:XValue, rotate:rotateChanged }}
                 dragSnapToOrigin
                 drag
                 />
        </Step>
        
    );
}

