import { useContextSelector } from 'use-context-selector'

import { IssuesContext } from '../../contexts/IssuesContext'
import { IssueCard } from './components/IssueCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, ProfileCardWrapper, IssuesContainer } from './styles'

export function Blog() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <BlogContainer>
      <ProfileCardWrapper>
        <ProfileCard />
      </ProfileCardWrapper>

      <SearchForm />
      <IssuesContainer>
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </IssuesContainer>
    </BlogContainer>
  )
}
