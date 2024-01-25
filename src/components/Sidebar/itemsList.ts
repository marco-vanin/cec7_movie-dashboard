import {
  Film,
  Video,
  PersonStanding,
  ListChecks,
  Star,
  NotebookPen,
} from "lucide-react";

const itemsList = [
  { id: 1, label: "Movies", link: "/movies", icon: Film },
  { id: 2, label: "TV Shows", link: "/tv-shows", icon: Video },
  { id: 3, label: "People", link: "/people", icon: PersonStanding },
  { id: 4, label: "Genres", link: "/genres", icon: Film },
  { id: 5, label: "Watchlist", link: "/watchlist", icon: ListChecks },
  { id: 6, label: "Reviews", link: "/reviews", icon: NotebookPen },
  { id: 6, label: "Favorites", link: "/favorites", icon: Star },
];

export default itemsList;
