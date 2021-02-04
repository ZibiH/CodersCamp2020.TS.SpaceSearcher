import Search from './components/Search';
import SpeechRecognition from './components/SpeechRecognition';

export const App = ({ options }:any) => {
  const searchBar = new Search().render();
  new SpeechRecognition().startRecording(searchBar) // to będzie trzeba wrzucic po nacisnięciu na mikrofon 
};
