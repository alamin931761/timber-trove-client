import { bebas_neune, poppins, roboto_slab } from "@/app/fonts";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import Form from "@/components/UI/Form/Form";
import Container from "@/components/Shared/Container";

const Footer = () => {
  return (
    <Container className="bg-aqua-squeeze">
      <footer className="px-[140px] pt-24 pb-14 bg-aqua-squeeze">
        <div>
          <div className="grid grid-cols-3 gap-20">
            <div>
              <h4
                className={`${bebas_neune.className} uppercase text-[39px] mb-[35px]`}
              >
                timber trove
              </h4>

              <p className={`capitalize ${roboto_slab.className} font-medium`}>
                social media
              </p>

              <div className={`text-[30px] flex gap-7 mt-[18px]`}>
                <AiOutlineFacebook />
                <RxTwitterLogo />
                <FaInstagram />
              </div>
            </div>

            <div className="flex justify-around">
              <div>
                <h6
                  className={`text-[17px] ${roboto_slab.className}  font-medium mb-5 uppercase`}
                >
                  Shop
                </h6>

                <div className={`${poppins.className} font-medium`}>
                  <p>Products</p>
                  <p className="my-[14px]">Overview</p>
                  <p className="mb-[14px]">Pricing</p>
                  <p>Releases</p>
                </div>
              </div>

              <div>
                <p
                  className={`${roboto_slab.className} font-medium text-[17px] mb-5 uppercase`}
                >
                  company
                </p>
                <div className={`${poppins.className} font-medium`}>
                  <p>About Us</p>
                  <p className="my-[14px]">Contact</p>
                  <p className="mb-[14px]">News</p>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div>
              <h6
                className={`${roboto_slab.className} font-medium text-[17px] mb-5 uppercase`}
              >
                stay up to date
              </h6>

              <Form />
            </div>
          </div>

          <div className="grid grid-cols-5 items-center mt-[120px]">
            <div className="col-span-4 h-[1.5px] bg-black mr-[27px]"></div>
            <div
              className={`col-span-1 ${poppins} font-semibold flex gap-[27px]`}
            >
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
