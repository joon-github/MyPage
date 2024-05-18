import React, { useState } from "react";
import Image from "next/image";

const Career = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <article className="flex flex-col h-full justify-center pb-[100px]">
      <h3 className="text-2xl mb-10 text-blue-900">WORK</h3>
      <div className="flex flex-col justify-between gap-8">
        <div className="text-2xl font-bold">2023/01/02 ~ ing</div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <p className="text-xl font-bold">MSBENTER (주)</p>
            <div>
              <h4 className="mb-4">주요업무</h4>
              <ul className="flex flex-col gap-2">
                <li> • 프렌차이즈 ERP 모듈 개발 및 유지 보수</li>
                <li> • 사내 그룹웨어 개발 및 유지 보수</li>
                <li> • 발주 프로그램 개발 및 유지 보수</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            {["/image/ERP.png", "/image/ERP2.png", "/image/ERP3.png"].map(
              (src) => (
                <div
                  key={src}
                  onClick={() => handleImageClick(src)}
                  className="cursor-pointer"
                >
                  <Image src={src} width={800} height={800} alt="msbenter" />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              width={1600}
              height={1600}
              alt="Large view"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl z-10"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Career;
