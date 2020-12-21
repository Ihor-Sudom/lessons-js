
class User {
  constructor (id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}


class UserRepository {
  constructor (arr) {
    this._users = Object.freeze(arr);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return arr.map(el => el.name);
  }

  getUserIds() {
    return arr.map(el => el.id);
  }

  getUserNameById(id) {
    return arr.find(el => el.id == id);
  }
}


