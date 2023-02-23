import { IssueCard } from './components/IssueCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, ProfileCardWrapper, IssuesContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCardWrapper>
        <ProfileCard />
      </ProfileCardWrapper>

      <SearchForm />
      <IssuesContainer>
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </IssuesContainer>
    </BlogContainer>
  )
}
