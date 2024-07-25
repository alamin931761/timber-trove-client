import assets from "@/assets";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={assets.images.notFound}
          height={840}
          width={1300}
          alt="404"
        />

        {/* back to home */}
        <div className="h-full py-10">
          <button className="btn btn-outline transition ease-linear duration-500">
            <Link href="/" className="capitalize">
              <FaArrowLeft className="inline me-1" />
              back to home
            </Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
