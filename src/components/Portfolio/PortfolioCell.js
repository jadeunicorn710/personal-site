import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p>{data.subtitle}</p>
        {/* <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time> */}
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p> {data.desc}
        </p>
      </div>
      {/* <div>
        <p>
          <ul className="contents">
            <li>{data.content1}</li>
            <li>{data.content2}</li>
            <li>{data.content3}</li>
            <li>{data.content4}</li>
          </ul>
        </p>
      </div> */}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string,
    content1: PropTypes.string,
    content2: PropTypes.string,
    content3: PropTypes.string,
    content4: PropTypes.string,
    content5: PropTypes.string,
    content6: PropTypes.string,
  }).isRequired,
};

export default Cell;
