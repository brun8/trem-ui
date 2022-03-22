import { GetServerSideProps } from 'next'
//import { gql } from '@apollo/client';

//import client from 'lib/apollo-client';

function Home() {

  return (
    <div className='flex items-center justify-center'>

    </div>
  );
}

//export const getServerSideProps: GetServerSideProps = async (context) => {
  //const { data } = await client.query({
    //query: gql`
      //query {
        //list (where: 	{id: "cl0whyhc10601f2i047bzfavz"}){
          //id
          //title
          //client {
            //name
          //}
          //type{
            //files {
              //name
              //extensions
            //}
          //}
        //}
      //}
    //`,
  //});

  //return {
    //props: {
      //list: data.list,
    //},
  //}
//}

export default Home
