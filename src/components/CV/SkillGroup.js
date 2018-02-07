/**
 * Created by andy on 9/7/16.
 */
import React from 'react';
export default ({ name, items }) => {
  return (
    <section className="skill-item item">
      <p>
        <span className="bold">{name}</span>: {items.join(', ')}
      </p>
    </section>
  );
};
