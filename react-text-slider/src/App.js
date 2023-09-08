import { useState } from 'react';

import clouds from './placeholder.jpg'
import './App.css';
import MessageAlt from './component/MessageAlt';
import NewMessageForm from './component/form/NewMessageForm';




function App() {
  const [showAdd, setShowAdd] = useState(false);


  const addMessageApi = async (messageText) => {
    try {
      const response = await fetch('http://localhost:5000/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: messageText }),
      });
      const data = await response.json();
      console.log('Message sent:', data);
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  const toggleAdd = () => {
    setShowAdd((prevShowAdd) => !prevShowAdd);
  };


  return (
    <div className="App">
      <div className='container'>
      <div className='frameimg'>
      {/* <img src="https://picsum.photos/1200/600" alt="" srcset="" width={900} height={450}/> */}
      <img src={clouds} alt="" srcset="" width={900} height={450}/>

      </div>


      <div className='messagebox'>
      <MessageAlt />
      </div>
    <div className='send'>
      <button onClick={toggleAdd}>{showAdd ? 'Hide Form' : 'Show Form'}</button>
      { showAdd && <NewMessageForm addMessage={addMessageApi} /> }
    </div>

      </div>
    </div>
  );
}

export default App;
