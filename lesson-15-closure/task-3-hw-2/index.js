export function createLogger() {

  let memory = [];

  function warn(text) {
    memory.push({
      message: text,
      type: 'warn',
      dateTime: new Date(),
    });
  };

  function error(text) {
    memory.push({
      message: text,
      type: 'error',
      dateTime: new Date(),
    });
  };

  function log(text) {
    memory.push({
      message: text,
      type: 'log',
      dateTime: new Date(),
    });
  };

  function getRecords(str) {
    const memorySort = memory.sort((a, b) => b.dateTime - a.dateTime);
    return str === undefined ? memorySort
                             : memorySort.filter(el => el.type === str);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
