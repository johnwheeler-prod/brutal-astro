type HastProperties = Record<string, unknown>;

interface HastElement {
  type: 'element';
  tagName: string;
  properties?: HastProperties;
  children?: HastNode[];
}

interface HastRoot {
  type: 'root';
  children?: HastNode[];
}

type HastNode = HastElement | { type: string; children?: HastNode[] };

const setImageProps = (node: HastElement) => {
  const props: HastProperties = node.properties || {};

  if (!props.loading) props.loading = 'lazy';
  if (!props.decoding) props.decoding = 'async';
  if (!props.sizes) props.sizes = '(min-width: 1024px) 800px, 100vw';

  node.properties = props;
};

const walk = (node: HastNode) => {
  if (node.type === 'element' && 'tagName' in node && node.tagName === 'img') {
    setImageProps(node as HastElement);
  }

  if ('children' in node && Array.isArray(node.children)) {
    for (const child of node.children as HastNode[]) {
      walk(child);
    }
  }
};

const rehypeLazyImages = () => (tree: HastRoot) => {
  walk(tree);
};

export default rehypeLazyImages;
