import { Code, ForkKnifeCrossed, Star } from "lucide-react";
import React, { useContext } from "react";
import { LookUpContext } from "../../contexts/lookup";
import PaginatedItems from "./pagination";

function UserRepos() {
  const { userRepositories } = useContext(LookUpContext);

  return (
    <div>
      {userRepositories && (
        <PaginatedItems
          items={userRepositories}
          itemsPerPage={10}
          renderItem={(repo) => (
            <div
              className="border-b-2 border-gray-200 p-4 flex flex-col md:flex-row gap-4"
              key={repo.id}
            >
              <div className="md:w-2/3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-xl font-semibold text-primary"
                >
                  {repo.name}
                </a>
                <p className="text-xs text-gray-400 pr-3">{repo.description}</p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                {/* star */}
                <div className="flex items-center mr-2 xl:mr-4 gap-1">
                  <Star className="text-gray-500 m-auto" size={12} />
                  <span className="text-gray-500 m-auto text-sm font-semibold">
                    {repo.stargazers_count}
                  </span>
                </div>

                {/* fork count */}
                <div className="flex items-center mr-2 xl:mr-4 gap-1">
                  <ForkKnifeCrossed
                    className="text-gray-500 m-auto"
                    size={12}
                  />
                  <span className="text-gray-500 m-auto text-sm font-semibold">
                    {repo.forks_count}
                  </span>
                </div>

                {/* Language */}
                <div className="flex items-center mr-2 xl:mr-4 gap-1">
                  <Code className="text-gray-500 m-auto" size={12} />
                  <span className="text-gray-500 m-auto text-xs md:text-sm font-semibold">
                    {repo.language || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
}

export default UserRepos;
