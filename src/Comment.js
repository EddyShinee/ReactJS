import React, {Component} from 'react';

function Comments(props)
{
    return (
        <div className="Comments">
            <UserInfo x={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.x.avatarUrl} alt={props.x.name}/>
    );
}

function UserInfo(props)
{
    return (
        <div className="UserInfo">
            <Avatar x={props.x} />
            <div className="UserInfo-name">{props.x.name}</div>
            <div className="UserInfo-sex">{props.x.sex}</div>
        </div>
    );

}
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">{props.user.name}</div>
//         </div>
//     );
// }


const comment = {
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        sex: 'Boy',
        avatarUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968',
    },
};


class Comment extends Component{
    render()
    {
        return(
            <div>
            <Comments
                text={comment.text}
                author={comment.author}
            />
            </div>
        );
    }
}


export default Comment;
