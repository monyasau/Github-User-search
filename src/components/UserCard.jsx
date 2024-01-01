let UserCard = ({ apiUserData }) => {
  return (
    <>
      <div className="lg:max-w-[70%] w-[80%] mx-auto">
        <div className="border w-full bg-[#eee] h-[100px] flex">
          <div
            aria-label="image-cont"
            className="w-[30%] border-r h-full flex items-center justify-center"
          >
            <img
              src={apiUserData.avatar_url}
              className="rounded-full w-[80px] h-[80px] "
            />
          </div>
          <div className="w-[70%] p-2 h-full flex-wrap justify-center flex">
            <div className=" items-center justify-around h-[50%] min-w-[90%] flex">
              <span className="text-xl">
              {apiUserData.login}
              </span>
              <a className="" href={apiUserData.html_url} title="view this user account on Github">
                <svg
                className=" border-[#444] m-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          <button className="bg-[#ddd] px-2">View More</button>
          </div>
        </div>
        {/* <pre className="text-[10px]">{JSON.stringify(apiUserData, null, 2)}</pre> */}
      </div>
    </>
  );
};

export default UserCard;