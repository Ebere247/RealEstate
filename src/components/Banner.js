import React from 'react'

function Banner() {
  return (
    <div className="w-full mt-6 mx-auto">
        <div className="flex px-4 lg:py-28 py-20 rounded-xl flex-col gap-5 justify-center items-center mt-10 bg-hero bg-no-repeat bg-center bg-cover h-auto w-auto">
          <p className="text-3xl text-white capitalize lg:w-[500px] text-center leading-10">Mediation of modern Workspaces around the Globe</p>
          <p className="text-sm mb-6 text-white text-center w-4/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="form-group bg-white lg:flex-row flex-col flex py-2 gap-5 rounded-lg px-3 w-full lg:w-auto">
            <input type="text" className="form-control lg:w-[350px] w-[200px] focus:outline-none border-0" placeholder='Search For Property'/>
            <button className="btn bg-[#6A71F1] text-white rounded-md border-0 flex justify-center items-center gap-2 px-4 py-2">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50362 9.50791C3.50362 7.91521 4.13628 6.38775 5.26243 5.26154C6.38857 4.13533 7.91595 3.50264 9.50856 3.50264C11.1012 3.50264 12.6286 4.13533 13.7547 5.26154C14.8808 6.38775 15.5135 7.91521 15.5135 9.50791C15.5135 11.1006 14.8808 12.6281 13.7547 13.7543C12.6286 14.8805 11.1012 15.5132 9.50856 15.5132C7.91595 15.5132 6.38857 14.8805 5.26243 13.7543C4.13628 12.6281 3.50362 11.1006 3.50362 9.50791ZM9.50856 0.5C8.09095 0.499819 6.69331 0.834257 5.42932 1.47611C4.16532 2.11797 3.07066 3.04912 2.23436 4.19384C1.39807 5.33855 0.843751 6.66451 0.616495 8.06386C0.389239 9.46321 0.495463 10.8964 0.926526 12.247C1.35759 13.5976 2.10132 14.8273 3.09723 15.8362C4.09314 16.8451 5.31311 17.6047 6.65792 18.0532C8.00272 18.5017 9.43439 18.6264 10.8365 18.4172C12.2386 18.208 13.5715 17.6708 14.7269 16.8493L18.9558 21.0786C19.239 21.352 19.6182 21.5034 20.0118 21.4999C20.4054 21.4965 20.782 21.3386 21.0603 21.0603C21.3386 20.7819 21.4965 20.4054 21.4999 20.0117C21.5034 19.6181 21.352 19.2389 21.0786 18.9557L16.8511 14.728C17.8093 13.3803 18.3781 11.7949 18.4951 10.1455C18.6122 8.49602 18.2729 6.84618 17.5146 5.37673C16.7563 3.90728 15.6081 2.67494 14.1959 1.81474C12.7838 0.954539 11.1621 0.499679 9.50856 0.5Z" fill="#FAFAFA"/>
              </svg>
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default Banner