import { useEffect, createRef } from 'react';
import { useColorMode, Button, Box } from '@chakra-ui/react';
import lottie from 'lottie-web';
import SunData from '../animation/Sun.json';
import MoonData from '../animation/Moon.json';

const SunButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: MoonData,
    });

    return () => anim.destroy();
  }, []);

  const changeAnimationState = () => {
    lottie.play();
    toggleColorMode();
  };

  return (
    <>
      <Box
        as='button'
        outline='none'
        variant='ghost'
        style={{ width: '30px', height: '30px' }}
        ref={animation}
        onClick={changeAnimationState}
      />
    </>
  );
};

export default SunButton;
