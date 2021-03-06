import React from 'react';
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";

const Styles = styled.div`

.container {
    ${isMobile ? 
        `
        width: 13vh;
        height: 13vh;
        margin: 0.7vh;
        border-radius: 4.5vh;
        `
        :
        `
        width: 10vw;
        height: 10vw;
        margin: 1vw;
        border-radius: 3.3vw;
        `
    }
  display: grid;
  overflow: wrap;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  mouseEvents: none;
  
}

.containerImage {
    ${isMobile ? 
        `
        width: 7vh;
        height: 7vh;
        `
        :
        `
        width: 5.33vw;
        height: 5.33vw;
        `
    }
  mouseEvents: none;
}

`;


export const ImageBox = (props) => {

    const { ref, inView } = useInView({});
    const containerRef = useRef(null);
    
    
    return(
        
        <Styles>
            <motion.div 
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                }}
                transition={{
                    delay: 0.5+props.delay,
                    duration: 0.35,
                }}
                ref = {containerRef}
                drag
                dragConstraints = {containerRef}
                className="container"
            >
                <a href={props.link} draggable="false"> 
                    <img ref={ref} src={props.image} className="containerImage" draggable="false" alt="social media contact type icon"/>
                </a>
            </motion.div>
        </Styles>

    )
}