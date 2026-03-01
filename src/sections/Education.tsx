export default function Education() {
  return (
    <div className="mt-20 scroll-mt-16" id="education">
      <div>
        <h2 className="text-4xl my-3">Education</h2>
        <hr />
      </div>

      <div className=" bg-black flex items-center justify-center px-4 mt-10">
        <div className="max-w-2xl w-full border bg-black p-8 hover:cursor-pointer">
          <div className="flex items-center gap-10">
            <img
              src="chula-logo.png"
              alt="chulalongkorn university"
              className="w-16"
            />

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Chulalongkorn University
              </h2>
              <p className="text-lg  text-gray-300">
                Bachelor of Engineering, B.Eng. (Computer Engineering)
              </p>
              <div className="mt-6 flex justify-between text-base text-gray-300">
                <div className="flex items-center mr-4 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <p className="inline">August 2021 - September 2025</p>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="inline">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
