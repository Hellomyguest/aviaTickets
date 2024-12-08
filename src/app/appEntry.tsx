import { Provider } from 'react-redux';
import './appCss.css';
import { store } from './appStore';
import { TicketsMarket } from '@widgets/TicketsMarket';

export const App = () => {
  return (
    <Provider store={store}>
      <TicketsMarket />
    </Provider>
  );
};
