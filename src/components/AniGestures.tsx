import { motion } from "framer-motion";
import { useRef } from 'react';
import styled from 'styled-components';
 
const Step =styled.div`
width: 300px;
/* background: linear-gradient(rgb(233, 0, 156),rgb(65, 137, 254)); */
height: 40vh;
border-radius: 20px;
border: 1px solid pink;

margin: 10px;
padding: 10px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
border: 1px solid pink;
  margin: 10px;
  background-color: #090909;
  border-radius:30px;
`
const GesturesVari={
    hover:{scale:1.1,rotateZ:90},
    click:{borderRadius:'100px', 
           scale:0.9, 
           backgroundColor:'rgb(84, 160, 255)'
           },
    drag:{backgroundColor:'rgb(254, 202, 87)'}
}
export default function AniGestures() {
    const StepRef = useRef<HTMLDivElement>(null);
    return (
        <Step ref={StepRef}>
        <Title>👇Gestures<br/>Click OR Drag Me🙂</Title>
             <Box 
             drag
             dragSnapToOrigin
             dragConstraints={StepRef}
             //  dragElastic={0.5}
             variants={GesturesVari} 
             whileHover={'hover'} 
             whileDrag={'drag'}
             whileTap={'click'}/>
        </Step>
        
    );
}

