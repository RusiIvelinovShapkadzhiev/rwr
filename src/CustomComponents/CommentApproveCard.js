import React from 'react';
import CommentDetail from './CommentDetail';
import Button from './Button';

const CommentApproveCard = (props) => {
    console.log(props)
    return (
        <div className="ui card">
            <div className="content">{<CommentDetail props={props}/>}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Button buttonText={props.greenButtonText} color={props.yesColor} />
                    <Button buttonText={props.redButtonText} color={props.noColor} />
                </div>

            </div>

        </div>
    );
}

export default CommentApproveCard;