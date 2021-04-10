import {
  GET_ALL_LEARNING_PATH,
  GET_ALL_LEARNING_PATH_BY_DOMAIN
} from './types';
import learningPathAPI from '../api/learningPathAPI';

export const getAllLearningPath = async (dispatch) => {
  const res = await learningPathAPI.getAllLearningPath();
  dispatch({
    type: GET_ALL_LEARNING_PATH,
    payload: res
  });
};

export const getAllLearningPathByDomain = async (domainId, dispatch) => {
  const res = await learningPathAPI.getLearningPathForDomain(domainId);
  dispatch({
    type: GET_ALL_LEARNING_PATH_BY_DOMAIN,
    payload: res
  });
};

// action for clearing form in ./auth
