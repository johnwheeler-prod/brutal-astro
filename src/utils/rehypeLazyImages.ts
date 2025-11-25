import type { Content, Element, Properties, Root } from 'hast';

const setImageProps = (node: Element) => {
  const props: Properties = node.properties || {};

  if (!props.loading) props.loading = 'lazy';
  if (!props.decoding) props.decoding = 'async';
  if (!props.sizes) props.sizes = '(min-width: 1024px) 800px, 100vw';

  node.properties = props;
};

type HastNode = Root | Content;

const walk = (node: HastNode) => {
  if (node.type === 'element' && node.tagName === 'img') {
    setImageProps(node as Element);
  }

  if ('children' in node && Array.isArray(node.children)) {
    for (const child of node.children as Content[]) {
      walk(child as HastNode);
    }
  }
};

const rehypeLazyImages = () => (tree: Root) => {
  walk(tree);
};

export default rehypeLazyImages;
