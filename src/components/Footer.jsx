export const Footer = () => {
  return (
    <>
      <div className="text-sm md:text-lg bg-accordian-footer p-3 md:p-10 md:mx-32 mt-16 mb-16 flex justify-between items-center rounded-3xl">
        <div className="flex gap-1">
          &#169;
          <p>Talup 2023. All rights reserved</p>
        </div>
        <div className="flex gap-3 md:gap-10 tex-sm">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};
