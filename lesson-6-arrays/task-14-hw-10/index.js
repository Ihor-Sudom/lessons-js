function withdraw(clients, balances, client, amount) {
  let posishion = clients.indexOf(client);
   if (balances[posishion] >= amount) {
     balances[posishion] = balances[posishion] - amount;
     return balances[posishion];
   }
  return -1;
}