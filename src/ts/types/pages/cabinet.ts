interface CabinetHistoryMatchesList {
  id: string;
  isVictory: boolean;
  objDate: { date: string; time: string };
  objID: { id: number; title: string };
  objRegime: { regime: string; title: string };
  score: number;
  title: string;
}

export { CabinetHistoryMatchesList };
