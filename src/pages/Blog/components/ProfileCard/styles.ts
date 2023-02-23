import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  margin-top: -84px;
  border-radius: 10px;
  position: absolute;
  padding: 32px 40px;

  background: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  p {
    color: ${(props) => props.theme.text};
    margin-top: 8px;
    line-height: 25.6px;
  }
`

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
  }

  .github-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 0.75rem;
      font-weight: 700;
    }

    svg {
      width: 12px;
      height: 12px;
    }

    span,
    svg {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme.label};
    }

    span {
      color: ${(props) => props.theme.subtitle};
    }
  }
`
