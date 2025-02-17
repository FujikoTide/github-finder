import axios from 'axios'

const GITHUB_URL = import.meta.env.VITE_GITHUB_FINDER_APP_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_FINDER_APP_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const repsonse = await github.get(`/search/users?${params}`)
  return repsonse.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'stars',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ])

  return { user: user.data, repos: repos.data }
}
