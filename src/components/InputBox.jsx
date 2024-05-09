const InputBox = ({ placeholder, type }) => {
  return (
    <>
      <div className="w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="rounded-full bg-gray-200 p-3 text-gray-700"
        />
      </div>
    </>
  );
};

export default InputBox;
