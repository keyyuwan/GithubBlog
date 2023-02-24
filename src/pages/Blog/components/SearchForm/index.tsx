import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContextSelector } from 'use-context-selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { IssuesContext } from '../../../../contexts/IssuesContext'
import { Form, Input, SearchButton, SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues, issuesCount } = useContextSelector(
    IssuesContext,
    (context) => {
      return {
        fetchIssues: context.fetchIssues,
        issuesCount: context.issuesCount,
      }
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer>
      <header>
        <span>Publicações</span>
        <span>
          {issuesCount} {issuesCount > 1 ? 'publicações' : 'publicação'}
        </span>
      </header>

      <Form onSubmit={handleSubmit(handleSearchIssues)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <SearchButton type="submit" disabled={isSubmitting}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </Form>
    </SearchFormContainer>
  )
}
