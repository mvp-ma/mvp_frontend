import React from 'react';

import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

const Home = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    Home
  </PageTemplate>
);

export default Home;
