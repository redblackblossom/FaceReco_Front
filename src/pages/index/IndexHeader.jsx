import logo from "../../image/flower.jpg";

export default function IndexHeaderPage() {
  return (
    <header className="flex bg-sky-500/20 rounded-lg">
      <img className="w-24 ml-4 mt-4 mr-12 mb-4" src={logo} />
      <nav className="flex self-center">
        <ul className="flex self-center">
          <li className="mx-3">
            <a href="#"> 얼굴인식 기반 웹서비스</a>
          </li>
          <li className="mx-3">
            <a href="#">기능</a>
          </li>
          <li className="mx-3">
            <a href="#">사용법</a>
          </li>
          <li className="mx-3">
            <a href="#">가격</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
