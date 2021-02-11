import React from 'react';
import { Button } from '..';

import { Container, TextContainer, BodyContainer, Description, Title, ImageContainer } from './styles';
import BackgroundImage from '../../assets/background-image1.svg';

const Body: React.FC = () => {
  return (
    <Container>
      <BodyContainer>
        <Title>COVID-19 Alert</Title>
        <TextContainer>Stay At Home Quarantine <br/> To Stop Corona Virus</TextContainer>
        <Description>There Is No Specific Medicine To Prevent Or Treat Coronavirus <br/><br/> Disease (COVID-19). People May Need Supportive Care To.</Description>
        <Button label='Let Us Help'/>
      </BodyContainer>
      <img src={BackgroundImage} alt="Covid 19" width={880} height={950}/>
    </Container>
  );
};

export default Body;
