import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './routes/app.routes'
import { IssuesProvider } from './contexts/IssuesContext'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <GlobalStyle />

          <Header />
          <AppRoutes />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  )
}
