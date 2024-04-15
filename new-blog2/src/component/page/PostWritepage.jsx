import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import Button from "../ui/Button"
import TextInput from "../ui/TextInput";

const Wrapper = styled.div`
padding: 16px;
`;

const Container = styled.div`
`;

function PostWritePage(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <TextInput height={20} value={title} onChange={(e) => setTitle(e.target.value)}></TextInput>

                <TextInput height={480} value={content} onChange={(e) => setContent(e.target.value)}></TextInput>

                <Button title="글 작성하기" onClick={() => { navigate('/') }}></Button>
            </Container>
        </Wrapper >
    )
}

export default PostWritePage;