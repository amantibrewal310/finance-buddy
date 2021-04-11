import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../helpers';
import Stars from '../../../common/stars';
import { getCourseDetail } from '../../../actions/courseActions';
import './index.scss';

const CourseDetail = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();

    const courseState = useSelector(state => state.course);

    useEffect(() => {
        getCourseDetail(courseId, dispatch);
    }, [])

    return (
        courseState.courseDetailLoading
            ? <div className="loading"> Loading </div>
            : (
                <div className="post-detail-container">
                    <div className="post-detail">
                        <div className="title">{courseState.courseDetail.title}</div>
                        <div className="image-detail-container">
                            <img src={courseState.courseDetail.thumbnail ? courseState.courseDetail.thumbnail : 'https://bootdey.com/img/Content/avatar/avatar1.png'} alt="post-img" />
                        </div>
                        <div className="content">{courseState.courseDetail.description}</div>
                        <div className="section-1">
                            <div className="stats">
                                <div>Author <i className="fa fa-user-plus"></i>: {courseState.courseDetail.author.name}</div>
                                <div><i className="fa fa-clock-o"></i> {formatDate(courseState.courseDetail.updatedAt)} </div>
                            </div>
                            <div className="stats">
                                <div> Difficulty:  <Stars total={5} glowingCnt={courseState.courseDetail.difficulty} /> </div>
                                <div> Rating <i className="fa fa-bolt"></i>: {courseState.courseDetail.rating}</div>
                            </div>
                        </div>
                    </div>

                    <div className="comments post-detail">
                        <div className="title small">Videos</div>
                        {
                            courseState.courseDetail.videoslist.map((video, index) => (
                                <VideoElement video={video} key={index} />
                            ))
                        }
                    </div>
                </div>
            )
    )
}

export const VideoElement = ({video}) => {
    return (
        <div className="comment video-cont" >
            <div>
                <video style={{width: '200px'}} src={video?.videoUrl} controls poster={video?.poster}/>
            </div>
            <div className="video-details">
                <div>{video.title}</div>
                <div>{video.description}</div>
                <div><i className="fa fa-clock-o"></i> {formatDate(video.updatedAt)} </div>
            </div>
        </div>
    )
}

export default CourseDetail
