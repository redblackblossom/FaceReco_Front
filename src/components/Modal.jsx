import { createPortal } from "react-dom";

export default function Modal() {
  console.log("modal");
  return createPortal(
    <div className="z-40">
      <p>폴더 생성창!</p>
    </div>,
    document.getElementById("modal")
  );
}
