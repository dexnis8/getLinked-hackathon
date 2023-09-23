// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GradientButton } from "../../components/Buttons";

const PageNotFound = () => {
  return (
    <section className="overflow-hidden mx-auto relative min-h-[100vh]">
      {/* <div className={`absolute z-10 right-0 left-0 top-[140px] md:top-5`}>
        <h2
          className={`text-[262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#D9D9D975]/5 to-[#D9D9D900] text-center`}
        >
          404
        </h2>
      </div> */}
      <div className={`absolute -z-50 right-0 left-0 top-[145px] md:-top-4`}>
        <h2
          className={`text-[262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#FFFFFF03]/5 to-[#D9D9D900] text-center`}
        >
          404
        </h2>
      </div>

      <div className={`mt-[200px] md:mt-[100px] relative`}>
        {/* <p
          className={`absolute top-0 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#FFFFFF03]/40 to-[#D9D9D900] text-center`}
        >
          404
        </p> */}
        <p
          className={`absolute top-3 lg:top-6 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-[#FFFFFF66] from-[#FFFFFF66] to-[#D9D9D900] text-center`}
        >
          404
        </p>
      </div>

      <div
        className={`mt-[340px] md:mt-[250px] lg:mt-[400px] text-center mx-auto`}
      >
        <h3 className="text-[23px] text-white font-semibold font-clashbold">
          The requested page is currently unavailable
        </h3>
        <p
          className={`text-[#FFFFFF99] text-center mx-auto max-w-sm px-3 text-sm mt-2 mb-10 font- font-medium`}
        >
          Kindly go back to our home page
        </p>

        <Link to="/" className="pt-5">
          <GradientButton text="Home" />
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
