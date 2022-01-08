import React from 'react';
import { Layout } from 'components/Layout.jsx';
import Router from 'routes/Router';

function App() {
  return (
    <Layout style={{ minHeight: '100%', marginBottom: '100px' }}>
      <Router />
    </Layout>
  );
}

export default App;
