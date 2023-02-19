import { motion } from "framer-motion";
import styled from 'styled-components';

const Step =styled.div`
    width: 300px;
height: 40vh;
    background: linear-gradient(rgb(233, 0, 156),rgb(65, 137, 254));
    padding: 10px;
    margin: 10px;
    text-align: center;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
  background-color: #383765;
  border-radius:10px;
`
export default function Animation() {
    return (
        <Step>
            <Title>👇Animation </Title>
            <Box
            transition={{type:'spring',  damping:10}} 
            initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1, rotateZ:180}}>
            </Box>
        </Step>
    );
}

