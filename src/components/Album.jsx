export default function Album(depth, albumName, albumId, ownerFolderId) {
  return (
    <div className="flex" style={{ paddingLeft: `${8 * depth}px` }}>
      <p>
        <i className="fa-solid fa-image"></i>
        {albumName}
      </p>
    </div>
  );
}
