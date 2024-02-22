import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import dummyDataStore from '../../components/store/dummyDataStore';

const DummyDataDisplay = observer(() => {
  useEffect(() => {
    dummyDataStore.fetchData();
  }, []);

  if (dummyDataStore.loading) {
    return <div>Loading...</div>;
  }

  if (dummyDataStore.error) {
    return <div>Error: {dummyDataStore.error}</div>;
  }

  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {dummyDataStore.data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default DummyDataDisplay;
