import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Character, ApiResponseList, Episode } from "../../core/interfaces";

export function EpisodesList() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((resp) => resp.json())
      .then((data: ApiResponseList<Episode>) => {
        setEpisodes(data.results);
      });
  }, []);

  return episodes.length > 0 ? (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Episodes</h2>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter episodes"
            placeholder="Filter episodes..."
          />
        </form>
      </header>
      <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
        {episodes.map((episode) => (
          <li>
            <Link to={`/episodes/${episode.id}`}>
              <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd className="group-hover:text-white font-semibold text-slate-900">
                    {episode.name}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Category</dt>
                  <dd className="group-hover:text-blue-200">
                    {episode.air_date}
                  </dd>
                </div>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <p>
      <i>No characters</i>
    </p>
  );
}
