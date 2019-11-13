import styled from 'styled-components';

export default styled.button`
    display: inline-block;
    padding: 1rem 1.5rem;
    margin-top: 2rem;
    border: none;
    border-radius: .15rem;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: #3369ff;
    box-shadow: inset 0 -0.6rem 0 -.35rem rgba(0,0,0,0.17);
    text-align: center;
    position: relative;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translateY(.15rem);
            box-shadow: inset 0 -0.2rem 0 -.35rem rgba(0,0,0,0.17);
    }
`;
