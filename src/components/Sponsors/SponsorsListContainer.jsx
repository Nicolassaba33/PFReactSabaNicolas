import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import SponsorsList from "./SponsorsList";

const SponsorsListContainer = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const sponsorRef = collection(db, "SponsorsPuma");
    getDocs(sponsorRef).then((res) => {
      setSponsors(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div>
      <SponsorsList sponsors={sponsors} />
    </div>
  );
};

export default SponsorsListContainer;
