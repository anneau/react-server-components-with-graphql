export const fetchGraphQLFromGithub = async (query, variables) => {
  return (
    await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GRAPHQL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  ).json()
}
