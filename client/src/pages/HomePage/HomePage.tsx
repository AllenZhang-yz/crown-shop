import React, { memo } from 'react';
import Directory from '../../components/Directory/Directory';
// import './HomePage.styles.scss';
import { HomePageContainer } from './HomePage.styles';

const HomePage: React.FC = memo(() => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
});

export default HomePage;
