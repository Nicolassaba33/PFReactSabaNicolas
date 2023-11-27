import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import PhotosList from "./PhotosList";
import "./Photos.css";

const PhotosListContainer = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosRef = collection(db, "RugbyWorldCup");
    getDocs(photosRef).then((resp) => {
      setPhotos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div>
      <PhotosList photos={photos} />
    </div>
  );
};

export default PhotosListContainer;
