export const Button = ({ className, text }) => (
  <button
    className={`text-black max-w-[148px] px-4 py-3 rounded-[100px] backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] ${className}`}
  >
    {text}
  </button>
);
