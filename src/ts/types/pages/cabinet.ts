interface CabinetHistoryMatchesList {
  id: string;
  isVictory: boolean;
  objDate: { date: string; time: string };
  objID: { id: number; title: string };
  objRegime: { regime: string; title: string };
  score: number;
  title: string;
  sortScore: number;
}

interface CabinetHistoryTransactions {
  id: string;
  isVictory: boolean;
  objDate: { date: string; time: string };
  objID: { id: number | string; title: string };
  objRegime: { regime: string; title: string };
  score: number;
  title: string;
}

interface CabinetBlockList {
  id: string;
  name: string;
  status: string;
  teamLogo: string;
  avatar: {
    png: string;
    webp: string;
  };
}

export { CabinetHistoryMatchesList, CabinetHistoryTransactions, CabinetBlockList };
