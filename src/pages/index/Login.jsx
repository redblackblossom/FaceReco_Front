import { Link, Form, redirect, json, useActionData } from "react-router-dom";

import LoginInput from "../../components/LoginInput.jsx";

export default function LoginPage() {
  const data = useActionData();
  console.log(data);
  return (
    <main className="flex mx-auto w-[800px] h-[600px] bg-cyan-50 shadow-lg rounded-lg p-2 mt-16">
      <div className="bg-red-300 basis-2/5">image</div>
      <div className="bg-blue-300 basis-3/5">
        <Form method="post" className="flex flex-col">
          <p className="self-center mt-8 mb-10 text-xl font-bold">로그인</p>

          <LoginInput
            type="text"
            placeholder="아이디"
            isRequired={true}
            minLength={6}
            name="userId"
          />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            isRequired={true}
            minLength={6}
            name="pwd"
          />
          <div className="flex justify-end">
            <Link
              to="signup"
              className="mr-6  rounded-full bg-red-300 px-2 py-1 text-lg"
            >
              회원가입
            </Link>
            <button className="mr-10  rounded-full bg-red-300 px-2 py-1 text-lg">
              로그인
            </button>
          </div>
        </Form>
        <div className="text-center mt-10">
          <p>공지사항</p>
        </div>
      </div>
    </main>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    userId: data.get("userId"),
    pwd: data.get("pwd"),
  };

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    console.log(111);
    return response;
  }
  if (!response.ok) {
    console.log(222);
    throw json({ message: "Could not autehnticate user." }, { status: 500 });
  }
  console.log(333);
  return redirect("/");
}
