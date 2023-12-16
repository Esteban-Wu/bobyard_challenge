import React from 'react';
import axios from 'axios';

const commentsFromJSON = require('./comments.json');
const CommentList = (props) => {
    let sendPost = (comment) => {
        const url = 'http://localhost:4000/comments'
        axios.post(url, comment)
        .then((res) => {
            props.updateComments()
            console.log(res);
        })
        .catch((error) => console.log(error))
    }

    let addCommentHandler = () => {
        commentsFromJSON.comments.map((comment) => {
            sendPost(comment);
        })
    }

    return (
        <div>
            <h4>Comments</h4>
            <ul className="collection">
            {props.comments.map((item) => (
                <div 
                    className="collection-item" 
                    key={item._id}
                >    
                <h6>{item.author}</h6> 
                {Date(item.date)}
                <li>
                    <p>{item.text}</p>
                </li>
                <li style={{objectFit: 'contain'}}>
                    <img src={item.image} alt='' style={{maxWidth: '100%', maxHeight: 'auto'}}></img>
                </li>
                </div>
            ))}
        </ul>
        <div>
            <a className="waves-effect waves-light btn" onClick={addCommentHandler}>Load All Comments From JSON</a>
        </div>
        </div> 
    );
}
 
export default CommentList;