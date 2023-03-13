import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
    height: 100vh;
    width: 6%;
    ${({ theme })=> css`
        background: ${theme.colors.white};
    `}

    display:flex;
    flex-direction: column;
    position: fixed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.img`
    width: 60px;
`

export const Links = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 150px;
`

export const Link = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme })=> css`
        color: ${theme.colors.black};
        font-weight: ${theme.font.bold};
    `}

    padding: 10px;
    text-decoration: none;
    margin-top: 10px;
    border: none;
    background: none;
    cursor: pointer;
`