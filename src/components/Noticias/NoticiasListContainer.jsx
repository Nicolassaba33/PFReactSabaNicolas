import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import NoticiasList from "./NoticiasList";
const NoticiasListContainer = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const noticiaRef = collection(db, "NewsPuma");
    getDocs(noticiaRef).then((res) => {
      setNoticias(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div>
      <NoticiasList noticias={noticias} />
    </div>
  );
};

export default NoticiasListContainer;
