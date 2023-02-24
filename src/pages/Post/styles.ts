import styled from 'styled-components'

export const PostContainer = styled.article`
  max-width: 864px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto 234px;
`

export const IssueTitleCardWrapper = styled.div`
  margin-top: -88px;
  position: relative;
`

export const PostContent = styled.main`
  margin-top: 40px;

  color: ${(props) => props.theme.text};
`
