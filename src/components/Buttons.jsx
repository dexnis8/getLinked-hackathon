export const GradientButton = ({ handleClick, text }) => {
  return (
    <>
      <button
        className="py-[10px] px-8 w-100 text-base font-normal text-white btn-gradient rounded"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};
