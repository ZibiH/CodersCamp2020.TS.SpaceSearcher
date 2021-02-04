import Search from './components/Search';
import SpeechRecording from './components/SpeechRecording';

export const App = ({ options }:any) => {
  const searchBar = new Search().render();
  new SpeechRecording().startRecording(searchBar) // to będzie trzeba wrzucic po nacisnięciu na mikrofon 
};
