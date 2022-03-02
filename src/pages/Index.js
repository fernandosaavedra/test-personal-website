import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Blog personal de Fernando Saavedra que habla de tecnología, programación, blockchain, etc."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Acerca de este sitio</Link></h2>
          <p>
            Bienvenido a mi blog personal, aquí escribiré algunas líneas acerca de temas de
            tecnología, programación, machine learning, blockchain y otras cosas.
          </p>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis nunc in congue
        tincidunt. Suspendisse rutrum et ex vitae mattis. Sed mattis sapien lectus, eu consectetur
        nisi auctor in. Cras eget ligula vestibulum, condimentum tortor id, volutpat dolor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus non leo ac libero consequat feugiat. Vestibulum semper commodo est, imperdiet
        blandit magna bibendum ac. Donec convallis vel erat nec scelerisque. Nullam ornare vel
        sapien quis vulputate. Duis tristique ex a magna fringilla, sed vulputate turpis semper.
      </p>
    </article>
  </Main>
);

export default Index;
