import React from 'react';

import { Link } from 'react-router-dom';

import returnIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
}: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={returnIcon} alt="" />
        </Link>
        <img src={logoImg} alt="" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
