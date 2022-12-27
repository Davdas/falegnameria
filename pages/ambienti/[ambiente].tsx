import { BsArrowLeftShort } from "react-icons/bs";
import Slices from "../../components/slices";
import { createClient } from "../../prismicio";

const AmbientePage = ({ page }: any) => {
  return (
    <section className="max-w-[1000px] m-auto mt-40 bg-black">
      <div className=" text-white py-5 text-4xl text-center uppercase tracking-wider">
        {page.data.nome_ambiente}
        <hr className="w-[30%] border-1 border-amber-600 my-4 mb-3 m-auto" />
      </div>
      <div className=" flex ml-2">
        <BsArrowLeftShort className=" text-2xl text-white" />
        <a href="/#progetti" className="text-white">
          indietro
        </a>
      </div>
      <div className=" cursor-pointer">
        <Slices slices={page.data.slices} />
      </div>
    </section>
  );
};

export async function getServerSideProps(context: any) {
  const client = createClient();
  const page = await client.getByUID("ambienti", context.params.ambiente);

  return {
    props: {
      page,
    },
  };
}

export default AmbientePage;
