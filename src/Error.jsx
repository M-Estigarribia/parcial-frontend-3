import React from "react";

function Error({error}) {
  return (
    <div className={error ? "display-error" : "error-hidden"}>
      <p className="error">Por favor, chequea que la información sea correcta.</p>
    </div>
  );
};

export default Error;