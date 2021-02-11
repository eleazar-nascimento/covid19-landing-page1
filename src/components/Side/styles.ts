import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;

    margin: 20px 100px;
    /* margin-top: 100%; */
`;

export const Icon = styled.div`
    display: flex;
    align-items:center;
    gap: 10px;
`;

export const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Red Hat Display', sans-serif;
    text-align: center;
`;

export const LinksContainer = styled.text``;

export const ButtonContainer = styled.div`
    display:flex;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    gap: 50px;
    align-items: center;

    font-weight: 500;
    font-family: 'Red Hat Display', sans-serif;

    cursor: pointer;
    background-color: transparent;
    border: none; 
    outline: none
`;
