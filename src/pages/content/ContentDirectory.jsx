import { useState, useEffect } from "react";

import Folder from "../../components/Folder";
import Album from "../../components/Album";

export default function ContentDirectoryPage() {
  const [allDirectories, setAllDirectories] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchAllDirectories() {
      try {
        const jwt = localStorage.getItem("Authorization");
        const response = await fetch("http://localhost:8080/api/directories", {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
            "Access-Control-Allow-Headers": "Content-Type,Authorization",
            Authorization: jwt,
          },
        });
        if (response.ok) {
          const directories = await response.json();
          setAllDirectories(directories);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("백앤드 연결 실패!");
      }
    }
    fetchAllDirectories();
  }, []);

  if (isLoading) {
    return (
      <aside className="flex w-56 h-screen">
        <div className="bg-red-300 w-full mt-24 overflow-auto pl-4 pt-2">
          <p>loading...</p>
        </div>
      </aside>
    );
  }

  const folders = allDirectories.folders;
  const albums = allDirectories.albums;
  return (
    <aside className="flex w-56 h-screen">
      <div className="bg-red-300 w-full mt-24 overflow-auto pl-4 pt-2">
        {folders
          .filter((folder) => folder.parentFolder === null)
          .map((folder) => {
            return (
              <Folder
                depth={0}
                folderName={folder.folderName}
                folderId={folder.folderId}
                folders={folders}
                albums={albums}
                key={folder.folderId}
              ></Folder>
            );
          })}
        {albums
          .filter((album) => album.ownerFolderId === null)
          .map((album) => (
            <Album
              depth={0}
              albumName={album.albumName}
              albumId={album.albumId}
              ownerFolderId={album.ownerFolderId}
              key={album.albumId}
            />
          ))}
      </div>
    </aside>
  );
}
