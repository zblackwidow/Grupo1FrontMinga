
import Slice from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function Carrousel() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cities");
  };
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-[80vw] max-[740px]:mt-[15%] m-auto text-white">
        <h1 className="text-center font-serif text-3xl font-bold mb-9 text-[#191e3b]  underline decoration-sky-500"> 
          Popular MyTineraries
        </h1>
        <Slice {...settings}>
          {images.map((d) => (
            <div
              className="bg-[#0e304262] rounded-xl mb-10 "
              key={d.id}
            >
              <div className="h-56 flex justify-stretch rounded-t-xl items-center">
                <img
                  src={d.url}
                  alt={d.name}
                  className="rounded-t-xl object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4">
                <div className="rounded-b-xl h-56 flex flex-col items-center justify-center gap-3 w-[90%]">
                  <p className="bg-transparent text-xl font-semibold">
                    {d.name}
                  </p>
                  <p className="bg-transparent">{d.descripcion}</p>
                  <button
                    onClick={() => handleClick("/cities")}
                    className="bg-[#DBB0A1] bg-opacity-75 hover:bg-blue-400 text-white text-lg px-6 py-1 rounded-2xl"
                  >
                    Discover!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slice>
      </div>
    </>
  );
}

const images = [
  {
    name: "Tokio, Japón",
    url: "https://media.admagazine.com/photos/618a5ef1be961b98e9f09804/master/w_1600%2Cc_limit/91686.jpg",
    descripcion:
      "A vibrant metropolis that combines tradition and modernity, famous for its gastronomy, technology and pop culture.",
    id: 1
  },
  {
    name: "Barcelona, España",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhG6NwwlPfqeZXadLK1XzXyCmJKWNkR_MSw&s",
    descripcion:
      "Known for its unique Gaudí architecture, beaches and a rich cultural and gastronomic life.",
    id: 2
  },
  {
    name: "Nueva York, EE.UU.",
    url: "https://media.admagazine.com/photos/61e5acc706c10ae95c71b902/16:9/w_2560%2Cc_limit/New-York-skyline.jpg",
    descripcion:
      "The city that never sleeps, famous for its skyscrapers, Broadway, museums, and cultural diversity.",
    id: 3
  },
  {
    name: "París, Francia",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbo-vIfVjh-kezUFRNpSwrrkNFikeVEF1WQ&s",
    descripcion:
      "The city of love, known for its iconic monuments, art and exquisite gastronomy.",
    id: 4
  },
  {
    name: "Sídney, Australia",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRphk1lpOJChnm27I3cTcErJs2lBvluv8Dw&s",
    descripcion:
      "Famous for its Opera and beautiful beaches, Sydney offers a mix of nature and urban life.",
    id: 5
  },
  {
    name: "Kioto, Japón",
    url: "https://estaticos-cdn.prensaiberica.es/clip/a1767182-90e0-402e-9f29-e29ac48a2e7c_alta-aspect-ratio_default_0.jpg",
    descripcion:
      "A historical city known for its temples, traditional gardens, and Japanese culture.",
    id: 6
  },
  {
    name: "Cape Town, Sudáfrica",
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=1200&h=700&s=1",
    descripcion:
      "With views of the Mesa mountain, it offers a mix of history, culture and nature.",
    id: 7
  },
  {
    name: "Reykjavik, Islandia",
    url: "https://content.icelandtravel.is/wp-content/uploads/2019/03/Reykjavik.jpg",
    descripcion:
      "The northernmost capital in the world, famous for its natural landscapes and vibrant culture.",
    id: 8
  },
  {
    name: "Lima, Perú",
    url: "https://www.clarin.com/2022/12/02/Kl5Kzlrvm_2000x1500__1.jpg",
    descripcion:
      "Known for its world-class gastronomy and rich colonial history. The best destination to enjoy.",
    id: 9
  },
  {
    name: "Berlín, Alemania",
    url: "https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg",
    descripcion:
      "A city with a rich history, contemporary art and a vibrant nightlife.",
    id: 10
  },
  {
    name: "Copenhague, Dinamarca",
    url: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/shutterstock_378539728-1920x1280.jpg",
    descripcion:
      "Known for its Scandinavian design, canals and cozy atmosphere.The best destination.",
    id: 11
  },
  {
    name: "Buenos Aires, Argentina",
    url: "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
    descripcion:
      "Famous for its tango culture, European architecture and delicious gastronomy.",
    id: 12
  },
  {
    name: "Cordoba, Argentina",
    url: "https://www.argentinfo.com.ar/wp-content/uploads/2023/08/calamuchita.jpg",
    descripcion:
      "A city with a rich history, contemporary art and a vibrant nightlife.",
    id: 13
  },{
    name: "Santiago, Chile",
    url: "https://www.argentinfo.com.ar/wp-content/uploads/2023/08/calamuchita.jpg  ",
    descripcion:
      "A city with a rich history, contemporary art and a vibrant nightlife.",
    id: 14
  },{
    name: "Quito, Ecuador",
    url: "https://ecpe2k7qe53.exactdn.com/wp-content/uploads/2020/01/410A3DA6-3D43-4479-BE3E-7049A99C8132-scaled.jpeg?strip=all&lossy=1&ssl=1",
    descripcion:
      "A city with a rich history, contemporary art and a vibrant nightlife.",
    id: 15
  }
];
