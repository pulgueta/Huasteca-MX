import { useEffect, useState } from "react";

import { ArticleTable } from "../components";
import { queryData } from "../../../utils/firebase";

export const ArticleMonitor = () => {

  const [dataArticles, setDataArticles] = useState([])
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const docs = await queryData('articles')
      const data = docs
      const array = []
      data.forEach(element => {
        if (element.data().state === 'Pendiente') {
          array.push({
            id: element.id,
            ...element.data()
          })
        }
      });
      setDataArticles(array)
      setPending(false)
    }
    getData()
  }, [])

  return (
    <div div className="bg-neutral-300 min-h-[calc(100vh-56px)] flex items-start justify-center" >
      <div>
        {/* {dataArticles.length > 0 && ( */}
        <ArticleTable dataArticles={dataArticles} pending={pending} />
        {/* )} */}
      </div>
    </div >
  );
};
