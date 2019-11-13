import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    height: 2.5rem;
    padding: 1rem;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
    &:hover {
        background-color: #f6f8fa;
    }
`;

export const TodoTitleWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto;
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-left: 1rem;
`;

export const TodoSelectionIconWrapper = styled.span`
    margin-right: 2rem;
    margin-left: 1rem;
        &:hover {
        cursor: pointer;
    }
`;

export const TodoIconWrapper = styled.span`
    margin: 0 1rem;
    &:hover {
        cursor: pointer;
    }
`;
