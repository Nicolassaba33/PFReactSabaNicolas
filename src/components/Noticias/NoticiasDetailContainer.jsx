import { useEffect, useState } from "react";
import NewDetail from "../../pages/NewsDetail/NewDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const NoticiasDetailContainer = () => {
  const [noticia, setNoticia] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "NewsPuma", id);
    getDoc(docRef).then((resp) => {
      setNoticia({
        ...resp.data(),
        id: resp.id,
      });
    });
  }, [id]);
  return <div>{noticia && <NewDetail noticia={noticia} />}</div>;
};

export default NoticiasDetailContainer;
