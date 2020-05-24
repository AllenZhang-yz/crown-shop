import React, { memo } from 'react';
import Directory from '../../components/Directory/Directory';
import './HomePage.styles.scss';

const HomePage: React.FC = memo(() => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
});

export default HomePage;
