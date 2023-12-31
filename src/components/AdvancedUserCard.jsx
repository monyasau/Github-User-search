import { useState } from "react";

const AdvancedUserCard = ({ userInfo }) => {
  const [close, setClose] = useState(true);
  return (
    <div>
      {userInfo}
      {close && (
        <>
          <div
            id="backdrop"
            className=" fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
            ></div>
          <div className="fixed top-1/3 mx-auto left-0  z-50  w-full flex flex-col items-center">


            <div className="w-[500px] bg-white h-500px p-4 rounded">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit facere assumenda facilis, debitis iste alias nihil iusto nam, quasi doloremque quidem rerum quod doloribus ipsum. Maxime placeat facere laboriosam culpa!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, placeat expedita. Quisquam error dignissimos officiis quae porro? Corporis, saepe dolorum placeat nemo veritatis asperiores voluptatum, facilis beatae, ipsum eveniet mollitia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis dolorum architecto similique harum maxime ut ab iste amet, quaerat, doloribus ad officia pariatur quidem obcaecati? Cum delectus aut incidunt.
            </div>
            <button
              onClick={() => {
                  setClose(false);
                }}
                >
              Close
            </button>
                </div>
            </>
      )}
    </div>
  );
};

export default AdvancedUserCard;
// "url": "https://api.github.com/users/440",
