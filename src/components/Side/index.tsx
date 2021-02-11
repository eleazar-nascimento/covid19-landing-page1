import React from 'react';

import { Container, Icon, ButtonContainer, LinksContainer, Text } from './styles';
import logo from '../../assets/logo.svg';

const Side: React.FC = () => {
  return (
    <Container>
      <ButtonContainer>
      <Icon>
        <img src={logo} alt="Vírus ícone" width={40}/>
        <Text>COVID-19</Text>
      </Icon>
        <LinksContainer>Overview</LinksContainer>
        <LinksContainer>Symptoms</LinksContainer>
        <LinksContainer>Prevention</LinksContainer>             
        <LinksContainer>Treatment</LinksContainer>             
        <ButtonContainer>
          <LinksContainer>Facebook</LinksContainer>             
          <LinksContainer>Youtube</LinksContainer>
          <LinksContainer>Vimel</LinksContainer>         
          <LinksContainer>Twitter</LinksContainer>         
        </ButtonContainer>          
      </ButtonContainer>
      <Text>2020 @ All rights reserved by pixelspark.co</Text>
    </Container>
  );
};

export default Side;
