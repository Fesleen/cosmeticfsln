import './App.css';
import Layout from '../src/Layout';
import RouterComponent from '../src/routes';
import MainPages from './pages/main';

function App() {
  return (
    <Layout>
      <RouterComponent>
        <MainPages/>
      </RouterComponent>
    </Layout>
  );
}

export default App;
