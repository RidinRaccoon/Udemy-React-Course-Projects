/** Images used in Core concept objects */
import componentsImg from '../images/components.png';
import propsImg from '../images/config.png';
import jsxImg from '../images/jsx-ui.png';
import stateImg from '../images/state-mgmt.png';

/**
 * List of Core Concepts displayed in the core concepts section of the "ReactEssentialsApp" component
 */
type CoreConcept = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.',
    src: componentsImg,
    alt: 'Components',
  },
  {
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    src: jsxImg,
    alt: 'JSX',
  },
  {
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
    src: propsImg,
    alt: 'Props',
  },
  {
    title: 'State',
    description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    src: stateImg,
    alt: 'State',
  },
];

/**
 * List of Examples displayed in the Examples section of "ReactEssentialsApp" component
 */
type Example = {
  title: string;
  description: string;
  code: string;
};

type Examples = {
  [key: string]: Example;
};

export const EXAMPLES: Examples = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description: 'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
