import { Link } from "react-router-dom";
import ava01 from "/images/ava-1.jpg";
import ava02 from "/images/ava-2.jpg";
import ava03 from "/images/ava-3.jpg";
import ava04 from "/images/ava-4.jpg";


const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "juli",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      <div className="container grid grid-cols-4 overflow-hidden gap-4">
        {OUR__MEMBERS.map((item, i) => (
          <div key={i} className="mb-4 ">
            <div className="single__member">
              <div className="single__member-img">
                <img src={item.imgUrl} alt="" className="w-100" />

                <div className="single__member-social">
                  <Link to={item.fbUrl}>
                    <i className="ri-facebook-line"></i>
                  </Link>
                  <Link to={item.twitUrl}>
                    <i className="ri-twitter-line"></i>
                  </Link>

                  <Link to={item.linkedinUrl}>
                    <i className="ri-linkedin-line"></i>
                  </Link>

                  <Link to={item.instUrl}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>

              <h6 className="text-center mb-0 mt-3">{item.name}</h6>
              <p className="section__description text-center">
                {item.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurMembers;
