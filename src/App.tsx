import { useEffect, useState } from 'react';
import { ConfigProvider, theme, Button } from 'antd';
import { styled } from 'styled-components';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(true);
  }, []);

  return (
    <Background>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: '#B30000',
          },
        }}
      >
        <Button type='primary'>Change Theme to {isDarkMode ? 'Light' : 'Dark'}</Button>
      </ConfigProvider>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.88);
  min-height: 100vh;
`;
