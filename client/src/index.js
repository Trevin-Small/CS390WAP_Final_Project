import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router';
import './index.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./router', () => {
    render(App)
  })
}