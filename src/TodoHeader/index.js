import { Children, cloneElement } from 'react';

export const TodoHeader = ({ children, loading }) => {
  const childrenArray = Children.toArray(children).map((child) =>
    cloneElement(child, { loading })
  );

  return <header>{childrenArray}</header>;
};
