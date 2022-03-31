import ReactDOM from 'react-dom';
import App from '../src/App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient(); 

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
 