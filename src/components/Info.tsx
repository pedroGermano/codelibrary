import { ButtonSmall } from "./ButtonSmall";

export function Info() {
  return (
    <div className="flex justify-between mt-2 w-full ">
      <div>
        <h2 className="text-[#00A2F7] font-bold text-[20px]">
          Pratique com projetos reais
        </h2>
        <p className="text-[#09A3FB] mb-2 mt-2 font-medium text-sm w-full max-w-[560px]">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <ButtonSmall titleBtn="Ver biblioteca" />
      </div>
      <div className="w-[282px] h-32 bg-white rounded-[5px]">
        <h2 className="font-bold text-[#00A2F7] text-[18px] mt-3 ml-3">
          Curso rápido
        </h2>
        <p className="text-[#00A2F7] text-base mt-1 ml-3">
          Cursos práticos de curta duração
        </p>
        <button className="bg-white mt-1 ml-3 rounded-[5px] text-[#42B3F4] border-2 py-2 px-10 border-[#42B3F4]">
          Assistir
        </button>
      </div>
    </div>
  );
}
