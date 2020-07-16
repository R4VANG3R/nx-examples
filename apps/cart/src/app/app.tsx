import React from 'react';
import { Route } from 'react-router-dom';
import styled from "styled-components";

import '@nx-example/shared/header';

import { CartCartPage } from '@nx-example/cart/cart-page';

const Div = styled.div`
  background: rebeccapurple;
`;

export const App = () => {
  return (
    <>
      <nx-example-header />
      <Div>Foo</Div>
      <Route path="/cart" exact component={CartCartPage} />
    </>
  );
};

export default App;
