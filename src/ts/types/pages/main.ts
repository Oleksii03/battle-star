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

interface MainPopularMatchesCardsList {
  id: string;
  roundOf: string;
  firstTeam: {
    firstTeamLogo: string;
    firstTeamTitle: string;
  };
  secondTeam: {
    secondTeamLogo: string;
    secondTeamTitle: string;
  };
  image: {
    png: string;
    webp: string;
  };
}

export {
  IMainSliderNews,
  IMainLeaderboardUsersTop,
  IMainLeaderboardCards,
  MainPopularMatchesCardsList,
};
