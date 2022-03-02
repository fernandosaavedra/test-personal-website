import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="El contenido que buscas no se encuentra aquí." />
      </Helmet>
      <h1 data-testid="heading">Página no encontrada</h1>
      <p>Retornar al <Link to="/">home</Link>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
