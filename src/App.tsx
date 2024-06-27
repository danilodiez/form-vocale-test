import { useState } from 'react';
import { Header } from './components/Header';
import { CustomTabs } from './components/Tabs';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CustomTabs />
    </>
  );
}

export default App;
