declare global {
  interface Window {
    webkitSpeechRecognition: any
  }
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition


export default class SpeechRecording {
  recognition: SpeechRecognition;
  constructor() {
    this.recognition = new SpeechRecognition()
    this.recognition.interimResults = true
  }
  
  startRecording(searchBar: HTMLInputElement) : void {
    this.recognition.start()
    this.recognition.addEventListener('result', (e) => this.transcript(e, searchBar))
  }

  transcript(e: SpeechRecognitionEvent, searchBar: HTMLInputElement) : void {
    const transript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    searchBar.value = transript
  }
}