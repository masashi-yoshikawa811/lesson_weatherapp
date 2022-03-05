import React from "react";

const button = {
  height: 60,
  width: 100,
  borderRadius: 30,
  background: "#c1d1d8",
};

export const Button = ({ title, OnClick }) => {
  return (
    <div>
      <button style={button} onClick={() => OnClick()}>
        {title}
      </button>
    </div>
  );
};

export const LinkButton = ({ title }) => {
  return (
    <div>
      <button style={button}>{title}</button>
    </div>
  );
};
