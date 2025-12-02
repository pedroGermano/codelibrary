export function Filter() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-[#00A2F7]">
        Busque o conteúdo que deseja assitir hoje
      </h1>
      <p className="text-base font-medium  text-[#09A3FB]">
        Conteúdo exclusivo todos os dias
      </p>
      <input
        className="bg-white w-[615px] h-[45px] mt-4 p-2 rounded-lg border border-[#f2f2f2] outline-0"
        type="text"
        placeholder="Curso de react"
      />
    </div>
  );
}
