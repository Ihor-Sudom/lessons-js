function withdraw(clients, balances, client, amount) {
  let posishion = clients.indexOf(client);
   if (balances[posishion] >= amount) {
     balances[posishion] = balances[posishion] - amount;
     return balances[posishion];
   }
  return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100));

