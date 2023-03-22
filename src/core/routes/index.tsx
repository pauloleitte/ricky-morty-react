import { createBrowserRouter } from "react-router-dom";
import { CharacterDetail } from "../../pages/characters/CharacterDetail";
import { CharactersList } from "../../pages/characters/CharactersList";
import { EpisodeDetail } from "../../pages/episodes/EpisodeDetail";
import { EpisodesList } from "../../pages/episodes/EpisodesList";
import ErrorPage from "../../pages/error/ErrorPage";
import { Home } from "../../pages/home/Home";
import { LocationDetail } from "../../pages/locations/LocationDetail";
import { LocationsList } from "../../pages/locations/LocationsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/characters",
    element: <CharactersList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />,
  },
  {
    path: "/episodes",
    element: <EpisodesList />,
  },
  {
    path: "/episodes/:id",
    element: <EpisodeDetail />,
  },
  {
    path: "/locations",
    element: <LocationsList />,
  },
  {
    path: "/locations/:id",
    element: <LocationDetail />,
  },
]);
