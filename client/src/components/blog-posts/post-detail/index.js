import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostDetail } from '../../../actions/postActions';
import { formatDate } from '../../../helpers';
import { OutlineButton, Button } from '../../../common/button';
import postAPI from '../../../api/postAPI';
import './index.scss';

const PostDetail = () => {
    const { postId } = useParams()
    const dispatch = useDispatch();

    const postState = useSelector(state => state.post);
    const [state, setState] = useState({ comment: "" });

    useEffect(() => {
        getPostDetail(postId, dispatch);
    }, [])

    const handleChange = (e) => {
        setState({
            ...state,
            comment: e.target.value
        })
    }

    const handleSubmit = async() => {
        if(state.comment === "")  return;
        console.log(state.comment);
        await postAPI.makeCommentOnPost(postId, state.comment);
        getPostDetail(postId, dispatch);
    }

    return (
        postState.postDetailLoading
            ? <div className="loading"> Loading </div>
            : (
                <div className="post-detail-container">
                    <div className="post-detail">
                        <div className="title">{postState.postDetail.title}</div>
                        <div className="image-detail-container">
                            <img src={postState.postDetail.image} alt="post-img" />
                        </div>
                        <div className="content">{postState.postDetail.content}</div>
                        <div className="section-1">
                            <div className="stats">
                                <div> {formatDate(postState.postDetail.updatedAt)} </div>
                                <div><i className="fa fa-thumbs-up"></i> <span>{postState.postDetail.likes}</span></div>
                            </div>
                            <div>
                                <Link to={postState.postDetail.quiz ? `/quiz/${postState.postDetail.quiz}` : '#'}>
                                    <Button text="Take Quiz" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="comments post-detail">
                        <div className="title small">Comments</div>
                        <div className="new-comment">
                            <input 
                                type="text" 
                                value={state.comment}
                                onChange={handleChange}
                            />
                            <OutlineButton text="Save" onClick={handleSubmit} />
                        </div>
                        {
                            postState.postDetail.comments.map(comment => (
                                <div className="comment" key={comment._id} >
                                    <div className="circle"></div>
                                    <div className="text">{comment.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
    )
}

export default PostDetail
