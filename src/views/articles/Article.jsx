import { ArticleCard } from "../../components";

import Nani from "../../static/nani.jpg";
import Nani2 from "../../static/nani2.jpg";
import Nani3 from "../../static/nani3.jpg";
import Nani4 from "../../static/nani4.jpg";
import Nani5 from "../../static/nani5.jpeg";

export const Article = () => {
  const fakeData = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani,
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani2,
    },
    {
      id: "3",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani3,
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani4,
    },
    {
      id: "5",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani,
    },
    {
      id: "6",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dateLastUpdate: new Date(),
      img: Nani5,
    },
  ];

  return (
    <div className="h-full py-10 px-5 bg-neutral-400 flex flex-col items-center md:px-10 md:h-full md:py-16 lg:h-full lg:grid lg:grid-cols-2 lg:gap-10">
      {fakeData &&
        fakeData.map(({ id, img, title, description, dateLastUpdate }) => {
          return (
            <ArticleCard
              key={id}
              image={img}
              title={title}
              description={description}
              date={dateLastUpdate}
              redirect={id}
            />
          );
        })}
    </div>
  );
};
