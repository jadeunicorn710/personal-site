import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Portfolio/PortfolioCell';
import data from '../data/portfolio';

const Portfolio = () => (
  <Main
    title="Portfolio"
    description="Learn about Yunlin Qi's portfolio."
  >
    <article className="post" id="portfolio">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/portfolio">Portfolio</Link></h2>
          {/* <p>Another side of me - as a licensed <a href="https://www.seaoc.org/page/whatisase#:~:text=Structural%20Engineers%20create%20drawings%20and,order%20to%20practice%20Structural%20Engineering.">structural engineer</a>, who
            consistently delivers cool building designs and takes pride in safety, quality,
            and efficiency. Office, hotel, condo, retail, parking, university, healthcare,
            all you could possibly imagine that are closely related to our daily lives,
            we designed the skeleton underneath.
            Following is a few amazing projects that I have worked on extensively.
          </p> */}
          <p>
            Cool building products that I have worked on extensively as
            a licensed <a href="https://en.wikipedia.org/wiki/Structural_engineer">structural engineer</a>.
          </p>
        </div>
      </header>
      {data.map((portfolio) => (
        <Cell
          data={portfolio}
          key={portfolio.title}
        />
      ))}
    </article>
  </Main>
);

export default Portfolio;
