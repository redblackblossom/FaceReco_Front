import LoginInput from "../../components/LoginInput";

export default function SignupPage() {
  return (
    <main className="flex mx-auto w-[800px] h-[600px] bg-cyan-100 shadow-lg rounded-lg p-2 mt-16 justify-center ">
      <form className="flex flex-col  text-center">
        <h1 className="p-6 text-lg">회원가입</h1>
        <LoginInput
          type="text"
          placeholder="아이디"
          isRequired={true}
          minLength={6}
          name="userId"
        >
          <p>사용 가능</p>
          <button className="rounded-full bg-red-300 ml-auto">중복확인</button>
        </LoginInput>
        <LoginInput
          type="password"
          placeholder="비밀번호"
          isRequired={true}
          minLength={6}
          name="pwd"
        />
        <LoginInput
          type="password"
          placeholder="비밀번호 확인"
          isRequired={true}
          minLength={6}
        />
        <LoginInput
          type="text"
          placeholder="이름"
          isRequired={true}
          name="name"
        />
        <LoginInput
          type="email"
          placeholder="이메일"
          isRequired={true}
          minLength={6}
          name="email"
        />
        <div className="flex justify-end">
          <button className="rounded-full bg-red-300 px-2 py-1 text-lg">
            제출
          </button>
        </div>
      </form>
    </main>
  );
}
