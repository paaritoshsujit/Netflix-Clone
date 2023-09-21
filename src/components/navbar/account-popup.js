"use client";

export default function AccountPopup({
  accounts,
  loggedInAccount,
  setLoggedInAccount,
  signOut,
  setPageLoader,
}) {
  return (
    <div className="px-8 py-8 fixed top-[50px] hap-3 flex flex-col items-start right-[45px] bg-black placeholder-opacity-80 z-[999]">
      <div className="flex flex-col gap-3">
        {accounts && accounts.length
          ? accounts
              .filter((item) => item._id !== loggedInAccount._id)
              .map((account) => (
                <div
                  onClick={() => {
                    setLoggedInAccount(null);
                    sessionStorage.removeItem("loggedInAccount");
                  }}
                  className="cursor-pointer flex gap-5 last-of-type:mb-3"
                  key={account._id}
                >
                  <img
                    src="https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                    alt="Current Profile"
                    className="max-w-[2rem] rounded min-w-[1.5rem] max-h-[2rem] min-h-[1.5rem] object-cover w-[2rem] h-[2rem]"
                  />
                  <p className="mb-4 mt-1">{account.name}</p>
                </div>
              ))
          : null}
      </div>
      <div>
        <button
          onClick={() => {
            setPageLoader(true);
            signOut();
            setLoggedInAccount(null);
            sessionStorage.removeItem("loggedInAccount");
          }}
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
}
