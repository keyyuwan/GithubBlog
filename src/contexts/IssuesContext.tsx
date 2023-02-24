import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../libs/api'

interface Issue {
  id: number
  number: number
  issueUrl: string
  title: string
  body: string
  comments: number
  createdAt: string
  user: {
    login: string
  }
}

interface IssuesContextData {
  issues: Issue[]
  issuesCount: number
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextData)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query?: string) {
    try {
      const { data } = await api.get(
        `/search/issues?q=${query ?? 'a'}%20repo:keyyuwan/GithubBlog`,
        {
          headers: {
            accept: 'application/vnd.github+json',
          },
        },
      )

      const issuesFormatted = data.items.map((issue) => ({
        id: issue.id,
        number: issue.number,
        title: issue.title,
        issueUrl: issue.html_url,
        body: issue.body,
        comments: issue.comments,
        createdAt: issue.created_at,
        user: {
          login: issue.user.login,
        },
      }))

      setIssues(issuesFormatted)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <IssuesContext.Provider
      value={{ issues, issuesCount: issues.length, fetchIssues }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
