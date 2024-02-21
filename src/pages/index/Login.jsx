import { useRef, useState } from "react";
import { isEmpty } from "./../../utils/loginVaild.js";

import LoginInput from "../../components/LoginInput.jsx";

export default function LoginPage() {
  const [isInputValid, setIsInputValid] = useState({
    id: true,
    password: true,
  });
  const idRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    if (isEmpty(idRef.current.value)) {
      setIsInputValid((prev) => ({ ...prev, ["id"]: false }));
    } else {
      setIsInputValid((prev) => ({ ...prev, ["id"]: true }));
    }
    if (isEmpty(passwordRef.current.value)) {
      setIsInputValid((prev) => ({ ...prev, ["password"]: false }));
    } else {
      setIsInputValid((prev) => ({ ...prev, ["password"]: true }));
    }
    if (!isInputValid.id && !isInputValid.password) {
      return;
    }
    //백앤드로 데이터를 보내는 과정
  }

  return (
    <main className="flex mx-auto w-[800px] h-[600px] bg-cyan-50 shadow-lg rounded-lg p-2 mt-16">
      <div className="bg-red-300 basis-2/5">image</div>
      <div className="bg-blue-300 basis-3/5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <p className="self-center mt-8 mb-10 text-xl font-bold">로그인</p>
          <LoginInput
            ref={idRef}
            type="text"
            placeholder="아이디"
            isInputValid={isInputValid.id}
          />
          <LoginInput
            ref={idRef}
            type="password"
            placeholder="비밀번호"
            isInputValid={isInputValid.password}
          />
          <button className="self-end mr-11 mt-2 rounded-full bg-red-300 px-2 py-1 text-lg">
            로그인
          </button>
        </form>
      </div>
    </main>
  );
}
