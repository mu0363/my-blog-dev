import { useEffect, createRef } from 'react';
import { useColorMode, Box, Tooltip } from '@chakra-ui/react';
import useSound from 'use-sound';
import lottie from 'lottie-web';

import SunData from '../animation/Sun.json';
import MoonData from '../animation/Moon.json';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound('./lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const animation = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: colorMode === 'light' ? SunData : MoonData,
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
      animationData: colorMode === 'light' ? SunData : MoonData,
    });
    lottie.stop();
    lottie.play();
    toggleColorMode();
    colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' });
  };

  return (
    <Box
      as='button'
      outline='none'
      style={{ width: '25px', height: '25px' }}
      ref={animation}
      onClick={changeAnimationState}
    />
  );
};

export default ThemeToggle;
