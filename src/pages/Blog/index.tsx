import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, ProfileCardWrapper, IssuesContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCardWrapper>
        <ProfileCard />
      </ProfileCardWrapper>

      <IssuesContainer>
        <SearchForm />
      </IssuesContainer>
    </BlogContainer>
  )
}
