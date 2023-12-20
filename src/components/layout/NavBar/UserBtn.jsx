import React from "react";
import CircleDiv from "./CircleDiv";
import userIcon from "../../../assets/user-icon.svg";

export default function UserBtn() {
  return (
    <CircleDiv size={40} className="primary d-flex align-center just-center">
      <img src={userIcon} width={20} height={20} />
    </CircleDiv>
  );
}
