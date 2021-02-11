import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 100px;
`;

export const Icon = styled.div`
    display: flex;
    align-items:center;
    gap: 12px;
    margin-left: 70px;
`;

export const Text = styled.p`
    font-weight: 700;
    font-size: 12px;
    font-family: 'Red Hat Display', sans-serif;
`;

export const LinksContainer = styled.text``;

export const ButtonContainer = styled.button`
    display:flex;
    align-items: center;
    gap: 45px;
    margin-right: 70px;

    font-weight: 500;
    font-family: 'Red Hat Display', sans-serif;

    cursor: pointer;
    background-color: transparent;
    border: none; 
    outline: none
`;
