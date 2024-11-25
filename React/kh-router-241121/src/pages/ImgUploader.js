import { useState } from "react";
import { storage } from "../api/firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null); //로컬 파일 경로
  const [url, setUrl] = useState(""); // 업로드 후 파이어베이스 URL경로

  /// 업로드 할 파일 선택
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 업로드 버튼 클릭
  const handleUploadClick = () => {
    if (!file) {
      alert("파일을 먼저 선택하세요.");
      return;
    }
    const storageRef = storage.ref(); // Fileebase Storage 참조
    const fileRef = storageRef.child(file.name);
    fileRef
      .put(file) // 파일 업로드

      .then(() => {
        console.log("파일 업로드 성공");
        return fileRef.getDownloadURL(); // 업로드된 파일을 url을 가져옴
      })
      .then((downloadUrl) => {
        console.log("저장된 경로 : ", downloadUrl);
        setUrl(downloadUrl);
      })
      .catch((error) => {
        console.log("업로드 중 에러 발생 : ", error);
      });
  };

  return (
    <>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>파일 업로드</button>
      {url && <img src={url} alt="파일 없음" />}
    </>
  );
};

export default ImageUploader;
