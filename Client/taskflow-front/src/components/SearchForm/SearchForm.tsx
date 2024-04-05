import React from 'react';

const SearchForm = () => {
    return (
        <div className="text-center">
            <form role="search"
                  className="inline-flex items-center gap-x-6 py-4 px-8 my-7 rounded-3xl bg-white border-2 border-black">
                <input type="text" className="min-w-[800px] focus:outline-none"
                       placeholder="Введите название проекта или его номер"/>
                <button type="submit">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.90991 0.0949525C6.62964 0.446515 4.62768 1.46214 3.00171 3.09788C1.3269 4.77757 0.335693 6.79417 0.0476074 9.12815C-0.0158691 9.66038 -0.0158691 11.0373 0.0476074 11.5696C0.233154 13.0539 0.760498 14.5627 1.5271 15.7688C2.37183 17.1115 3.656 18.3762 4.98413 19.177C6.30249 19.968 7.75757 20.466 9.27612 20.6516C9.90112 20.7248 11.2878 20.7102 11.9226 20.6223C13.7439 20.3684 15.3943 19.7092 16.8054 18.6692C16.9714 18.552 17.1228 18.4592 17.1423 18.4641C17.1619 18.4739 18.6316 19.9045 20.4089 21.6526C22.1863 23.3957 23.7048 24.8655 23.7927 24.9094C24.1247 25.0949 24.6521 24.9826 24.8621 24.6897C24.989 24.509 25.0378 24.0842 24.9499 23.8742C24.906 23.7619 20.3503 19.2209 18.5339 17.4729L18.3435 17.2873L18.6462 16.9309C19.3396 16.1203 20.0964 14.8069 20.4529 13.7961C21.3708 11.1936 21.2195 8.3469 20.0427 5.91526C19.5007 4.7971 18.8904 3.94261 17.9773 3.0344C16.322 1.38401 14.1394 0.33421 11.7664 0.0461244C11.0974 -0.0320005 9.58374 -0.00758648 8.90991 0.0949525ZM11.2439 1.65745C15.0134 1.96995 18.1433 4.57249 19.1052 8.20042C19.3005 8.94261 19.3591 9.43089 19.3591 10.3489C19.3591 11.2668 19.3005 11.7551 19.1052 12.4973C18.6951 14.0354 17.948 15.3391 16.8152 16.4719C14.4324 18.8596 10.8679 19.6848 7.65014 18.5959C5.11108 17.7365 3.06518 15.7541 2.1814 13.303C1.27808 10.7981 1.55151 8.06858 2.92847 5.8469C4.53979 3.25413 7.30346 1.69163 10.4236 1.61839C10.5603 1.61351 10.9265 1.63304 11.2439 1.65745Z"
                            fill="#151515"/>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;