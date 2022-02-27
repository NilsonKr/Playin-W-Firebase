import { useState, useRef } from "react";
//UI
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Container, Button } from "@nextui-org/react";
import { MainContainer, StyledVideo } from "./Main.style";

const videos = [
  "/assets/sample2.mp4",
  "/assets/sample.mp4",
  "/assets/sample2.mp4",
  "/assets/sample.mp4",
];

export const Main = () => {
  const sliderRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number>(0);

  const handleNext = () => {
    const videos = sliderRef.current!
      .childNodes as NodeListOf<HTMLVideoElement>;
    const next = selected + 1;

    videos.forEach((video) => {
      video.style.transform = `translateX(-${next * 460}px)`;
    });

    setSelected(next);
  };

  const handlePrev = () => {
    const videos = sliderRef.current!
      .childNodes as NodeListOf<HTMLVideoElement>;
    const next = selected - 1;

    videos.forEach((video) => {
      video.style.transform = `translateX(-${next * 460}px)`;
    });

    setSelected(next);
  };

  return (
    <>
      <Container display="flex" justify="center">
        <Button
          shadow
          auto
          color="gradient"
          disabled={selected === 0}
          onClick={handlePrev}
          icon={<BiChevronLeft size="30px" color="white" />}
          css={{ marginRight: 10 }}
        />
        <Button
          shadow
          auto
          color="gradient"
          disabled={selected === videos.length - 1}
          onClick={handleNext}
          icon={<BiChevronRight size="30px" color="white" />}
        />
      </Container>
      <MainContainer ref={sliderRef}>
        {videos.map((src, index) => (
          <StyledVideo
            key={index}
            isSelected={index === selected}
            src={src}
            controls
          />
        ))}
      </MainContainer>
    </>
  );
};
