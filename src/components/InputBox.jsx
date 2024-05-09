const InputBox = ({ placeholder, type, onChange }) => {
  return (
    <>
      <div className="w-full">
        <input
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="rounded-full bg-gray-200 p-3 text-gray-700"
        />
      </div>
    </>
  );
};

export default InputBox;
