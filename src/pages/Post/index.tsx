import { useCallback, useEffect, useState } from 'react'
import { useParams, Params } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { api } from '../../libs/api'
import { IssueTitleCard } from './components/IssueTitleCard'
import { IssueTitleCardWrapper, PostContainer, PostContent } from './styles'

interface BodyParams extends Params {
  id: string
}

interface Issue {
  createdAt: string
  comments: number
  body: string
  issueUrl: string
  title: string
  user: {
    login: string
  }
}

export function Post() {
  const { id } = useParams<BodyParams>()

  const [issue, setIssue] = useState<Issue | null>(null)

  const fetchIssue = useCallback(async () => {
    try {
      const { data } = await api.get(`/repos/keyyuwan/GithubBlog/issues/${id}`)
      console.log(data)

      const issueFormatted = {
        createdAt: data.created_at,
        comments: data.comments,
        body: data.body,
        issueUrl: data.html_url,
        title: data.title,
        user: {
          login: data.user.login,
        },
      }

      setIssue(issueFormatted)
    } catch (err) {
      console.log(err)
    }
  }, [id])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      <IssueTitleCardWrapper>
        <IssueTitleCard issue={issue} />
      </IssueTitleCardWrapper>

      <PostContent>
        <ReactMarkdown children={issue?.body} />
      </PostContent>
    </PostContainer>
  )
}
