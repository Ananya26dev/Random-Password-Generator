import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCopy } from "react-icons/io5";
import "./PasswordGenerator.css";
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [copyMsg, setCopyMsg] = useState(false);
  const generatePassword = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPassword(password);
  };
  const copyMessage = () => {
    navigator.clipboard.writeText(password);
    setCopyMsg(true);
    setTimeout(() => {
      setCopyMsg(false);
    }, 2000);
  };
  return (
    <>
      <div className="password-container">
        <h2>Generate a Random Password</h2>
        <div className="password-display">
          <input type="text" value={password} readOnly />
          <button onClick={copyMessage}>
            <span role="img" aria-label="copy">
              <IoCopy />
            </span>
          </button>
        </div>
        {copyMsg && (
          <div className="copy-Message">Password Copy to the Clipboard</div>
        )}
        <button className="generate-button" onClick={generatePassword}>
          <span role="img" aria-label="copy">
            <RiLockPasswordFill />
          </span>{" "}
          Generate Password
        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;
