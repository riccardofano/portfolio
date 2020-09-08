import axios from 'axios'

export { default as gql } from 'graphql-tag'

export async function request({ query, variables }) {
  const endpoint = 'https://graphql.datocms.com/'

  const { data } = await axios.post(
    endpoint,
    {
      query: query.loc && query.loc.source.body,
      variables,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.DATOCMS_READ_ONLY}`,
      },
    }
  )

  if (data.errors) {
    throw JSON.stringify(data.errors)
  }

  return data.data
}
