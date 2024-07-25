import assets from "@/assets";
import Image from "next/image";
import Form from "@/components/UI/Form/Form";
import Input from "@/components/UI/Form/Input";
import { poppins } from "@/app/fonts";
import FormSubmit from "@/components/UI/Form/FormSubmit";
import { TfiEmail } from "react-icons/tfi";

const StayConnected = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] relative bg-aqua-spring">
      {/* Left column */}
      <div className="flex flex-col justify-center items-center h-[370px]">
        <div>
          <div
            className={`${poppins.className} mb-[30px] flex items-center px-4`}
          >
            <TfiEmail className="mr-3 text-3xl" />
            <p>
              Subscribe to get $30 off*
              <br /> your first order
            </p>
          </div>

          <div className="px-4">
            <Form>
              <Input className="h-[57px] w-[calc(100%-115px)] sm:w-[372px]" />
              <FormSubmit className="capitalize text-sm px-[34px] py-[18px] h-[57px]" />
            </Form>
          </div>
        </div>
      </div>

      {/* right column */}
      <Image
        src={assets.images.stayConnected}
        height={370}
        width={753}
        alt="stay connected image"
        className="h-[370px] w-full"
      />
    </div>
  );
};

export default StayConnected;
