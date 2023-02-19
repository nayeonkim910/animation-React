import { motion } from "framer-motion";
import styled from 'styled-components';
import AniVariants from './components/AniVariants';
import AniGestures from './components/AniGestures';
import AniMotionValue from './components/AniMotionValue';
import AniScroll from './components/AniScroll';
import AniPath from './components/AniPath';

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
font-size: 40px;

`
const Description =styled(motion.p)`
font-size: 25px;
color:rgb(243, 224, 224);
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
export default  function App() {
  return (
    <Center>
      <Title 
      variants={titleVari}
      initial={'start'}
      animate={'end'}
      >Hi 👋
        <br/>This page is made of
        <Description variants={childrenVari}><br/>React</Description>
        <Description variants={childrenVari}>& framer-motion</Description>
        <Description variants={childrenVari}>& styled-components</Description>
        <Description variants={childrenVari}><br/>I Hope you to enjoy !🥰</Description>
        </Title>
      <Wrapper >
          <AniPath/>
          <AniVariants />
          <AniScroll/>
          <AniMotionValue/>
          <AniGestures/>
      </Wrapper>
    </Center>
    );
}
