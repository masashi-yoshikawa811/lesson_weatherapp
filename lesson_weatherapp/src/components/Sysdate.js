import React, { useState } from "react";

export const Sysdate = () => {
  const [sysdateToString, setSysdateToString] = useState("");
  const sysdate = new Date();

  if (sysdateToString.charAt(0) !== (sysdate.getMonth() + 1).toString()) {
    const sysdateMonth = (sysdate.getMonth() + 1).toString();
    const sysdateDay = sysdate.getDate().toString();
    setSysdateToString(sysdateMonth + "月" + sysdateDay + "日");
  }
  return <span>{sysdateToString}</span>;
};

export default Sysdate;
