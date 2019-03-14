import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

const Skjema1 = ({ lagre1 }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        lagre1(value);
        reset();
      }}
    >
      <div className="topp-container">
        <button className="ny" value={value}>
          + Ny
        </button>

        <TextField
          className="sok"
          pointerEvents="none"
          placeholder=" Søk etter sider..."
          onChange={onChange}
          value={value}
        />
      </div>
    </form>
  );
};

export default Skjema1;
