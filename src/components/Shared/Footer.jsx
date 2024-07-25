import { BebasNeue, poppins, RobotoSlab } from "@/app/fonts";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import Form from "@/components/UI/Form/Form";
import Container from "@/components/Shared/Container";
import Link from "next/link";
import Input from "@/components/UI/Form/Input";
import FormSubmit from "@/components/UI/Form/FormSubmit";

const Footer = () => {
  return (
    <Container className="bg-aqua-squeeze">
      <footer className="xl:px-[40px] pt-24 pb-14">
        <div>
          <div className="grid grid-cols-12 md:grid-cols-6 lg:grid-cols-12 lg:gap-5 gap-y-14">
            <div className="col-span-12 lg:col-span-4 md:col-span-4">
              <h4
                className={`${BebasNeue.className} uppercase lg:text-[39px] text-2xl lg:mb-[35px] mb-6`}
              >
                timber trove
              </h4>

              <p className={`capitalize ${RobotoSlab.className} font-medium`}>
                social media
              </p>

              <div className={`text-[30px] flex gap-7 mt-[18px]`}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:text-blaze-orange transition ease-linear duration-500"
                >
                  <AiOutlineFacebook />
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="hover:text-blaze-orange transition ease-linear duration-500"
                >
                  <RxTwitterLogo />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:text-blaze-orange transition ease-linear duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 lg:col-span-3">
              <div className="grid lg:grid-cols-2 gap-14">
                <div>
                  <h6
                    className={`text-[17px] ${RobotoSlab.className}  font-medium mb-5 uppercase`}
                  >
                    Shop
                  </h6>

                  <div className={`${poppins.className} font-medium`}>
                    <Link
                      href="/products"
                      className="my-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Products
                    </Link>
                    <Link
                      href="/overview"
                      className="my-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/pricing"
                      className="mb-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/releases"
                      className="block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Releases
                    </Link>
                  </div>
                </div>

                <div>
                  <p
                    className={`${RobotoSlab.className} font-medium text-[17px] mb-5 uppercase`}
                  >
                    company
                  </p>
                  <div className={`${poppins.className} font-medium`}>
                    <Link
                      href="/about-us"
                      className="my-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="my-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/news"
                      className="mb-[14px] block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      News
                    </Link>
                    <Link
                      href="/support"
                      className="block hover:text-blaze-orange transition ease-linear duration-500"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex lg:justify-end">
              <div className=" h-full max-w-[382px]">
                <h6
                  className={`${RobotoSlab.className} font-medium text-[17px] mb-5 uppercase`}
                >
                  stay up to date
                </h6>

                <Form>
                  <Input className="w-[calc(100%-90px)] sm:w-[390px]" />
                  <FormSubmit className="uppercase px-4 py-[10px] w-[90px] h-[44px]" />
                </Form>
              </div>
            </div>
          </div>

          {/* Footer Bottom Links */}
          <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-7 items-center lg:mt-[120px] mt-14">
            <div className="lg:col-span-4 md:col-span-3 col-span-2 h-[1.5px] bg-black mr-[27px]"></div>
            <div
              className={`lg:col-span-1 md:col-span-2 col-span-5 ${poppins} font-semibold flex gap-[27px] mr-4`}
            >
              <Link
                className="hover:text-blaze-orange transition ease-linear duration-500"
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="hover:text-blaze-orange transition ease-linear duration-500"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="hover:text-blaze-orange transition ease-linear duration-500"
                href="/cookies"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
