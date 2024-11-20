import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { createMainStageSlider } from './pages/main/main-stage/slider/createSlider';
import { settingsHtmlComponents } from './utils/settingsHtmlComponents';
import { battleStarNewsSlider, majorStochholmSlider } from './components/splideSlider';
import { mainLeaderboard } from './pages/main/main-leaderboard/mainLeaderboard';
import { popularMatches } from './pages/main/popular-matches/popularMatches';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { logoutThroughSidebar } from './pages/sign-in/cabinet/signOut';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
  createMainStageSlider();
  battleStarNewsSlider();
  mainLeaderboard();
  majorStochholmSlider();
  popularMatches();
  onStateUserChanged();
  settingsHtmlComponents();
  logoutThroughSidebar();
});

// export const baseUrl = window.location.pathname;
