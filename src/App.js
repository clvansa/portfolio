import './App.css';
import { useRef, useState, useEffect } from 'react';
import Header from './component/Header';
import styled from 'styled-components';
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';
import Timeline from './component/Timeline';
import Swiper from './component/Swiper';
import Contact from './component/Contact';
import counterpart from "counterpart";
import Button from "./component/Button";
import Translate from "react-translate-component";
import en from './utils/lang/en'
import de from './utils/lang/de'
import CircularProgress from '@material-ui/core/CircularProgress';
import Loading from './component/Loading'




counterpart.registerTranslations("en", en);
counterpart.registerTranslations("de", de);

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const skillsRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getLang = localStorage.getItem('lang');
    if (getLang) {
      counterpart.setLocale(getLang)
    } else {
      localStorage.setItem('lang', 'en')
      counterpart.setLocale('en')

    }
  }, [])



  useEffect(() => {
    const timeOut = setInterval(() => {
      setLoading(false)
    }, 2000)

    return () => { clearInterval(timeOut) }
  }, [])

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loading />
      </div>
    )
  }


  return (
    <div className="App">
      {open && (
        <Popup>
          <TextAboutMe>
            <Translate content="about.popup" />

          </TextAboutMe>
          <Button
            onClick={() => setOpen(false)}
            style={{ textAlign: "center" }}
          >
            Close
          </Button>
        </Popup>
      )}
      <TopSide id="home" ref={homeRef} >
        <Header homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} projectRef={projectRef} />
        <PageTitle >Majd</PageTitle>
        <ContainerInner>
          <ContainerInnerTop>
            <div id="about" ref={aboutRef}>
              <AboutMe setOpen={setOpen} />
            </div>
            <Title id="skills" ref={skillsRef}>Skills</Title>
            <Skills />
          </ContainerInnerTop>
          <ContainerInnerBottom>

            <Center>
              <Title>
                <Translate content="qualification.title" />
              </Title>
              <Timeline />
            </Center>
            <Bottom>
              <Title id="project" ref={projectRef} style={{ color: "#2b2a30" }}>
                <Translate content="project.title" />
              </Title>
              <SwiperConainer >

                <Swiper />
              </SwiperConainer>
            </Bottom>
            <div id="contact" ref={contactRef}>
              <Contact />
            </div>
          </ContainerInnerBottom>
        </ContainerInner>
      </TopSide>
      <CenterSide></CenterSide>
      <BottomSide></BottomSide>

    </div>
  );
}

export default App;


const TopSide = styled.div`
  min-height: 70vh;
  font-family: 'Poppins';
  color:#ffffff;
  margin: auto;
  &::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: -50%;
  left: -50%; */
  z-index: -1;
  /* background: url("https://i.ibb.co/MDmJfY1/office-865091.jpg") ; */
  background: url("/office.jpg") ;
  background-repeat: no-repeat;
  background-position: center center ;
  background-size: cover;
  /* transform: rotate(180deg); */

}
  
`

const PageTitle = styled.h1`
  padding-bottom: 20px;
  padding-top:10px;
  text-align: center;
  color:#ffffff;
  font-size: 3rem;
  font-family: "WindSong", cursive;

`
const CenterSide = styled.div`
  background-color: #8d8583;
  background-image: url("https://www.pngkey.com/png/full/27-270243_ceiling.png") !important;
  min-height: 120vh;

`
const BottomSide = styled.div`
  background-color: #2b2a30;
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://www.pngkey.com/png/full/27-270243_ceiling.png");
  display:flex;
  align-items: flex-end;
  justify-content: center;

`


const ContainerInner = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%);
  width: 70vw;
  flex-direction: column;
  display: flex;
  /* margin: auto; */
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  /* border-radius: 10px; */
  /* box-shadow:   2px 2px 2.5px 6px rgba(0, 0, 0, 0.1),
                2px -2px 8px 3px rgba(0, 0, 0, 0.3),
                2px 2px 5px 0px rgba(0, 0, 0, 0.3),
                0px 0px 5px 0px rgba(0, 0, 0, 0.3); */
                
 border-radius:3px;
border-top: 1px solid rgba(255, 255, 255,0.1);
border-bottom: 1px solid rgba(255, 255, 255,0.1);
box-shadow:  -1px 20px 38px rgba(0,0,0,0.30),
               -1px -10px 15px  rgba(0,0,0,0.22),
               2px -1px 5px  rgba(255,255,255,0.4),
               -3px -3px 50px  rgba(0,0,0,0.4),
               3px 3px 50px  rgba(0,0,0,0.4);
 
  
  
  @media (max-width: 450px){
    width:90vw;
  }
`

const Center = styled.div`
  position: relative;
  justify-items: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  padding-bottom: 150px;
  overflow: hidden;

  &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: -50px;
    width: 100px;
    height: 100px;
    border-top-left-radius: 50px; 
    border-top-right-radius: 50px; 
    transform: translate(-50%);
    border-radius: 50%;
    background-color: #b1afb0;

  }

  @media (max-width: 768px){
    width: 100%;
  } 

  @media (max-width: 450px){
    width: 90%;
  } 
`

const Bottom = styled.div`
  background-color:#b1afb0;
  min-height: 65vh;
  width: 100%;
  overflow: hidden;
  position: relative;


  &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: 100px;
    height: 50px;
    transform: translate(-50%);
    background-color: #2b2a30;
     border-top-left-radius: 50px; 
    border-top-right-radius: 50px; 
    border:  3px solid rgba(0, 0, 0, 1);
    box-shadow: inset 0px 4px 5px  rgba(0, 0, 0, 1);
    border-bottom: 0;
    background-color: #2b2a30;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-border-before-color:black;
   
    @media (max-width: 450px ){
  
  }

  }

`

const ContainerInnerTop = styled.div`
    background-image: linear-gradient(180deg, transparent,35%, #2b2a30 45%);
    width: 100%;

`
const ContainerInnerBottom = styled.div`
  background-color: #2b2a30;
`

const Title = styled.h2`
text-align: center;
padding: 20px 0;


`


const SwiperConainer = styled.div`
  width: 500px;
  height: 300px;
  margin: auto; 
  border-radius: 5px ;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px ){
    width: fit-content;
  }

  @media (max-width: 450px ){
    /* width: fit-content; */
  }
`

const Popup = styled.div`
  width: 500px;
  height: 500;
  position: absolute;
  background-color: #2b2a30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 650px) {
    padding:  20px;
    width: 300px;
  }

`;


const TextAboutMe = styled.p`
  margin-top: 20px;
  /* max-width: 350px; */
  width: 400px;
  padding-left: 5px;
  text-align: left;
  color: white;

  @media (max-width: 650px) {
    padding-left: 20px;
    width: fit-content;
  }

  @media (max-width: 450px) {
    padding: 0 20px;
    width: fit-content;
  }
`;
