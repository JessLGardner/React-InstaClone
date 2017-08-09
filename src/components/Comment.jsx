import React, {Component} from 'react';
import styled from 'styled-components';




const CommentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: sans-serif;
  img{
    height: 35px;
    width: 35px;
    border-radius: 100%;
  }
  span{
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 700;
  }
`;

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentDiv>
        <img src={comment.profile_pic} alt=""/>
        <p><span>{comment.username}</span>
          {comment.text}</p>
      </CommentDiv>
    );
  }
}

export default Comment;