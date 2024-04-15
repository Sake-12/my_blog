import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Select from "../list/MainList";
import PostList from "../list/PostList";
import Button from "../ui/Button";

import data from "../../data.json";

const Wrapper = styled.div`
padding: 16px;
width: calc(100%-32px);
height: 768px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
background-color:#f5f5f5;
`;

const Container = styled.div`
width: 100%;
max-width: 1080px;
margin-left:64px;
& > *{
    :not(:last-chilld){
        margin-bottom: 16px;
    }
}
background-color:white;
border-radius: 24px;
`;

const styles = {
    flex: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "16px",
        padding: "12px",
        paddingLeft: "36px",
        justifyContent: "flex-end"
    },
}

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Select />
            <Container>
                <PostList posts={data} onClickItem={(p) => { navigate('/post/' + p.id) }}></PostList>
                <div style={styles.flex}>
                    <Button title="글 작성하기" onClick={() => { navigate('/write') }}></Button>
                </div>
            </Container>
        </Wrapper >
    );
}

export default MainPage;