import React, { Suspense } from 'react';
import { Header, Profile } from './components';
import data from './mock-data';

export default () => {
  const idx = Math.floor(Math.random() * data.length)
  const profile = data[idx];
  return (
    <Suspense fallback="loading...">
      <Header />
      <Profile key = { profile.id } { ...profile }/>
    </Suspense>
  );
}
