import { IssueCardContainer, IssueCardContent } from './styles'

export function IssueCard() {
  return (
    <IssueCardContainer to="/">
      <IssueCardContent>
        <header>
          <strong>JavaScript data types and data structures</strong>
          <time>Há 1 dia</time>
        </header>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </IssueCardContent>
    </IssueCardContainer>
  )
}
