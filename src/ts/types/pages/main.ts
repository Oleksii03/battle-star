interface IMainSliderNews {
  author: {
    img: string;
    name: string;
  };
  date: string;
  description: string;
  id: string;
  image: {
    png: string;
    webp: string;
  };
  title: string;
  views: number;
}

interface IMainLeaderboardUsersTop {
  avatar: {
    png: string;
    webp: string;
  };
  countryFlagImg: {
    png: string;
    webp: string;
  };
  id: string;
  name: string;
  score: number;
}

interface IMainLeaderboardCards {
  date: string;
  description: string;
  id: string;
  img: {
    png: string;
    webp: string;
  };
  likes: number;
  title: string;
  views: number;
}

export { IMainSliderNews, IMainLeaderboardUsersTop, IMainLeaderboardCards };
