import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image1: 'https://s3-alpha-sig.figma.com/img/8856/dd5e/290b26e8ccd3b394d453600dc140c09b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9E~eoAgkKKBP8zT7kIg5AvK9QEyzAcSweRoJPM1OUZ8lbw6MTk-o7KWQn65ss3ruEkkNF~706FPLM5b2fixKxo1K14fFObHYmFJA5EJLZb1LNr13oAynHtbpSwhT8hCI7eY6k85a2bdvCjOCD7jjExdBo8NQTHIPh46XHB0IE-oKnOmbT-VnR1HvpHcSYuugNwss5YPAXxt9X8WqMmo9aSxwBODmnyzH3-IkEbnMMsTmW2uPLcPa0h5eYt9Vv2ojKUroE8s1stGHLtaNxa3yqgBeDk1OgMwM1oeLaLS9qEH2ETDribK5g6kj1V~NF9tCgBHaAT3Z6Ta2NKb2Bbiyg__', image2: 'https://s3-alpha-sig.figma.com/img/b3fe/fdeb/7c848fa5944ce73c1e0b7c954bf88cad?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UowBsYUK7SsOsvJJtRLI3abuhQjlNEK7aLHaT~47pwGHwtSQRr9TbUtFXDWTLybN8OY2dySLMelvlT1QsKm3W9nSB6lv19kABnXhzY8v9GViukQcQRFipfiukFpRmVQvdP9nENEHxx7NPaoHbu-pGBoZbm~fQcA5JUdAhvON~L40iQRRID1nbV2CMW6JlbbdZ704vuXTVHLoQvC~s5H6FyDelv-V6xFKS6Lr4TIW2K~hpU-mInFVjsS1dSVoC-2og7wq7R~0xYl40IKK1CMVl0LH51zSseH59no0ntzrz~2-0ide4vu-DjuHa9T476Eeav6XukYrmqhlAPOyYs9n4g__', title: 'Shonen', text: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur.The camaraderie between members of acollective or a combat team stands out.'
        },
        { image1: 'https://s3-alpha-sig.figma.com/img/7010/55a8/ad631c0e34af539abb86743a2cafbda1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FVmG7w7ptYT3R79PmMF9cUd~sphJzwrq0z69i3sJzQhTKzxJiFCKPXQBE8kyPTUtz~CFNmrb5PZQ3IxLF1G~gimPV1Wejjdw5uGu7AortKSivCei-HgYHua4kUbymOAMQNv8R3PLAgyoIGtY7FqdcGVJt4VtkIqhJzP2eMhMRfD7BarzVUgy4-G42av4-5luOOYgYSMvlewEG~u6Y0krjVeC1W5eSw4EDdXGGKXK5WuTGXhfM-JmMd~qKza1XcPZyqUNYeI0Tf2tktmxdbASMdetJfrUixMnRXa6ZQCvfeZ0i68LOGzrueumZ~S6bK48C6Rch0njkr75PoHs9zn4Wg__', image2: 'https://s3-alpha-sig.figma.com/img/0b79/70a5/01731543bd32ac773a1b2fa236c42971?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XD6jq-ol7Dgezapuz5QBFsnSa31~dwt8q~4DBMQyj9IztOy-VMoCNH89QAUAb4gmuuS21QlLzLIljyIA22eHaS7P2eMDQ2iMR4yY5xeAzV13rvZfF4qX1AYlnGMhmcsVhlq1TR7UxYsErS8ApxHVnd3e4lJbtr0pbw1qEq8miC~o~B91VHbO71EN46h2BCKDUeRbMWmngD-ViCN4LlkzLoErL65rL5xJhFTD-a88jXaBf8fHuJ-Xkg~ASM2niRHCjuTuEoodhVaA53CxW53wX7nzFbpoSr~OahnEHnCtI2wHQCVNYK-HEiCMu2XXyr~VdgH9MvtgYbdLvaOnhw9alw__', title: 'My hero academia', text: 'Is an action-packed manga set in a world where nearly everyone has superpowers. The story follows Izuku Midoriya, a powerless boy, who aspires to become a great hero despite his challenges.' },
        {
            image1: 'https://s3-alpha-sig.figma.com/img/74c1/1422/523fb73c0843c17b79f58c0508ca9f7a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzZY5NIhLUfcd6JEzBhN3AxDdBvBjF375QHGbyYEihS7WuOCDeQjhCBoGiCxnjstD5zIL8~XLyebK179g99lGmPBVAvGrMenMfiD7K3a4irkOjLQ5qvYQnoVN3qBL2EEwgAMTwoaKeH1HW68DK8eh6ij6d38kN1V7uktpTfAngHpBRF0BNgcvTS5nUg4wrqbTWo2MlAy7Lc9f3g~WMfzAj2Wm8WeRwbCER5LNDcU82gdGw3e5XCsF8GykXsIU1EEClyCurjEjC225hCFcRWUeHpIX2-7-~3dLQhBKOQQantwyAmJCVNTQ1A9UyHjuJks952BowU8v5Zil6resw0GeQ__', image2: 'https://s3-alpha-sig.figma.com/img/511b/7568/ef59acdd63429092bed163f4a51dbf16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBe7sFCXQvzoQbecPMm1x1mknbY3WTBt18PCeE07y827xBp58DbWc0Q8lUeIqnlQPQjWVRcnPI1wQKsldQokQBOyAGebGXPFIjS6SNXG-xTARLHMeBNmtTH8rJCUZKevtZmi1cHnBZpIeu~HVK2hCOlszF6qqDwaAXyGO9WSlnu9uzAVRwNBdPTyn00U0eV3tSKfVtcOLwV945k~eZiB-MMHdoyQiEvwEUhMRmPv36DgqcSjve6hpSvjeEsQ-kgH1gYdZtwqhaysUYEBjduzt9XmQNHRTM33iMJ1yVwc4QkXZtIjye8EcqKz9mXBX0ogzPWOh0nrocVUF~bpG3lNOw__', title: 'Trigun stamped', text: 'Is a reboot of the original Trigun series, blending action and sci-fi. It follows Vash the Stampede, a gunslinger with a mysterious past, as he navigates a chaotic world full of danger and intrigue.'
        },

    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [slides]);

    return (
        <div className="hidden lg:flex justify-center items-center p-20">
            <div className="w-full h-[300px] bg-[#f97316] rounded-lg">
                <div className="flex justify-between items-center w-full h-[300px] px-10 z-1">
                    <button onClick={prevSlide} className="text-white"><div className="bg-[#FACDB0] rounded-full p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                        </svg>
                    </div></button>
                    <div className="z-2 flex justify-evenly w-full">
                        <div className="h-[400px] z-3 flex space-x-36 justify-center">
                            <img className="h-[350px] object-cover " src={slides[activeIndex].image1} alt="Slide 1" />
                            <NavLink to="/mangas"> <img className="h-[300px] object-cover " src={slides[activeIndex].image2} alt="Slide 2" /></NavLink>
                        </div>
                        <div className="w-[400px]  z-3 flex justify-start items-center">
                            <div>
                                <h2 className="text-[24px] font-medium text-white">{slides[activeIndex].title}</h2>
                                <p className="text-[14px] font-normal text-white">
                                    {slides[activeIndex].text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button onClick={nextSlide} className="text-white"><div className="bg-[#FACDB0] rounded-full p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div></button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
