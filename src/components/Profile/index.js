import React from 'react';
import './style.scss';
import { withTranslation } from 'react-i18next';

const Profile = ({ t, name, image, url }) => (
  <main>
    <div>
      <div className="image-container">
        <img src={ image } alt = { name } />
      </div>
      <h3>{ name }</h3>
      <a href={ url }>{ url }</a>
      <div className="share-container">
        <div>
          { t('share.message') }
        </div>
      </div>
    </div>
  </main>
);

export default withTranslation()(Profile);