import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello-world')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-xl p-4">{message}</p>

      <Button>Click me</Button>
    </div>
  );
}

export default App;
