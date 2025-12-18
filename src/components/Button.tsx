type buttonProps = {
  titleBtn: string;
};

export function Button({ titleBtn }: buttonProps) {
  return (
    <button
      className="w-full h-10 text-white bg-[#00A2F7] 
        hover:bg-[#0395e4] rounded-sm cursor-pointer mt-1"
    >
      {titleBtn}
    </button>
  );
}
