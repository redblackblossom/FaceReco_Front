import { useState, useRef, useEffect } from "react";
import Album from "./Album";
import ContextMenu from "./ContextMenu";
export default function Folder({
  depth,
  folderName,
  folderId,
  folders,
  albums,
}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [menuState, setMenuState] = useState({ visible: false, x: 0, y: 0 });

  const contextMenuRef = useRef();

  useEffect(() => {
    function outsideClick(e) {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        setMenuState({
          visible: false,
          x: 0,
          y: 0,
        });
      }
    }
    if (menuState) {
      document.addEventListener("mousedown", outsideClick);
    }
    return () => {
      if (menuState.visible) {
        document.removeEventListener("mousedown", outsideClick);
      }
    };
  }, [menuState]);

  function handleContextMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    setMenuState({
      visible: true,
      x: event.pageX,
      y: event.pageY,
    });
  }

  function handleFolderOpen() {
    setIsFolderOpen((prev) => !prev);
  }

  return (
    <>
      <div className="flex " style={{ paddingLeft: `${8 * depth}px` }}>
        <div
          className="flex hover:bg-indigo-300 cursor-pointer rounded-md px-1"
          onClick={handleFolderOpen}
          onContextMenu={handleContextMenu}
        >
          <i className="fa fa-folder pr-1 mt-1"></i>
          <p>{folderName}</p>
          <button>
            {!isFolderOpen && (
              <i className="fa fa-caret-down text-lg pl-1 "></i>
            )}
            {isFolderOpen && <i className="fa fa-caret-up text-lg pl-1"></i>}
          </button>
        </div>
        {menuState.visible && (
          <ContextMenu
            x={menuState.x}
            y={menuState.y}
            contextType="FOLDER"
            ref={contextMenuRef}
            id={folderId}
          />
        )}
      </div>
      {isFolderOpen && (
        <>
          {folders
            .filter((folder) => folder.parentFolder === folderId)
            .map((folder) => (
              <Folder
                depth={depth + 1}
                folderName={folder.folderName}
                folderId={folder.folderId}
                folders={folders}
                albums={albums}
                key={folder.folderId}
              />
            ))}
          {albums
            .filter((album) => album.ownerFolderId === folderId)
            .map((album) => (
              <Album
                depth={depth + 1}
                albumName={album.albumName}
                albumId={album.albumId}
                ownerFolderId={album.ownerFolderId}
                key={album.albumId}
              />
            ))}
        </>
      )}
    </>
  );
}
