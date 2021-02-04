import renderElement from '../tools/renderElement';

class ButtonMic {
  constructor() {}

  render() {
    const app: HTMLElement = document.querySelector('#app');

    const button: Function = renderElement({
      tagHTML: 'button',
      className: 'button',
      parentElement: app,
    });
    renderElement({
      tagHTML: 'i',
      className: 'button__icon fas fa-microphone',
      parentElement: button,
    });

  }
}

export default ButtonMic;