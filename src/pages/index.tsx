import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { gql } from '@apollo/client';

import client from 'lib/apollo-client';

type File = {
  name: string,
  extensions: string
}

type ListType = {
  files: File[],
}

type List = {
  id: string,
  title: string,
  client: {name: string},
  type: ListType,
}

type ListProps = {
  list: List,
}

function Home({ list }: ListProps) {
  console.log(list);

  return (
    <div className=''>
      <p>{list.client.name}</p>
      <p>{list.title}</p>
      {list.type.files.map((f) => (
        <p className=''>
          {f.name} - {f.extensions || "qualquer"}
        </p>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query {
        list (where: 	{id: "cl0whyhc10601f2i047bzfavz"}){
          id
          title
          client {
            name
          }
          type{
            files {
              name
              extensions
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      list: data.list,
    },
  }
}

export default Home
