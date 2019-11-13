import styled from 'styled-components'

export const ListContainer = styled.div`
    max-width: 800px;
    border: 1px solid #d1d5da;
    border-radius: 15px;
    overflow: hidden;
    &>*:not(:last-child) {
        border-bottom: 1px solid #d1d5da;
    }
`
