import { useState, useEffect } from 'react';


let GithubSearch = () => {
    const [userData, setUserData] = useState(null);


    return (
    <>
      <div className="">
        <div className="flex max-w-screen-xl w-full mx-auto justify-between py-10 md:px-0 px-4">
          <div aria-label="search section"className="border flex md:h-[70px] h-[50px] rounded md:rounded-none  w-full mx-auto">
            <input type="text" className="w-[85%]" />
            <button className="w-[15%] bg-[#444] rounded">
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// api: https://api.github.com/search/users?q=ogbenihmmd

export default GithubSearch;
