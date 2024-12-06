export default function Banner() {
    return (
        <>
            <div className="w-full h-full">
                <img
                    src="https://s3-alpha-sig.figma.com/img/c5f4/4a94/fc1d2e69d4373f51e9fa72c4962f3c90?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaDSL8bRbgoVS9WloLhaQmYjD68t~0eTS5EOPsgapBHwluhYZ2R8nyknm1cqA~VqiRapvoUBogM7jPA-v1vASmJk2Af37pgGIY0fnIP-UOKMM1VZv~4EibqceTLBeVVpzYzWOavNWVENWgiLk3mM-nUelEhsGroVldZfWi4epksY2-EaMTo8TRjpxbGslH7c0i~iVkuXRJHnVm5xR-sklfq4~HP1Y~6zV850Ubw4EFwjkv~A540zM4ReIg3zyTYjePkoriWEBBCg2DBMOfij93UwjfMmW-jeJo2igjxSbRgfTeSQiBRQSrsMbjsuNrVoxjyso7ucG8EfrwTGrXQZow__"
                    alt=""
                    className="w-full h-screen lg:h-full object-cover object-[40%]"
                />
                <div className="text-center lg:text-start absolute sm:hidden md:block top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] lg:left-[10%] lg:translate-x-[-00%]">
                    <div className="py-2 ">
                        <h1 className="text-[40px] lg:text-[64px] font-bold 	leading-[60.92px]	 font-poppins text-white">
                            For the love of manga{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <h1 className="text-[24px] font-normal font-poppins leading-[22.84px] text-white">
                            Explore our varieties{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <h1 className="text-[16px] font-semibold	 font-poppins  text-white">
                            #MingaLove<strong className="text-[#ff5722]">❤</strong>{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <button className="bg-[#ffffff] text-[#ff5722] rounded-md w-[240px] h-[55px] text-[24px] font-medium  font-poppins">
                            Sign In!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
