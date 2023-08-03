import { useEffect, useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

export default function ImageHover() {
  const [active, setActive] = useState(1);

  const imageContent = [
    {
      id: 1,
      link: image1,
      desc: "Nature Image",
    },
    {
      id: 2,
      link: image2,
      desc: "Nature Image",
    },
    {
      id: 3,
      link: image3,
      desc: "Nature Image",
    },
    {
      id: 4,
      link: image4,
      desc: "Nature Image",
    },
    {
      id: 5,
      link: image5,
      desc: "Nature Image",
    },
    {
      id: 6,
      link: image6,
      desc: "Nature Image",
    },
  ];

  useEffect(() => {
    setActive(1);
  }, []);

  const handleClick = (id) => {
    setActive(id === active ? "" : id);
  };

  return (
    <>
      <main className="w-[100%] h-[100vh] flex justify-center items-center bg-gray-800">
        <section className="w-[600px] h-[300px] rounded-lg flex flex-row justify-center items-center space-x-2">
          {imageContent.map((item) => {
            const isActive = item.id === active;
            return (
              <>
                <div className="relative">
                  <img
                    src={item.link}
                    alt={item.desc}
                    className={`${
                      isActive
                        ? "w-72 transition-all duration-500 ease-in"
                        : "w-16 transition-all duration-500 ease-out"
                    } h-72 shadow-lg shadow-gray-800 rounded-3xl cursor-pointer`}
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                  />
                </div>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}
