import renderElement from '../tools/renderElement';

class Search {
  constructor() {}

  render() {
    const app: HTMLElement = document.querySelector('#app');

    const input = renderElement({
      tagHTML: 'input',
      className: 'search',
      parentElement: app,
    });

    return input;
  }
}

export default Search;
