import React, { memo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './MenuItem.styles.scss';

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<IMenuItemProps> = memo(
  ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();
    return (
      <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match?.url}${linkUrl}`)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
);

export default MenuItem;
