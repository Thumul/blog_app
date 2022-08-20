import "./Register.scss";

import React, { useState } from "react";

type RegisterProps = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function Register(props: RegisterProps) {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [rptPwd, setRptPwd] = useState("");

  function handleUserName(evt: React.FormEvent<HTMLInputElement>) {
    setUserName(evt.currentTarget.value);
  }

  function handlePWD(evt: React.FormEvent<HTMLInputElement>) {
    setPwd(evt.currentTarget.value);
  }

  function handleRptPWD(evt: React.FormEvent<HTMLInputElement>) {
    setRptPwd(evt.currentTarget.value);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setUser(userName);
          props.setStatus("already");
        }}
        className="register-form"
      >
        <label
          htmlFor="register-username"
          className="register-form__name-label"
        >
          Username:
        </label>
        <input
          type="text"
          name="register-username"
          id="register-username"
          className="register-form__name-input"
          value={userName}
          onChange={handleUserName}
        />
        <label htmlFor="register-password" className="register-form__pwd-label">
          Password:
        </label>
        <input
          type="password"
          name="register-password"
          id="register-password"
          className="register-form__pwd-input"
          value={pwd}
          onChange={handlePWD}
        />
        <label
          htmlFor="register-password-repeat"
          className="register-form__pwd-repeat-label"
        >
          Confirm password:
        </label>
        <input
          type="password"
          name="register-password-repeat"
          id="register-password-repeat"
          className="register-form__pwd-repeat-input"
          value={rptPwd}
          onChange={handleRptPWD}
        />
        <div className="register-form__submit-div">
          <input
            type="submit"
            value="Sign UP"
            className="register-form__submit-div--btn"
            disabled={
              userName.length === 0 || pwd.length === 0 || pwd !== rptPwd
            }
          />
        </div>
      </form>
      <div className="already-user">
        <p className="already-user__text">
          Already have account?
          <u
            onClick={() => props.setStatus("")}
            className="already-user__text--link"
          >
            LogIn
          </u>
        </p>
      </div>
    </div>
  );
}
