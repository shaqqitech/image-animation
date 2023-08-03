import { useEffect, useState } from "react";

export default function ImageHover() {
  const [active, setActive] = useState(1);

  const imageContent = [
    {
      id: 1,
      link: "https://source.unsplash.com/n5f0INq5uKI",
      desc: "Nature Image",
    },
    {
      id: 2,
      link: "https://source.unsplash.com/LQsbnHpJ0z4",
      desc: "Nature Image",
    },
    {
      id: 3,
      link: "https://source.unsplash.com/9MqLBJvQAL8",
      desc: "Nature Image",
    },
    {
      id: 4,
      link: "https://source.unsplash.com/py8omnp-hko",
      desc: "Nature Image",
    },
    {
      id: 5,
      link: "https://source.unsplash.com/gOQMwGlYe2I",
      desc: "Nature Image",
    },
    {
      id: 6,
      link: "https://source.unsplash.com/45sn7w7Hs2I",
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
