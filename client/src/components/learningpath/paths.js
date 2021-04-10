import React from 'react';
import PathCard from './pathCard';

const Paths = (props) => {
  console.log('🚀 ~ file: paths.js ~ line 4 ~ Paths ~ props', props);
  const { data } = props;
  const { learningPaths } = data;
  console.log(
    '🚀 ~ file: paths.js ~ line 7 ~ Paths ~ learningPaths',
    learningPaths
  );

  return learningPaths.map((path) => {
    return <PathCard path={path} />;
  });
};

export default Paths;
