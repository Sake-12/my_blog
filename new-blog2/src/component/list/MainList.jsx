import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 435px;
height: 410px;
border-radius: 24px;
background-color:white;
`;

const styles = {
    flex: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "16px",
        padding: "12px",
        paddingLeft: "36px"
    },
    title: {
        padding: "16px"
    }
}

function Select(props) {
    return (
        <Wrapper>
            <div>
                <h1 style={styles.title}>내 Blog</h1>
                <div style={styles.flex}>
                    <img src="iconography/ic_round-person.svg" alt="" />
                    <p>neighbor</p>
                </div>
                <div style={styles.flex}>
                    <img src="/iconography/icon-park_page.svg" alt="" />
                    <p>mypage</p>
                </div>
                <div style={styles.flex}>
                    <img src="/iconography/Vector.svg" alt="" />
                    <p>setting</p>
                </div>
            </div>
        </Wrapper >
    )
}


export default Select;