import React from 'react';
import './style.scss';
import { withTranslation } from 'react-i18next';

const Header = ({ t }) => (
  <>
    <header>
      <h1>{ t('title') }</h1>
      <a href="register">{ t('register') }</a>
    </header>
    <div>
      <h2>{ t('subtitle') }</h2>
    </div>
  </>
);

export default withTranslation()(Header);