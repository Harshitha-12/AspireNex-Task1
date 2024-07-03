import { faEarth, faRocket, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  {
    type: "Web Development",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        Are you ready to take your brand to the next level? I can develop fullstack web applications for the {" "}
        <span className="text-cyan-500">brand</span>.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faEarth} className="text-5xl" />,
  },
  {
    type: "Data Structures and Algorithms",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        My Major interest is in problems solving. <span className="text-cyan-500">As a coder, If you have a problem</span>? Find me!
      </p>
    ),
    icon: <FontAwesomeIcon icon={faServer} className="text-5xl" />,
  },
  {
    type: "JAVA",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I build robust, scalable, secure and easily accessible JAVA applications also using the latest and most secure technology.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faRocket} className="text-5xl" />,
  },
];

export default services;
