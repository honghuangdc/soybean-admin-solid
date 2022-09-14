import type { Component } from 'solid-js';

interface Props {
  children: Component;
}

export default function BlankLayout(props: Props) {
  return <>{props.children}</>;
}
