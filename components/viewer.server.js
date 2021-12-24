import { useData } from '../libs/use-data'
import { fetchGraphQLFromGithub } from '../libs/fetch-from-github'

export default function Viewer() {
  const query = `
    query {
      viewer {
        login
      }
    }
  `
  const data = useData('viewer', () => fetchGraphQLFromGithub(query, {}))
  return <p>{JSON.stringify(data)}</p>
}
