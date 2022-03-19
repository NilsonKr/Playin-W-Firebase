import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { getVideos } from "../../storage/storage/videos";
//UI
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Container, Button } from "@nextui-org/react";
import { MainContainer, StyledVideo } from "./Main.style";
import TagsRow from "../TagsRow";

const videosDefault = [
  "https://firebasestorage.googleapis.com/v0/b/playing-project-14960.appspot.com/o/videos%2F3Qqcqfb2QzchgvjgpXm1mLyz02o2%2Ftwice-the-feels-m-v.mp4?alt=media&token=b18e4d61-7caf-4b3f-b3eb-1e1782741e07",
  "/assets/sample.mp4",
  "/assets/sample2.mp4",
  "/assets/sample.mp4",
];

export const Main = () => {
  const { currentUser } = useAuth();
  const [videos, setVideos] = useState<any[]>(videosDefault);
  const sliderRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number>(0);

  const listVideos = async () => {
    const videos = await getVideos(currentUser!.uid);
    setVideos(videos);
  };

  useEffect(() => {
    if (currentUser) listVideos();
  }, [currentUser]);

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
      <TagsRow />
    </>
  );
};
