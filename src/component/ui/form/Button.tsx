import type { IButtonProps } from "./Form.contract";

export default function ({ className, children, disabled }: IButtonProps) {
  return (
    <button
      className={`rounded-md cursor-pointer transition hover:scale-98  text-white flex items-center justify-center p-2 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
