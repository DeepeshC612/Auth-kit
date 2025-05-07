import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiEyeCloseFill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";


const PasswordInput = ({ label, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium mb-1 text-gray-600">{label}</label>
      <input
        type={show ? 'text' : 'password'}
        className="w-full py-2 border-b border-b-blue-500 focus:outline-none pr-10"
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute cursor-pointer right-2 top-8 text-sm text-blue-500"
      >
        {show ? <RiEyeFill size={18} /> : <RiEyeCloseFill size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;
