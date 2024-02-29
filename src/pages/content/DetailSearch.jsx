import { forwardRef } from "react";

const DetailSearchPage = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-[500px] mt-20 mx-1 border-2 border-gray-400 rounded-lg shadow-xl float-left absolute"
    >
      <p>상세 검색 내용 추가 예정</p>
    </div>
  );
});

DetailSearchPage.displayName = "DetailSearchPage";
export default DetailSearchPage;
