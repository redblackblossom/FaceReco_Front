import { forwardRef } from "react";
import { createPortal } from "react-dom";

import FolderContextMenu from "./FolderContextMenu";

const ContextMenu = forwardRef((props, ref) => {
  return createPortal(
    <div
      className="px-1 bg-gray-200  z-50 rounded-lg"
      style={{
        position: "absolute",
        top: `${props.y}px`,
        left: `${props.x}px`,
      }}
      ref={ref}
    >
      {props.contextType === "FOLDER" && (
        <FolderContextMenu folderId={props.id} />
      )}
    </div>,
    document.getElementById("contextMenu")
  );
});

ContextMenu.displayName = "ContextMenu";
export default ContextMenu;
