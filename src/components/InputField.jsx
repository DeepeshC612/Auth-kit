const InputField = ({ label, ...props }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        className="w-full  py-2 border-b border-b-blue-500 focus:outline-none "
        {...props}
      />
    </div>
  );
export default InputField;
  