import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-primary bg-[#0f0f0f6f]">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="md:mr-auto">
              <p className="text-4xl font-extrabold text-center md:text-5xl md:text-start">
                Harshitha<span className="text-primary">.</span>
              </p>
            </div>

            <div className="text-center text-white md:text-start md:ml-auto">
              <div>
                <ul className="flex justify-center space-x-4 md:justify-start">
                  <li>
                    <Link href={"/"}>
                      <p className="inline-block duration-200 hover:text-primary">Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>
                      <p className="inline-block duration-200 hover:text-primary">Contact</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>
                      <p className="inline-block duration-200 hover:text-primary">Projects</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-center space-x-4 text-2xl md:justify-start">
                  <Link href={"https://www.linkedin.com/in/harshitha-manukonda-2645a0259/"} target="_blank">
                    <i className="cursor-pointer ri-linkedin-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center">
            <p className="text-sm font-semibold text-white">@MHarshitha - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
