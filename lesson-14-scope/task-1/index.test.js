import { sendMessage, setMessage } from './index';

it('should get string', () => {
  const result = sendMessage('Ann');
  expect(result).toEqual('Ann, Just learn it! Your Gromcode');
});

it('should get new string', () => {
  const result = setMessage('Good job');
  expect(result).toEqual('Good job');
});
