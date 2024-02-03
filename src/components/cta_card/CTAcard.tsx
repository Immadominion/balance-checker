import "./CTAcard.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

const CTAcard = () => {
  return (
    <>
      <FaShieldAlt className="trust-icon" color="black" />
      <span className="text flex-grow-1 align-self-center">
        Back up your wallet in case
        <br /> you lose access
      </span>
      <FaAngleRight strokeWidth={1} className="align-self-center" />
    </>
  );
};

export default CTAcard;
