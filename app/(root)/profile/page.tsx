import ProfileImage from "@/components/ProfileImage";
import { getCurrentUser } from "@/lib/actions/auth.action";
import Image from "next/image";
import React, { use } from "react";

const ProfilePage = async () => {
  const user = await getCurrentUser();

  return (
    <section className="flex flex-col gap-8 max-w-5xl mx-auto max-sm:px-4 text-lg leading-7">
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl font-semibold">User Profile</h1>
      </div>
      <hr />
      <div className="flex flex-row my-4">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row">
            <div className="size-28">
              <Image
                className="rounded-full object-cover"
                src={user?.profileImage || "/user-default.png"}
                width={540}
                height={540}
                alt="user image"
              />
            </div>
            <div className="bg-primary-200 rounded-full size-8 mt-18 -ml-8 justify-center items-center">
              <Image
                className="scale-50"
                src={"/pen.png"}
                width={100}
                height={100}
                alt="pen"
              />
            </div>
          </div>

          <div className="flex flex-col ml-12 gap-2">
            <h2 className="text-primary-100">
              {user?.name} {user?.surname}
            </h2>
            <p className="text-white text-lg opacity-80">
              {user?.location || "Torino, Italia"}
            </p>
            <p className="text-white text-sm opacity-80">
              Last edit: {user?.lastEdit || "---"}
            </p>
          </div>
        </div>
      </div>

      {/* form fields */}
      <form>
        <div className="flex flex-row gap-8 md:gap-10 mt-4">
          <div className="flex flex-col">
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Name
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="text"
                name="name"
                id="name"
                defaultValue={user?.name}
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Email Address
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="email"
                name="email"
                id="email"
                defaultValue={user?.email}
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Age
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="date"
                name="age"
                id="age"
                defaultValue={user?.age}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Surname
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="text"
                name="surname"
                id="surname"
                defaultValue={user?.surname}
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Phone Number
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="text"
                name="phone"
                id="phone"
                defaultValue={user?.phone}
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="opacity-75 mb-2 ml-2" htmlFor="name">
                Location
              </label>
              <input
                className="text-xl bg-primary-100/15 p-2 text-center rounded-full border-2"
                type="text"
                name="location"
                id="location"
                defaultValue={user?.location}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-14">
          <button
            type="submit"
            className="btn-primary w-full md:mr-2 py-2 mt-6"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="btn-secondary w-full md:ml-2 py-2 mt-6"
          >
            Discard Changes
          </button>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <button
            /* onClick={} */
            type="button"
            className="bg-dark-200 text-red-600 rounded-full !font-bold px-5 cursor-pointer min-h-10 w-full md:mr-2 py-2 mt-6"
          >
            Log Out
          </button>
          <button
            type="button"
            className="flex flex-row justify-center items-center bg-red-600 text-dark-100 rounded-full font-extrabold px-5 cursor-pointer min-h-10 w-full md:ml-2 py-2 mt-6"
          >
            <Image
              className="mr-2 w-fit h-fit object-cover"
              src={"/bin.png"}
              width={12}
              height={12}
              alt="bin"
            />
            Delete Account
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
