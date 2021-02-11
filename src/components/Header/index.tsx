import React from 'react';
import { Container, Icon, Text, LinksContainer, ButtonContainer } from './styles';

import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Icon>
        <img src={logo} alt="Vírus ícone" width={40}/>
        <Text>COVID-19</Text>
      </Icon>
      <ButtonContainer>
        <LinksContainer>Overview</LinksContainer>
        <LinksContainer>Contagion</LinksContainer>
        <LinksContainer>Symptoms</LinksContainer>
        <LinksContainer>Prevention</LinksContainer>        
        <LinksContainer>Contact</LinksContainer>        
      </ButtonContainer>
    </Container>
  );
};

export default Header;
