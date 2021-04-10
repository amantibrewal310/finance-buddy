import React from 'react';
import { formatDate } from '../../helpers';
const PathCard = (props) => {
  const { path } = props;
  console.log('🚀 ~ file: pathCard.js ~ line 5 ~ PathCard ~ path', path);
  return (
    <div className="col-lg-4 col-md-6 mb-2-6">
      <article className="card card-style2">
        <div className="card-img">
          <img
            className="rounded-top"
            src="https://via.placeholder.com/350x280/6A5ACD/000000"
            alt="..."
          />
          <div className="date">
            <span>{formatDate(path.createdAt)}</span>
          </div>
        </div>
        <div className="card-body">
          <h3 className="h5">
            <a href="#!">{path?.title}</a>
          </h3>
          <p className="display-30">{path?.description}</p>
          <a href="#!" className="read-more">
            Start Learning
          </a>
        </div>
        {/* <div className="card-footer">
          <ul>
            <li>
              <a href="#!">
                <i className="fas fa-user"></i>
                {path?.domain}
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="far fa-comment-dots"></i>
                <span>26</span>
              </a>
            </li>
          </ul>
        </div> */}
      </article>
    </div>
  );
};

export default PathCard;
