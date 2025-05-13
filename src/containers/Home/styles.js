import styled from "styled-components";

export const CardMovie = styled.div`
    text-decoration: none;
    color: #ffff;
`

export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-items: center;
    margin-top: 3rem;

    img{
        width: 30rem;

        @media (max-width: 768px) {
            width: 15rem;
        }
    }
`