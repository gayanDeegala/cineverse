import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { Layout } from './Layout';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(true);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#B30000',
        },
      }}
    >
      <div className='app'>
        <div className='container'>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
