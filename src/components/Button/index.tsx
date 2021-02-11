import React from 'react';

import { Container, TextContainer } from './styles';

interface IButtonProps {
  color?: string;
  label?: string;
}

const Button: React.FC<IButtonProps> = ({ color, label }) => {
  return (
    <Container color={color} >
      <TextContainer>
        {label}
      </TextContainer>
    </Container>
  );
};

export default Button;
