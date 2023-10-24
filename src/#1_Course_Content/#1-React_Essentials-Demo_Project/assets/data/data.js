import componentsImg from '../images/components.png';
import propsImg from '../images/config.png';
import jsxImg from '../images/jsx-ui.png';
import stateImg from '../images/state-mgmt.png';

export const CORE_CONCEPTS = [
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
