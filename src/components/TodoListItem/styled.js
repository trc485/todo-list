import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    height: 100%
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
`;

export const TodoSelectionIconWrapper = styled.span`
    margin-right: 1rem;
    &:hover {
        cursor: pointer;
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

export const TodoIconWrapper = styled.span`
    margin-left: 1rem;
    &:hover {
        cursor: pointer;
    }
`;
