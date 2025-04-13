import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const ProfileImage = () => {
  const profileImage = "";
  return (
    <Link href={"/profile"}>
      <Image
        className={`object-cover rounded-full`}
        src={profileImage || "/user-default.png"}
        width={540}
        height={540}
        alt="Profile-Image"
      />
    </Link>
  );
};

export default ProfileImage;
