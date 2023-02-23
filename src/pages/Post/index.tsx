import { IssueTitleCard } from './components/IssueTitleCard'
import { IssueTitleCardWrapper, PostContainer, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <IssueTitleCardWrapper>
        <IssueTitleCard />
      </IssueTitleCardWrapper>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostContent>
    </PostContainer>
  )
}
