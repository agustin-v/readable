import React from 'react'
import Comment from '../components/Comment/Comment'

const CommentsContainer = ({comments}) => {
    if(comments !== undefined){
        return(
            <div>
                {comments.map((comment) => {
                    return <Comment
                            key={comment.id}
                            id={comment.id}
                            author={comment.author}
                            timestamp={comment.timestamp}
                            body={comment.body}
                            voteScore={comment.voteScore}
                        />
                })}
            </div>
        )
    }
}

export default CommentsContainer