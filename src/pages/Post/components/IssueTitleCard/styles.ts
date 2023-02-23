import styled from 'styled-components'

export const IssueTitleCardContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 168px;
  border-radius: 10px;
  padding: 32px;

  background: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const IssueTitleCardContent = styled.div`
  strong {
    display: inline-block;
    margin-top: 20px;
    font-size: 1.25rem;
    color: ${(props) => props.theme.title};
  }
`

export const IssueTitleCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 12px;
      height: 12px;
    }

    span {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
    }

    span,
    svg {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const IssueInfo = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 32px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme.span};
    }

    span {
      color: ${(props) => props.theme.span};
    }
  }
`
