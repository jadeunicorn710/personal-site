import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const ProjectCell = ({ data }) => (
  <div style={{ marginBottom: '1.5em', paddingBottom: '1.5em', borderBottom: '1px solid #eee' }}>
    <h3 style={{ marginBottom: '0.2em' }}>
      <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
    </h3>
    <p style={{ margin: '0.2em 0', color: '#888', fontSize: '0.9em' }}>
      {data.company} &middot; {dayjs(data.date).format('YYYY')}
    </p>
    <p style={{ margin: '0.4em 0' }}>{data.desc}</p>
    {data.skills && (
      <p style={{ margin: '0.3em 0', fontSize: '0.9em' }}>
        <strong>Skills:</strong> {data.skills.join(', ')}
      </p>
    )}
    {data.blogLink && (
      <p style={{ margin: '0.3em 0', fontSize: '0.9em' }}>
        <a href={data.blogLink} target="_blank" rel="noopener noreferrer">{data.blogLabel}</a>
      </p>
    )}
  </div>
);

ProjectCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    blogLink: PropTypes.string,
    blogLabel: PropTypes.string,
  }).isRequired,
};

export default ProjectCell;
