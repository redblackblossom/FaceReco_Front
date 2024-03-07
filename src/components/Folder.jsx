import { useState } from "react";

export default function Folder({
  depth,
  folderName,
  folderId,
  folders,
  albums,
}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  function handleFolderOpen() {
    setIsFolderOpen((prev) => !prev);
  }

  return (
    <>
      <div className="flex" style={{ paddingLeft: `${8 * depth}px` }}>
        <div
          className="flex hover:bg-indigo-300 cursor-pointer rounded-md px-1"
          onClick={handleFolderOpen}
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
      </div>
      {isFolderOpen &&
        folders
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
    </>
  );
}
