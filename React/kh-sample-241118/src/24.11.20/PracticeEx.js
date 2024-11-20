import { useEffect, useState } from "react";

const Submit = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [compAddr, setCompAddr] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

  const [submitted, setSubmitted] = useState(false);
  const onClick = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className="container">
        <div>
          이름
          <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
          />
        </div>
        <div>
          직책
          <input
            type="text"
            value={job}
            onChange={(e) => handleInputChange(e, setJob)}
          />
        </div>
        <div>
          회사명
          <input
            type="text"
            value={company}
            onChange={(e) => handleInputChange(e, setCompany)}
          />
        </div>
        <div>
          회사주소
          <input
            type="text"
            value={compAddr}
            onChange={(e) => handleInputChange(e, setCompAddr)}
          />
        </div>
        <div>
          이메일
          <input
            type="text"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
          />
        </div>
        <div>
          전화번호
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
          />
        </div>
        <button onClick={onClick}>제출</button>
      </div>
      {submitted && (
        <div className="display">
          <p>이름:{name}</p>
          <p>직책:{job}</p>
          <p>회사명:{company}</p>
          <p>회사주소:{compAddr}</p>
          <p>이메일:{email}</p>
          <p>전화번호:{phoneNumber}</p>
        </div>
      )}
    </>
  );
};
export default Submit;
