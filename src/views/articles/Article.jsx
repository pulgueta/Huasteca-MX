import { ArticleCard } from "../../components";
import { useState, useEffect } from "react";
import { queryData } from "../../utils/firebase";

export const Article = () => {
  const [dataArticles, setDataArticles] = useState([])

  useEffect(() => {
    const getData = async () => {
      const docs = await queryData('articles')
      const data = docs
      const array = []
      data.forEach(element => {
        if (element.data().state === 'Activo') {
          array.push({
            id: element.id,
            ...element.data()
          })
        }
      });
      setDataArticles(array)
    }
    getData()
  }, [])

  return (
    <div className={`${dataArticles.length < 2 ? 'h-screen' : 'h-full'} py-10 px-5 bg-neutral-400 flex flex-col items-center md:px-10 md:${dataArticles.length < 2 ? 'h-screen' : 'h-full'} md:py-16 lg:${dataArticles.length < 2 ? 'h-screen' : 'h-full'} lg:grid lg:grid-cols-2 lg:gap-10`}>
      {dataArticles.length > 0 &&
        dataArticles.map(({ id, mainImage, title, description, date }) => {
          return (
            <ArticleCard
              key={id}
              image={mainImage}
              title={title}
              description={description}
              date={date}
              redirect={id}
            />
          );
        })}
    </div>
  );
};
