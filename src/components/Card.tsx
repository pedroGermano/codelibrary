import { Button } from "./Button";

type CardProps = {
  text: string;
  time: string;
  image: string;
};

export function Card({ text, time, image }: CardProps) {
  return (
    <div className="flex flex-col border w-full p-4 rounded-md border-[#00a2f7]">
      <div className="flex justify-center items-center flex-1">
        <img className="w-32 mx-auto" src={image} alt="icone cursos" />
      </div>
      <p className="text-[#00A2F7] text-sm font-bold mt-2">{text}</p>
      <p className="text-[#00A2F7] text-sm font-normal mt-1">{time}</p>
      <Button titleBtn="Inscreva-se" />
    </div>
  );
}
