import "./Login.scss";

import React, { useState } from "react";

type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function Login(props: LoginProps) {
  const [userName, setUserName] = useState("");

  function handleUserName(evt: React.FormEvent<HTMLInputElement>) {
    setUserName(evt.currentTarget.value);
  }

  return (
    <div className = "login-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setUser(userName);
          props.setStatus("already");
        }}
        className="login-form"
      >
        <label htmlFor="login-username" className="login-form__name-label">
          Username:
        </label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          className="login-form__name-input"
          onChange={handleUserName}
          value={userName}
        />
        <label htmlFor="login-password" className="login-form__pwd-label">
          Password:
        </label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          className="login-form__pwd-input"
        />
        <div className="login-form__submit-div">
          <input
            type="submit"
            value="Login"
            className="login-form__submit-div--btn"
            disabled={userName.length === 0}
          />
        </div>
      </form>
      <div className="new-user">
        <p className="new-user__text">New User?<u onClick={() => props.setStatus("new")} className="new-user__text--link">SignUP</u></p>
        
      </div>
    </div>
  );
}
