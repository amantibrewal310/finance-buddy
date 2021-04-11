import React from 'react'
import { formatDate } from '../../helpers';
import { Button } from '../../common/button';
import Stars from '../../common/stars';
import '../blog-posts/post.css';


function SingleCourse(props) {
    const { course } = props;
    return (
        <>
            <div className="container">
                <div className="col-md-12 col-lg-12">
                    <article className="post vt-post">
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                                <div className="post-type post-img">
                                    <span href="#">
                                        <img
                                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                                            src={
                                                course.image ||
                                                'https://bootdey.com/img/Content/avatar/avatar1.png'
                                            }
                                            className="img-responsive"
                                            alt="image post"
                                        />
                                    </span>
                                </div>
                                <div className="author-info author-info-2">
                                    <ul className="list-inline">
                                        <li>
                                            <div className="info">
                                                <p style={{ color: "#5d62b5", fontWeight: "bold", padding: "8px 0 0 8px" }} >
                                                    Posted on: <strong style={{ color: "#5d62b5" }}> {formatDate(course.createdAt)}</strong>
                                                </p>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-container col-xs-12 col-sm-7 col-md-7 col-lg-8">
                                <div className="caption">
                                    <h3 className="md-heading">
                                        <span style={{ color: '#5d62b5', fontWeight: "bold" }}>{course.title}</span>
                                    </h3>
                                    <p style={{ color: 'grey', }}>{course.description}</p>
                                    <p>Author <i className="fa fa-user-plus"></i>: {course.author.name}</p>
                                    <p>Difficulty:  <Stars total={5} glowingCnt={course.difficulty}/></p>
                                    <p>Rating <i className="fa fa-bolt"></i>: {course.rating}</p>
                                    <div className="read-more-btn">
                                        <Button text="Course Details" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default SingleCourse
