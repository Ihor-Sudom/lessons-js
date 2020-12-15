

const createMessenger = () => {
   let message = 'Just learn it';
   let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text2) {
    sender = text2;
  }

  return { 
    sendMessage,
    setMessage,
    setSender,
  };
};
export default createMessenger;






