/* eslint-disable @typescript-eslint/ban-types */

declare namespace JSX {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface IntrinsicAttributes {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // css?: any;
    // css?: BindingValue<Record<string, boolean>>;
  }

  interface ElementAttributesProperty {
    props: {};
  }

  interface ElementChildrenAttribute {
    children: {};
  }
}
