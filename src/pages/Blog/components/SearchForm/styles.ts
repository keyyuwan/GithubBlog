import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  margin-top: 72px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }
`

export const Form = styled.form`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 12px 16px;

  background: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};

  &::placeholder {
    color: ${(props) => props.theme.label};
  }

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`

export const SearchButton = styled.button`
  height: 50px;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme.blue};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`
