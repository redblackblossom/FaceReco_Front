export default function Album({ depth, albumName, albumId, ownerFolderId }) {
  return (
    <div className="flex relative" style={{ paddingLeft: `${8 * depth}px` }}>
      <div className="flex hover:bg-indigo-300 cursor-pointer rounded-md px-1">
        <i className="fa fa-image mr-1 mt-1"></i>
        <p>{albumName}</p>
      </div>
    </div>
  );
}
