
function sortContacts(contacts, n) {
  if (Array.isArray(contacts)) {
    if (n == false) {
      return sortWane(contacts);
    }
    return sortGrowth(contacts);
  } 
   return null;
}

function sortWane(contacts) {
  let contactsSort = contacts.sort((a, b) => b.name.localeCompare(a.name));
  return contactsSort;
}

function sortGrowth(contacts) {
  let contactsSort = contacts.sort((a, b) => a.name.localeCompare(b.name));
  return contactsSort;
}

