import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

let GithubSearch = () => {
  const [userData, setUserData] = useState(null);
  const [userInput, setUserInput] = useState("ola");
  const [loading, setLoading] = useState(false);
  // const githubToken = "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";
  const githubToken = "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";
const fetchGithubData=()=>{

  setLoading(true);
  axios
  .get(`https://api.github.com/search/users?q=${userInput}`, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  })
  .then((response) => {
    setUserData(response.data);
    setLoading(false)
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
    setUserData(null);
  });
}
  let updateInput=(event)=>{
    (event.keyCode ===13)?
    fetchGithubData():setUserInput(event.target.value)
  }
  

  return (
    <>
    
      {/* <pre className="text-[10px]">{JSON.stringify(userData, null, 2)}</pre> */}

      <div className="">
        <div className="flex max-w-screen-xl w-full mx-auto justify-between py-10 md:px-0 px-4 flex flex-wrap">
          <div
            aria-label="search section"
            className="border flex md:h-[70px] h-[50px] rounded md:rounded-none p-4 items-center w-full mx-auto"
          >
            <input type="text" className=" focus:outline-none flex-grow " onKeyUp={updateInput} />
            {loading===false?
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
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" animate-spin" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
            </svg>
              }
          </div>
          <div
            aria-label="Search results section"
            className="my-8  border w-full min-h-[50vh] p-2 grid sm:grid-cols-2 lg:grid-cols-3"
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
