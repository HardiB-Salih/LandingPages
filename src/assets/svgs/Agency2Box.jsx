import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Agency2Box = ({ size }) => {
  const bgColor = useColorModeValue('#ffffff', '#1A202C');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 77 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="77" height="52" fill="#6874DD" />
      <rect y="35.4546" width="33" height="16.5455" fill={bgColor} />
      <rect x="44" width="33" height="16.5455" fill={bgColor} />
    </svg>
  );
};

export default Agency2Box;
