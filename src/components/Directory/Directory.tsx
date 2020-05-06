import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { sections as originalData } from '../../Directory.data';
import './Directory.style.scss';

interface ISection {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const Directory: React.FC = () => {
  const [sections, setSections] = useState<ISection[]>(originalData);
  return (
    <div className="directory-menu">
      {sections.map(({ id, imageUrl, title, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
