import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
width: calculateNewValue(100 % - 32px);
height: ${props => props.height}px;
padding: 16px;
font - size: 16px;
line - height: 20px;
border-radius: 32px;
`;


function TextInput(props) {
    const { height, value, onChange } = props;

    return (
        <StyledTextArea height={height || 20} value={value} onChange={onChange}></StyledTextArea>
    );
}

export default TextInput;