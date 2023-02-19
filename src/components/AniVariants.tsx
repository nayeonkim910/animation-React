import { motion } from "framer-motion";
import styled from 'styled-components';


const Step =styled.div`
    width: 300px;
    height: 40vh;
    padding: 10px;
    background: linear-gradient(rgb(233, 0, 156),rgb(65, 137, 254));
    margin: 10px;
    text-align: center;
    border-radius: 20px;
    display: flex;
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
  background-color: #070707;
  border-radius:30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
const Circle =styled(motion.div)`
    width: 55px;
    height: 55px;
    margin: 5px;
    border-radius: 100%;
    z-index: 9;
    background-color: #f3bff0;
`
const Vari ={
    start:{opacity:0, scale:0.5},
    end:{opacity:1,scale:1, 
        transition:{
            type:'spring',
            bounce:0.6,
            delay:4.8,
            duration:2,
            delayChildren:5.3,
            staggerChildren:0.3,
        }},
}
const CircleVari={
    start:{
        opacity:0,
        y:25,
    },
    end:{
        opacity:1,
        y:0,
    }
}
export default function AniVariants() {
    return (
        <Step>
            <Title>👇Variants</Title>
            <Box 
            variants={Vari} 
            initial='start' 
            animate='end' 
            >
                <Circle variants={CircleVari}/>
                <Circle variants={CircleVari}/>
                <Circle variants={CircleVari}/>
                <Circle variants={CircleVari}/>
            </Box>
        
        </Step>
    );
}

