import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IssueCardContainer = styled(Link)`
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  padding: 32px;
  height: 260px;
  border: 2px solid ${(props) => props.theme.post};

  &:hover {
    border-color: ${(props) => props.theme.label};
    transition: border-color 0.2s;
  }
`

export const IssueCardContent = styled.div`
  height: 100%;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme.title};
      font-size: 1.25rem;
      line-height: 2rem;
    }

    time {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
      white-space: nowrap;
    }
  }

  p {
    margin-top: 20px;
    color: ${(props) => props.theme.text};
    line-height: 25.6px;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
