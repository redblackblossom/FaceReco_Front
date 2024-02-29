import { useState, useEffect, useRef } from "react";

import DetailSearchPage from "./DetailSearch";

export default function ContentHeaderPage() {
  const [isDetailSearch, setIsDetailSearch] = useState(false);

  const detailSearchRef = useRef();
  const detailButtonRef = useRef();

  function handleDetailSearch() {
    setIsDetailSearch((prev) => !prev);
  }

  useEffect(() => {
    function outsideClick(e) {
      if (
        detailSearchRef.current &&
        detailButtonRef.current &&
        !detailSearchRef.current.contains(e.target) &&
        !detailButtonRef.current.contains(e.target)
      ) {
        setIsDetailSearch(false);
      }
    }
    if (isDetailSearch) {
      document.addEventListener("mousedown", outsideClick);
    }
    return () => {
      if (isDetailSearch) {
        document.removeEventListener("mousedown", outsideClick);
      }
    };
  }, [isDetailSearch]);

  return (
    <header className="flex bg-sky-500/20 rounded-lg fixed top-0 left-0 w-full h-24 justify-between">
      <div className="w-56 bg-red-500/20 shrink-0">
        <p>로고 자리</p>
      </div>
      <div className="flex flex-col relative shrink w-1/2 min-w-96">
        <div className="flex my-auto ml-1 h-12 rounded-full shadow-md pl-6 bg-white">
          <input type="text" className="w-11/12 text-lg bg-yellow-100" />
          <button className="my-auto rounded-xl hover:bg-slate-300">
            <i className="fas fa-search fa-lg m-2"></i>
          </button>
          <button
            className="my-auto rounded-xl hover:bg-slate-300 mr-4"
            onClick={handleDetailSearch}
            ref={detailButtonRef}
          >
            <i className="fas fa-sliders-h fa-lg m-2" aria-hidden="true"></i>
          </button>
        </div>
        {isDetailSearch && <DetailSearchPage ref={detailSearchRef} />}
      </div>
      <div className="flex ml-auto mr-4 shrink-0">
        <button className="bg-yellow-300 h-12 my-auto px-4 rounded-xl">
          <p>아이디, 환경설정</p>
        </button>
      </div>
    </header>
  );
}
