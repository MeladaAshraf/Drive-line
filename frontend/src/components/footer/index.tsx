import Logo from "../Logo";



const Footer = () => {
  return (
    <footer className="bg-heavyBlueColor text-white py-10">
      <div className="container">
        <div className=" grid md:grid-cols-4  justify-between gap-6">
          <div className="space-y-6">
            <Logo />
            <p className="text-[#b6bad5]">
              Driveline Your Gateway to Automotive Excellence - Explore the road
              ahead with confidence through Driveline. From sleek sedans to
              rugged SUVs, our curated collection offers the perfect blend of
              performance, style, and reliability. Drive your dreams with
              Driveline - Where Every Mile Counts.
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-[#b6bad5]">
              <p>About</p>
              <p>Privacy Policy</p>
              <p>Car Listing</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="text-xl font-bold">Head Office</h3>
            <div className="flex flex-col gap-2 text-[#b6bad5]">
              <p>Marsa Plaza North-Dubai Festival City</p>
              <p>Phone: +79227421412</p>
              <p>Phone: +201222181840</p>
              <p>Email: kerolosashraf755@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
