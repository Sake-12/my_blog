import React from "react";
import styled from "styled-components";

// import data from "../../data.json";


const Wrapper = styled.div`
width: calc(100%-32px);
margin-left: 24px;
padding: 24px;
diplay: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border: 1px solid #f5f5f5;
border-radius: 24px;
cursor: pointer;
background: white;
&:hover{
    background: lightgrey;
}
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
    width: 980px;
`;

function PostItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}
                {/* <div>
                    {
                        data.map(function (data) {
                            return <PostItem image={data.url} />
                        })
                    }

                </div> */}
            </TitleText>
        </Wrapper>
    );
}



export default PostItem;