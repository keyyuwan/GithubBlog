import { IssueCardContainer, IssueCardContent } from './styles'

interface Issue {
  number: number
  title: string
  createdAt: string
  body: string
}

interface IssueCardProps {
  issue: Issue
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <IssueCardContainer to={`/post/${issue.number}`}>
      <IssueCardContent>
        <header>
          <strong>{issue.title}</strong>
          <time>
            {/* Há 1 dia */}
            {issue.createdAt}
          </time>
        </header>

        <p>{issue.body}</p>
      </IssueCardContent>
    </IssueCardContainer>
  )
}
