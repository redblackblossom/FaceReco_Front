export default function LoginPage() {
  let inputBoxClass =
    "my-6 self-center w-96 h-10 rounded-lg placeholder:gray-400 pl-4 py-6";
  return (
    <main className="flex mx-auto w-[800px] h-[600px] bg-cyan-50 mt-20 shadow-lg rounded-lg p-2">
      <article className="bg-red-300 basis-2/5">image</article>
      <article className="bg-blue-300 basis-3/5">
        <section className="flex flex-col">
          <p className="self-center mt-8 mb-10 text-xl font-bold">로그인</p>
          <input className={inputBoxClass} type="text" placeholder="아이디" />
          <input
            className={inputBoxClass}
            type="password"
            placeholder="비밀번호"
          />
          <button className="self-end mr-11 mt-2 rounded-full bg-red-300 px-2 py-1 text-lg">
            로그인
          </button>
        </section>
      </article>
    </main>
  );
}
