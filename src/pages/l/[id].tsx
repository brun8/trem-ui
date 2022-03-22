import logo from 'assets/logo.png';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

import { gql } from '@apollo/client';
import client from 'lib/apollo-client';

export default function FormPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-400 gap-16">

    </div>
  );
}

export async function getServerSideProps() {
  const id = "cl114pznj0095zpi0alzoimq7";

  const { data } = await client.query({
    query: gql`
      query {
        list(where: {id:  "cl114pznj0095zpi0alzoimq7"}) {
          id
          title
          client {
            name
          }
          type {
            files {
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

  console.log(data);

  return {
    props: {}
  }
}

