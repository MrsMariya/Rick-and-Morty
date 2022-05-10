import './index.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import StartPage from './components/StartPage/StartPAge';
import { RoutersMap } from './constants';
import { CardDetails } from './components/CardDetails/CardDetails';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={`${RoutersMap.characters}/*`} element={<StartPage />} />
            <Route path={`${RoutersMap.characters}/:id`} element={<CardDetails />} />
            <Route path={RoutersMap.about} element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
