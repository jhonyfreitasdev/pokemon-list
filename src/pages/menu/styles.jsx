import styled from "styled-components";
import pokedex from "../../_assets/images/pokedex.png"
import { device } from "../../constants/device";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    background: url(${pokedex}) left top no-repeat;
    background-size: cover;
    transition: .6s ease-in-out;
    box-shadow: 0 3px 7px 5px #00000030;
    border-radius: 15px 15px 0 0;
    width: 78%;
    height: 63px;
    margin: 0 auto;
    padding: 15px 30px;

    @media ${device.mobileL} {
        padding: 10px;
    }
    @media ${device.mobileL} {
        width: 90%;
    }
    @media ${device.mobileS} {
        padding: 6px;
    }

    h1{
        color: #ffffff;
        font-size: 3.5rem;
        font-weight: 700;
        text-shadow: 0 0 9px #00000037;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #484848;

        @media ${device.mobileL} {
            font-size: 3rem;
        }
        @media ${device.mobileS} {
            font-size: 2.5rem;
        }
    }
` 

export const Image = styled.img`
    width: 35px;
    border-radius: 20px;
`