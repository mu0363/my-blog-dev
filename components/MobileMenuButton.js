import { VStack, Text } from '@chakra-ui/react';

const MobileMenuButton = ({ label, icon, ...rest }) => {
  return (
    <VStack as='button' outline='none' {...rest}>
      {icon}
      <Text fontSize='xs' fontWeight='500'>
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;
