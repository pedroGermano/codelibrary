import { Search } from "lucide-react";

type FilterProps = {
  title: string;
};

export function Filter({ title }: FilterProps) {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold text-[#00A2F7]">
        Busque o conteúdo que deseja assitir hoje
      </h1>
      <p className="text-base font-medium  text-[#09A3FB]">{title}</p>
      <p className="text-base font-medium  text-[#09A3FB]">
        Conteúdo exclusivo todos os dias
      </p>
      <div className="flex gap-3.5 items-center mt-2">
        <input
          className="bg-white w-[615px] h-[51px] p-2 rounded-lg border border-[#f2f2f2] outline-0"
          type="text"
          placeholder="Curso de react"
        />
        <div
          className="flex justify-center items-center rounded-sm h-[51px] w-[45px] 
        bg-[#E1F4FF] hover:bg-[#c5e7fa] duration-50 cursor-pointer"
        >
          <Search className=" text-[#00a2f7] " size={16} />
        </div>
      </div>
    </div>
  );
}
