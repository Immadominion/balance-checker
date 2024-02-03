import "./keypad.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Balance from "../balance/Balance";
import { useState } from "react";

const KeypadButton = ({ value, onClick }: any) => {
  return (
    <span className="keypad__button" data-value={value} onClick={onClick}>
      {value}
    </span>
  );
};

const Keypad = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeypadButtonClick = (value: any) => {
    setInputValue((prev: string) => prev + value);
  };

  const handleClearButtonClick = () => {
    setInputValue((prev: string) => prev.slice(0, -1));
  };

  return (
    <div className="key-body">
      <Balance cryptoBalance={`${inputValue || 0}`} equivalentInEuro={`${(Number(inputValue) * 20) || 0}`}></Balance>
      <section className="keypad">
        {/* <input type="text" id="amount" value={`${inputValue}`} onChange={function(e){setInputValue(e.target.value)}}/> */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((value) => (
          <KeypadButton
            key={value}
            value={value}
            onClick={() => handleKeypadButtonClick(value)}
          />
        ))}
        <span
          className="clear align-self-center"
          onClick={handleClearButtonClick}
        >
          <MdOutlineKeyboardBackspace />
        </span>
      </section>
    </div>
  );
};

export default Keypad;
