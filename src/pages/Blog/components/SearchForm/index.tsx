import { Input, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <span>Publicações</span>
        <span>6 publicações</span>
      </header>

      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
