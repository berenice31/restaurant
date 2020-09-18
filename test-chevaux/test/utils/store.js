class Store {
  constructor () {
    this.items = {}
  }

  get (key) {
    return this.items[key]
  }

  add (key, value) {
    this.items[key] = value.toObject ? value.toObject() : value

    return this.get(key)
  }

  create (key, value) {
    return this.add(key, value)
  }

  patch (key, value) {
    this.items[key] = {
      ...this.items[key],
      ...(value.toObject ? value.toObject() : value),
    }

    return this.get(key)
  }

  update (key, value) {
    this.items[key] = value.toObject ? value.toObject() : value 

    return this.get(key)
  }

  remove (key) {
    delete this.items[key]
  }
}

export default new Store()