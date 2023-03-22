import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Location } from "../../core/interfaces";

export function LocationDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then((resp) => resp.json())
      .then((data: Location) => {
        setLocation(data);
      });
  }, []);

  return <h1>{location?.name}</h1>;
}
