import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container_fluid relative h-screen">
        <div className="border border-grayMenu/30 rounded p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-auto ">
          <h4 className="text-2xl font-semibold text-headingText">
            Page not found!
          </h4>
          <p className="mt-1 mb-2 text-grayPrimary text-[18px]">
            The page you are looking for doesn&apos;t exist.
          </p>
          <Link to={"/"} className="text-blueActive text-[16px]">
            Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
