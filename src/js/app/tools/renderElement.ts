// prettier-ignore
const possibleHTMLTags: string[] = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "plaintext", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]

//option: i cant find array of events so if anyone mange to find it, place the events to array below
const possibleEvents = [];

const MainNode: HTMLElement = document.getElementById('app')!;

interface Element {
  tagHTML: string;
  className: string;
  innerText: string;
  parentElement: HTMLElement;
  attr? : Object;
  on? : Object;
}

const renderElement: Function = ({
  tagHTML,
  className,
  innerText = '',
  parentElement = MainNode,
  attr,
  on,
}: Element) => {
  let element: HTMLElement;
  if (possibleHTMLTags.includes(tagHTML)) {
    element = document.createElement(tagHTML);
  } else {
    throw Error('Podaj właściwy tag HTML');
  }

  if (typeof className === 'string') {
    element.className = className;
  } else {
    throw Error('Nazwa klasy musi być stringiem');
  }

  //if you are using attribute with more words eg. data-mode, it has to be written as string
  if (attr) {
    Object.keys(attr).forEach((key : string, id: number) => {
      element.setAttribute(`${key}`, `${Object.values(attr)[id]}`);
    });
  }

  if (on) {
    Object.keys(on).forEach((eventName : string, id: number) => {
      element.addEventListener(String(eventName), Object.values(on)[id]);
    });
  }

  if (innerText) {
    const text = document.createTextNode(innerText);
    element.appendChild(text);
  }
  return parentElement.appendChild(element);
};

export default renderElement;

