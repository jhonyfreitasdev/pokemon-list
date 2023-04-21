import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url(${props => props.theme.backgroundImage}) center bottom no-repeat ;
    background-size: cover;
    transition: .6s ease-in-out;
    height: 100vh;
`