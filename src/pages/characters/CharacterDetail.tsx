import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../core/interfaces";

export function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => resp.json())
      .then((data: Character) => {
        setCharacter(data);
      });
  }, []);

  return <h1>{character?.name}</h1>;
}
