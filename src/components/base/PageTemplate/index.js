import React from 'react';

import {Container} from '@material-ui/core';

import './style.scss';

const PageTemplate = props => {
  const {header, footer, children, className} = props;
  return (
    <Container disableGutters className={`page-template ${className || ''}`}>
      {header}
      <main className="main">
        {children}
      </main>
      {footer}
    </Container>
  );
};

export default PageTemplate;
