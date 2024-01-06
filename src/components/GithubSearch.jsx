import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

let GithubSearch = () => {
  const [userData, setUserData] = useState(null);
  const [userInput, setUserInput] = useState("ola");
  // const githubToken = "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";
  const githubToken = "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";
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${userInput}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("An error occurred: ", error);
        setUserData(null);
      });
  }, [userInput]);

  return (
    <>
      {/* <pre className="text-[10px]">{JSON.stringify(userData, null, 2)}</pre> */}

      <div className="">
        <div className="flex max-w-screen-xl w-full mx-auto justify-between py-10 md:px-0 px-4 flex flex-wrap">
          <div
            aria-label="search section"
            className="border flex md:h-[70px] h-[50px] rounded md:rounded-none p-4 items-center w-full mx-auto"
          >
            <input type="text" className=" focus:outline-none flex-grow " />
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#b9b9b9"
                className="w-6 mx-auto h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              }
          </div>
          <div
            aria-label="Search results section"
            className="my-8 border w-full min-h-[50vh] p-2 grid sm:grid-cols-2 lg:grid-cols-3"
          >
            {!(userData === null) ? (
              userData.items.map((userInfo, i) => (
                <UserCard key={i} apiUserData={userInfo} />
              ))
            ) : (
              // <pre className="text-[10px]">{JSON.stringify(userData, null, 2)}</pre>
              <>
                <span>
              </span>
              <span className="text-center">
                <h3 className="border-b">404</h3>
                Username not found,
                  Please input a different Username to search for

                </span>
              </>
            )}
            {/* <UserCard apiUserData={userData}/> */}
            {/* {userData && <UserCard userData={userData} />} */}
            {/* {userData && <>skssks </>} */}
          </div>
        </div>
      </div>
    </>
  );
};

// api: https://api.github.com/search/users?q=octocat

export default GithubSearch;
