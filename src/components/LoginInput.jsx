import { forwardRef } from "react";

const LoginInput = forwardRef((props, ref) => {
  const { isInputValid, type, placeholder } = props;
  let inputcss = "w-96 h-12 pl-4 rounded-lg placeholder:gray-400 ";
  if (!isInputValid) {
    inputcss = inputcss + "border-2 border-rose-600 ";
  }
  return (
    <div className="self-center w-120 h-20">
      <input
        className={inputcss}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      <div>
        {!isInputValid && (
          <p className="ml-4 mt-1 text-red-600 bold font-semibold">
            필수 입력값 입니다
          </p>
        )}
      </div>
    </div>
  );
});
LoginInput.displayName = "LoginInput";
export default LoginInput;
