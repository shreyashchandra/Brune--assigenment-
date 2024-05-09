import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const navigate = useNavigate();

  const getProjectsHandler = () => {
    navigate("/get-projects");
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <button
          onClick={getProjectsHandler}
          className="text-xl rounded-full border border-solid border-gray-300 p-5 w-48"
        >
          Get Projects
        </button>
        <button className="text-xl  text-white bg-black p-5 rounded-full w-52">
          Onboard Talent
        </button>
      </div>
    </>
  );
};
