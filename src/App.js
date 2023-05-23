import { useSelector } from 'react-redux';

import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards/TinderCards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import UserPage from './Components/UserPage/UserPage';
import Chat from './Components/Chat/Chat';

import './App.scss';

function App() {
  const { currentPage } = useSelector((rootReducer) => rootReducer.pageReducer);

  switch (currentPage) {
    case 'Cards':
      return (
        <div className="App">
          <Header />
          <TinderCards />
        </div>
      );

    case 'Chat':
      return (
        <div className="App">
          <Header />
          <Chat />
        </div>
      );
      case 'User':
        return (
          <div className="App">
            <Header />
            <UserPage />
          </div>
        );
    default:
      return (
        <div className="App">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </div>
      );
  }
}

export default App;
