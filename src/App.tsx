import { motion } from "framer-motion";
import styled from 'styled-components';
import Animation from './components/Animation';
import AniVariants from './components/AniVariants';
import AniGestures from './components/AniGestures';
import AniMotionValue from './components/AniMotionValue';
import AniScroll from './components/AniScroll';
import AniPath from './components/AniPath';

const Title =styled.h3`
  color:black;
  text-align: center;
  top:0;
  margin: 0;
  position: fixed;
  padding: 0px;
  background-color: #22202060;
  z-index: 5;
  font-size: 40px;
`

const Wrapper = styled(motion.div)`
  width: 100%;
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
export default  function App() {
  return (
    <Center>
      <Wrapper>
          <AniVariants/>
          <AniPath/>
          <AniScroll/>
          <AniMotionValue/>
          <AniGestures/>
      </Wrapper>
    </Center>
    );
}
