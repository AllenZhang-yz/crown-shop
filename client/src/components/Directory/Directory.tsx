import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { IDirectory } from '../../redux/directory/directoryReducer';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.style.scss';

const Directory: React.FC = memo(() => {
  const directory = useSelector<RootState, IDirectory[]>(
    (state) => state.directory
  );
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...restProps }) => (
        <MenuItem key={id} {...restProps} />
      ))}
    </div>
  );
});

export default Directory;
