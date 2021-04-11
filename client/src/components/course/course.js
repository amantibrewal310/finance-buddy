import React from 'react'
import SingleCourse from './singleCourse'
import { Link } from 'react-router-dom';

function Course(props) {
    const { data } = props;
    const { courses } = data;
    return (
        <div className="post_container">
            {courses.map(course => {
                return <Link to={`/course/${course._id}`} key={course._id} >
                    <SingleCourse key={course._id} course={course} />
                </Link>
            })}
        </div>
    )
}

export default Course
