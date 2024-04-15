import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
width: calc(100 % - 32px);
height: ${props => props.height} px;
padding: 15px;
font - size: 16px;
line - height: 20px;
background-color:#F46A61;
border-radius: 8px;
color: white;
border:none;
`;

function Button(props) {
    const { title, onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            {title || "button"}
        </StyledButton>
    );
}

export default Button;