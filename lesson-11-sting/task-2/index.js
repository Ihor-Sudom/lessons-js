function sortContacts(contacts, n) {
  if (Array.isArray(contacts)) {
    return contacts.sort((a, b) => n === true || n === undefined ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  }
  return null;
}

