import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Home from './components/home';
import { UseApi } from '@pos-inventory/libs';
const StyledApp = styled.div``;

export function App() {
  const apiConfig = {
    url: '/api/sample',
    method: 'get',
  };

  const { stateData: { data, isLoading, error }, fetchData: getViewMarks } = UseApi(apiConfig);

  useEffect(() => {
    getViewMarks();
  }, []);
console.log(data);

  return (
    <StyledApp>
      {/* <Home /> */}

      <h1>Sample App</h1>

      {isLoading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </StyledApp>
  );
}

export default App;