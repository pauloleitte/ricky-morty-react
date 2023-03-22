import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../core/interfaces";

export function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((resp) => resp.json())
      .then((data: Episode) => {
        setEpisode(data);
      });
  }, []);

  return <h1>{episode?.name}</h1>;
}
