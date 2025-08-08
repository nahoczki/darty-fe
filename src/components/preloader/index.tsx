import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Preloader = () => {
  let preLoaderRef: HTMLDivElement | null;
  const lettersRef = useRef<HTMLHeadingElement>(null);

  const fonts = [
    // Sans-serif (modern, clean)
    "'Arial', sans-serif",
    "'Helvetica', sans-serif",

    // Serif (traditional, elegant)
    "'Times New Roman', serif",
    "'Georgia', serif",
    "'Palatino Linotype', serif",

    // Cursive (handwritten, stylized)
    "'Brush Script MT', cursive",
    "'Lucida Handwriting', cursive",

    // Fantasy (decorative)
    "'Copperplate', fantasy",
    "'Papyrus', fantasy",
  ];

  const dismissLoader = () => {
    gsap
      .to(preLoaderRef, { y: "-100vh", duration: 1.25, ease: "power4.out" })
      .delay(1);
  };

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const startFontEffect = () => {
    if (lettersRef.current) {
      console.log(lettersRef.current.children);
      setInterval(() => {
        if (lettersRef.current) {
          for (const item of lettersRef.current.children) {
            gsap.to(item, {
              fontFamily: fonts[getRandomInt(fonts.length)],
              ease: "power3.out",
            });
          }
        }
      }, 100);
    }
  };

  useEffect(() => {
    startFontEffect();
  }, []);

  useLayoutEffect(() => {
    // window.addEventListener("load", dismissLoader);
    return () => {
      window.document.body.style.overflow = "unset";
      window.removeEventListener("load", dismissLoader);
    };
  }, []);

  const Wrapper = styled.div`
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: #f0ead6;
    z-index: 100;
  `;

  const Inner = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.4);
    & > h1 {
      font-size: 500px;
    }
  `;

  const InputWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    z-index: 1000;
  `;

  return (
    <Wrapper ref={(e) => void (preLoaderRef = e)}>
      <InputWrapper>
        <input />
      </InputWrapper>
      <Inner>
        <h1 ref={lettersRef}>
          <span>H</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
        </h1>
        <h4>Click here.</h4>
      </Inner>
    </Wrapper>
  );
};

export default Preloader;
