import { useState, useEffect, createRef } from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import useSound from 'use-sound';
import lottie from 'lottie-web';
import Pleading from '../animation/Pleading.json';

const PleadingFace = () => {
  const [playbackRate, setPlaybackRate] = useState(1.1);
  const [play] = useSound('./cartoon-7.mp3', {
    playbackRate,
    volume: 0.1,
    sprite: {
      bounce: [0, 700],
      yeah: [1000, 3590],
    },
  });

  const animation = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: Pleading,
    });
  }, []);

  const changeAnimationState = (e) => {
    e.preventDefault();
    lottie.destroy();
    lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: Pleading,
    });
    lottie.stop();
    lottie.play();
    setPlaybackRate(playbackRate + 0.1);
    play({ id: 'bounce' });
  };

  return (
    <Box h='100vh'>
      <Flex justify='center' align='center' h='100vh'>
        {playbackRate > 3 ? (
          <Image
            fontSize='9xl'
            onClick={() => {
              setPlaybackRate(1);
              play({ id: 'yeah' });
            }}
            src='./yoshie.jpg'
          />
        ) : (
          <Box
            as='button'
            outline='none'
            style={{ width: '200px', height: '200px' }}
            ref={animation}
            onClick={changeAnimationState}
          />
        )}
      </Flex>
    </Box>
  );
};

export default PleadingFace;
