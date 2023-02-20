import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef,useEffect } from 'react';
import styled from 'styled-components';
 
const Step =styled(motion.div)`
width: 70vw;
height: 40vh;
padding: 10px;
background-color: black;
margin: 100px;
border-top: 1px double red;
border-bottom: 1px double red;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
position: relative;
/* overflow: hidden; */
min-width: 300px;

`
 
const Title =styled.h3`
    position: absolute;
    z-index: 50;
    font-size: 25px;
    color: #ffffff;
`
const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 10px;
  background-color: #62a56f;
  border-radius:20px;
`
const ScrollVari={
    hover:{ backgroundColor:'rgb(63, 86, 216)'},
}
export default function AniScroll() {
    const {scrollYProgress}= useScroll();
    const ScaleChanged = useTransform(scrollYProgress,[0,1],[0.7,2]);
    return (
        <Step>
            <Title>Scroll OR Drag</Title>
                 <Box 
                 style={{y:scrollYProgress, scale:ScaleChanged }}
                 dragSnapToOrigin
                 drag 
                 whileTap={{borderRadius:'100px', backgroundColor:'rgb(207, 36, 36)', transition:{duration:0.5}}}
                 variants={ScrollVari}
                 whileHover={'hover'}
                 />
        </Step>
        
    );
}

