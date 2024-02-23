import { Link } from "react-router-dom";

import logo from "../../image/flower.jpg";

export default function IndexHeaderPage() {
  return (
    <header className="flex bg-sky-500/20 rounded-lg">
      <img className="w-24 ml-4 mt-4 mr-12 mb-4" src={logo} />
      <nav className="flex self-center">
        <ul className="flex self-center">
          <li className="mx-3">
            <Link to=""> 인공지능 기반 태그 클라우드 서비스 {"   "}</Link>
          </li>
          <li className="mx-3">
            <Link to="">기능</Link>
          </li>
          <li className="mx-3">
            <Link to="">사용법</Link>
          </li>
          <li className="mx-3">
            <Link to="">가격</Link>
          </li>
          <li className="mx-3">
            <Link to="signup">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
