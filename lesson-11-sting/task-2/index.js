function sortContacts(contacts, n) {
  if (Array.isArray(contacts)) {
    return contacts.sort((a, b) => n === false ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
  }
  return null;
}