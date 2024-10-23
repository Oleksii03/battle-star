export interface IMainSliderNews {
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

export interface IMainLeaderboardUsersTop {
  avatar: {
    png: string;
    webp: string;
    [key: string]: any;
  };
  countryFlagImg: {
    png: string;
    webp: string;
    [key: string]: any;
  };
  id: string;
  name: string;
  score: number;
}
