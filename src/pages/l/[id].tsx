import logo from 'assets/logo.png';
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';

export default function FormPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-400 gap-16">
      <nav className="h-28 flex justify-between px-16 items-center">
        <h1 className="text-4xl font-bold">
          Nome da empresa
        </h1>
        <div>
          <Image src={logo} alt='Blue Bridge' height={55} width={252} />
        </div>
      </nav>
      <div className='h-auto flex flex-col items-center'>
        <h2 className='font-semibold text-2xl uppercase'>
          lista de documentos
        </h2>
      </div>
    </div>
  );
}

export async function GetStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;

  return {
    props: {}
  }
}

