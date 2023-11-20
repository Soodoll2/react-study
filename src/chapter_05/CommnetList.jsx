import React from 'react';
import Commnet from './Comment';

const comments = [
    {
        id: "1",
        name: "김수정",
        comment: "나는 벼락치기했다",
    },
    {
        id: "2",
        name: "정지은",
        comment: "나는 지은위키다",
    },
    {
        id: "3",
        name: "안수연",
        comment: "나는 안수기다",
    },
]

function CommnetList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Commnet key={comment.id} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}

export default CommnetList;
