import React from "react";
import styled from "styled-components";
import PostItem from "../page/PostItem";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
height: 648px;
overflow: scroll;
margin-top: 24px;
padding-top: 44px;

& > *{
    :not(:last-child){
        margin-bottom: 16px;
    }
}
`;

function PostList(props) {
    const { posts, onClickItem } = props;



    return (
        <Wrapper>

            {posts.map((post, index) => {
                return (
                    <PostItem key={post.id} post={post} onClick={() => onClickItem(post)}></PostItem>
                )
            })}

        </Wrapper>
    );
}

export default PostList;