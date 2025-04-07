import React, { useContext } from "react";
import UserRepos from "../components/userRepos";
import { LookUpContext } from "../../contexts/lookup";
import ProfileSkeleton from "../components/ProfileSkeleton";

function UserProfile() {
  const { fetching, userProfile, userRepositories } = useContext(LookUpContext);


  // Example items, to simulate fetching from another resources.

  return (
    <div style={{ scrollbarWidth: 0 }}>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      {!fetching && !userProfile ? (
        <div className="text-center p-4 py-8 bg-white rounded-lg font-semibold text-gray-500">Search for a user to view their profile</div>
      ) : (fetching ? <ProfileSkeleton /> :
        <>
          <div className="p-4 bg-white border-gray-200 rounded-lg">
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="flex justify-center w-36 h-36 border border-4 border-primary rounded-full overflow-hidden mb-4">
                <img
                  src={userProfile.avatar_url || "https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-icon-download-in-svg-png-gif-file-formats--workplace-office-employee-businessman-flat-business-icons-1-pack-1179329.png"}
                  className="w-full h-full"
                />
              </div>
              <h6 className="text-2xl font-semibold text-primary">
                {userProfile.name || "No Name"}
              </h6>
              <h6 className="text-xl font-semibold">{userProfile.login}</h6>

              <div className="flex flex-row border-2 border-gray-100 shadow rounded-3xl w-2/3 mx-auto text-center my-4">
                <div className="w-1/2 p-4 border-r-2 border-gray-100">
                  <h5 className="font-semibold">Followers</h5>
                  <h4 className="text-2xl">{userProfile.followers || 0}</h4>
                </div>
                <div className="w-1/2 p-4">
                  <h5 className="font-semibold">Following</h5>
                  <h4 className="text-2xl">{userProfile.following || 0}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg my-4">
            <h4 className="font-semibold">Personal Information</h4>
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-2/3 py-4 md:mb-2">
                <h4 className="text-gray-400 text-sm font-semibold">Bio</h4>
                <p className="text-md font-semibold">
                  {userProfile.bio || "No Bio"}
                </p>
              </div>
              <div className="md:w-1/3 py-4 md:mb-2">
                <h4 className="text-gray-400 text-sm font-semibold">
                  Location
                </h4>
                <p className="text-md font-semibold">{userProfile.location}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/3 py-4 md:mb-2">
                <h4 className="text-gray-400 text-sm font-semibold">
                  Github Link
                </h4>
                <a
                  className="text-md font-semibold"
                  href={`https://github.com/${userProfile.login}`}
                  target="_blank"
                >
                  {`https://github.com/${userProfile.login}`}
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg my-4">
            <h4 className="font-semibold mb-2 pb-2">Repositories</h4>
            {userRepositories.length === 0 ? (
              <div className="text-center text-gray-400 py-4">
                User has no repositories
              </div>
            ) : (
              <UserRepos userRepositories={userRepositories} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;
