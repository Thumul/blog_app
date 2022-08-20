import './Logout.scss';
import React from "react";

type LogoutProps = {
  user: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

function Logout(props: LogoutProps): JSX.Element {
  return (
    <div className="logout">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setStatus("");
        }}
        className = "logout__form"
      >
        <p className="logout__title">Logged in as : </p>
        <p className="logout__name">{props.user}</p>
        <input type="submit" value="Logout" className="logout__btn"/>
      </form>
    </div>
  );
}

export default Logout;
