import { motion } from "framer-motion";
import styled from 'styled-components';
import AniVariants from './components/AniVariants';
import AniGestures from './components/AniGestures';
import AniMotionValue from './components/AniMotionValue';
import AniScroll from './components/AniScroll';
import AniPath from './components/AniPath';
import { useState } from 'react';

const Title =styled(motion.h3)`
  color:white;
  text-align: left;
  top:0;
  margin: 0;
  position: fixed;
  padding: 18px;
  background-color:pink;
  height: 100px;
  width: 100%;
  z-index: 50;
  background-color:transparent;
font-size: 30px;

`

const Description =styled(motion.p)`
font-size: 25px;
color:rgb(221, 79, 79);
  display: inline;
`

const Wrapper = styled(motion.div)`
  width: 100%;
  margin-top: 150px;
  padding: 40px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
   
`
const Center =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const titleVari ={
  start:{opacity:0},
  end:{opacity:1,
    transition:{
      type:'spring',
      bounce:0.6,
       duration:1,
       delay:0.5,
       delayChildren:1,
       staggerChildren:0.5,
    },
}}
const childrenVari={
    start:{
        opacity:0,
        y:25,
    },
    end:{
        opacity:1,
        y:0,
    }
}

const BtnMove =styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    transition: all 200ms ease-in-out;
    &:hover{
      background-color:white;
      color: #060606;
      transform: scale(1.1);
    }
    z-index: 50;

`
const Step =styled(motion.div)`
width: 70vw;
height: 40vh;
padding: 15px;
background-color: black;
margin: 100px;
border-top: 1px double red;
border-bottom: 1px double red;
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 20px;
position: relative;
overflow: hidden;
min-width: 500px;

`

const Box = styled(motion.div)`
  width: 70%;
  min-width: 300px;
  max-width: 900px;
  height: 100%;
  padding: 5px;
  margin: 0px 15px;
  border-radius:20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const slideVari = {
  init:(isBack:boolean)=>({
    x:isBack?-500:500,
    opacity:0.5,
    scale:0.5
  }),
  ani:{
    x:0,
    opacity:1,
    scale:1
  },
  exit:(isBack:boolean)=>({
    x:isBack?500:-500,
    opacity:0.5,
    scale:0.5,
  }),
}
const ImgProject =styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
transition: all 300ms ease-in-out;
`
const ImgDesc=styled(motion.p)`
 color: white;
  position: relative;
 position: absolute;
 font-size: 40px;
 display: flex;
 flex-direction: column;
 text-align: left;
 align-items: center;
 justify-content: center;
 top: 10px;
 width: 100%;
 height: 90%;
 opacity: 0;
transition: all 300ms ease-in-out;
`
const ImgContainer =styled(motion.div)`
  &:hover{
    ${ImgDesc}{
      opacity:1;
    }
    ${ImgProject}{
      opacity: 0.2;
      scale:0.8;

    }
  }
  position: relative;
`
const Preview =styled(motion.div)`
  position:relative;
  width:350px;
  height:90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  opacity: 0.7;
`

export default  function App() {
    const [item, setItem] = useState(1);
    const [isBack, setIsBack] = useState(false);
    const moveToPrev =async()=>{
      setIsBack(true);
      setItem((prev)=>(prev!==1?--prev:prev));
    };
    const moveToNext =async()=>{
      setIsBack(false);
      setItem((prev)=>(prev!==3?++prev:prev));
    };

  return (
    <Center>
        <Title 
      variants={titleVari}
      initial={'start'}
      animate={'end'}
      >Hi 👋
        <br/>This page is made of
        <Description variants={childrenVari}><br/>React</Description>
        <Description variants={childrenVari}><br/>& framer-motion</Description>
        <Description variants={childrenVari}><br/>& styled-components</Description>
        <Description variants={childrenVari}><br/>I Hope you to enjoy !🥰</Description>
        </Title>
      <Wrapper >
          <AniPath/>
          <AniVariants />
          <AniScroll/>
          <AniMotionValue/>
          <AniGestures/>
            {/* 슬라이드 박스 */}
            <Step>
              <BtnMove onClick={moveToPrev}>Prev</BtnMove>
              <Box 
                custom={isBack}
                variants={slideVari}
                initial={'init'}
                animate={'ani'}
                exit={'exit'}
                key={item}
                transition={{duration:1}}
              >
                <ImgContainer >
                {item===1&&
                <>
                  <ImgProject src='cryptoImage.png' >
                  </ImgProject>
                  <ImgDesc drag>👋 This is CRYPTO APP<br/> + Data visualization</ImgDesc>
                </>}
                
                {item===2&&
                <>
                  <ImgProject src='trelloImage.png'>
                  </ImgProject>
                  <ImgDesc drag >👋 This is Trello APP<br/> + react beautiful dnd</ImgDesc>
                </>}
                {item===3&&
                <Preview>
                 <motion.p style={{color:'white',fontSize:'22px',position:'absolute',width:'100%'}} drag dragSnapToOrigin> 🔥 Coming Soon 🔥</motion.p>
                  <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 384 512">
                  <motion.path 
                  transition={{
                   pathLength:{delay:1,duration:2},
                  fill:{delay:1.5, duration:3},
                  }}
                  initial={{
                      pathLength:0,
                      rotate:(5),
                      fill:'rgba(0, 0, 0, 0.144)',
                  }}
                  animate={{
                      pathLength:1,
                      fill:'rgb(196, 9, 9)',
                  }}
                  stroke='red'
                  strokeWidth={3}
                  fill='black'
                  d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z"/>
                  </motion.svg>
                </Preview>
                }
                </ImgContainer>
              </Box>
              <BtnMove onClick={moveToNext}>Next</BtnMove>
            </Step>
      </Wrapper>
    </Center>
    );
}
