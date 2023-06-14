import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { Layout } from './Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(true);
  }, []);

  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#B30000',
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <div className='app'>
          <div className='container'>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </div>
        </div>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
