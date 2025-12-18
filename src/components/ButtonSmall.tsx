type buttonProps = {
  titleBtn: string;
};

export function ButtonSmall({ titleBtn }: buttonProps) {
  return (
    <button
      className="w-[156px] h-10 text-white bg-[#00A2F7] 
        hover:bg-[#0395e4] rounded-sm cursor-pointer mt-1"
    >
      {titleBtn}
    </button>
  );
}
