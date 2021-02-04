import renderElement from '../tools/renderElement';

class Search {
  constructor() {}

  render() {
    const input = renderElement({
      tagHTML: 'input',
      className: 'search',
    });

    return input;
  }
}

export default Search;
