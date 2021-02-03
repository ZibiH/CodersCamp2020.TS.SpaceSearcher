import Search from './components/Search';
import ButtonMic from './components/ButtonMic';

export const App = ({ options }) => {
  new Search().render();
  new ButtonMic().render();
};
