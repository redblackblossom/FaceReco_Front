import { useState } from "react";

import Modal from "./Modal";

export default function FolderContextMenu({ folderId }) {
  const [renderModal, setRenderModal] = useState(false);

  function handleAddFolder() {
    console.log(folderId);
    setRenderModal((prev) => !prev);
  }
  const style = "hover:bg-gray-300 rounded-md";
  return (
    <ul className="">
      <li className={style} onClick={handleAddFolder}>
        폴더 추가
      </li>
      <li className={style}>앨범 추가</li>
      <li className={style}>폴더 삭제</li>
      <li className={style}>폴더 이름 변경</li>
      {renderModal && <Modal />}
    </ul>
  );
}
