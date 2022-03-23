import type { GetServerSidePropsContext } from 'next';

import { gql } from '@apollo/client';
import client from 'lib/apollo-client';


export default function FormPage({ list }: any) {
  console.log(list);
  return (
    <div className="flex flex-col gap-8 h-full p-12 items-center">
      <div className='flex p-12 justify-start w-full'>
        <h1 className='font-bold text-4xl'>
          { list.title }
        </h1>
      </div>
      <div className='w-4/5 max-w-xl border-2 border-black p-8 rounded-xl'>
        <div className='grid gap-4 items-center' style={{gridTemplateColumns: "1fr auto auto auto"}}>
          {list.type.files.map((file: any) => (
            <>
              <div key={file.id} className="px-4 text-lg font-semibold">
                {file.name}
              </div>
              <div>
                {file.extensions}
              </div>
              <div>
                <button
                  className='p-2 text-white bg-blue-600 rounded-lg border-2 border-black font-bold'
                  onClick={() => console.log('aqui')}>
                  upload
                </button>
              </div>
              <div></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;

  const { data } = await client.query({
    query: gql`
      query {
        list(where: {id: "${id}"}) {
          id
          title
          client {
            name
          }
          type {
            files {
              id
              name
              extensions
            }
          }
          uploads {
            file {
              filename
            }
            fileType {
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      list: data.list,
    }
  }
}

