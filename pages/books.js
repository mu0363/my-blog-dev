import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Books = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box h='100vh'>
      <Flex justify='center' align='center' h='100%'>
        <motion.div
          style={{
            width: '100px',
            height: '100px',
            background: 'black',
            borderRadius: '10px',
          }}
          animate={{ scale: isOpen ? 2 : 1 }}
          onClick={() => setOpen(!isOpen)}
        />
      </Flex>
    </Box>
  );
};

export default Books;
