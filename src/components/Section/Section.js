import './Section.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section className="Section__container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
