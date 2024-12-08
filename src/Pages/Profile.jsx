import React from 'react'



export default function Profile() {

    

    return (
        <>
            <div className="z-1">
                <img
                    className="w-full h-[70vh] object-cover brightness-50"
                    src="https://s3-alpha-sig.figma.com/img/10b2/d5ee/20210b0eea83b4ff7cf04e7d9e72c1a2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NK823jbakqxJ4VAwfZgCsQQt-aRhdKMwp65SMiVSLkGTgB~sPwtwJj~j78wYc7nHw1F0Q7DxN3tIYcojpUCr2tqdEk21fJLQNmK7TwYeDTjXfOLS361su3033WsKOylILzA8DOtvjQU9Bq3xuYKnwdMqiDWdm6YSq9YTMS8D3r6jZbKXZgen3af9JxpjgMzxB-lLNGCgL817~4Zak~2fMJsKSWb264wJXr7q4uOx1DtSCYHqs1qPi4JFY4fwsw9iPksACL9iPW0YEtWXn2Nzy9DYTRFp8VOVU~u9v1E0CQzvikTjTp~9k3WpJV353y~l1mxB45HKhxJU1TxaCsUm~A__"
                    alt=""
                />
                <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Profile
                    </h1>
                </div>
            </div>
            <div className="flex justify-center -mt-[100px] z-0">
                <div className="flex justify-around items-center bg-white w-[97%] rounded-lg p-10">
                    <div className="">
                        <form className="flex flex-col w-[300px]  gap-4 p-4">
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="surname"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    placeholder="Surname"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="city"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    placeholder="City"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="date"
                                    name="birthday"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="url"
                                    name="photo"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    placeholder="Photo URL"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#34D399]   text-white text-[24px] py-2 px-4 rounded-3xl hover:bg-blue-700"
                            >
                                Save
                            </button>
                            <button
                                type="submit"
                                className="w-full bg-[#FBDDDC] text-[#EE8380] text-[24px] py-2 px-4 rounded-3xl hover:bg-blue-700"
                            >
                                Delete Account
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            <img
                                className="w-[178px] rounded-full"
                                src="https://s3-alpha-sig.figma.com/img/d771/e8ee/4d516f000e29670bda6ceb5a6c836183?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRB8FmOriCJyxjVdIa1fvNIW~oh~crxMLW~D0wz770m4mD7Q4v~l5XBiYu8GgPHk4623IdKHAZLSS4DN~WWQzOvQf6WrhpDp06uhV0g3HBt84-57IHvdICd56bXPBKrKNTnsE9SxYudT7ybVJiUyWyeeeW17CmWl3k56DKQ-puV4swXxB84Z~QTwQOXK3yqRA-yVFKM8cR26DnGSG5ag0CmLfZKxAl19TohkmKHd3ji8qyiJSTSwqTjdmN3BBc6dJpWUOJt3lO64JmNhfbSUqUvQA2a2bKuKkYG1syPEO~~fiGiZoe18JbFuzrhqNzNhzIlIJw223GC2nJONMnB2bA__"
                                alt=""
                            />
                        </div>
                        <div className="pt-6">
                            <h2 className="text-[20px]">Nombre</h2>
                        </div>
                        <div className="">
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-[#9D9D9D]"
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

                                <h2 className="text-[16px] text-[#9D9D9D] pl-2">Nombre</h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-[#9D9D9D]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                    />
                                </svg>

                                <h2 className="text-[16px] text-[#9D9D9D] pl-2">Nombre</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
