import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLearningPath } from '../../actions/learningPaths';
import Paths from './paths';

function LearningPath() {
  const dispatch = useDispatch();
  const pathsState = useSelector((state) => state.learningPath);

  useEffect(() => {
    getAllLearningPath(dispatch);
  }, []);

  return pathsState.learningPathLoading ? (
    <div>Loding.....</div>
  ) : (
    <>
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-primary h6" style={{ height: '10px' }}></h5>
          <h2 className="display-20 display-md-18 display-lg-16">
            Learning Path
          </h2>
        </div>
        <div className="row">
          <Paths data={pathsState} />
        </div>
      </div>
    </>
  );
}

export default LearningPath;
