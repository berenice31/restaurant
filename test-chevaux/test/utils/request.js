import request from 'superagent'
import fs from 'fs'

const BASE_URL = process.env.API_URL

function find (params = {}) {
  const options = Object.assign({
    url: '', 
    token: null, 
    query: {},
  }, params)

  return request.get(`${BASE_URL}/${options.url}`)
    .query(options.query)
    .set({ Authorization: `Bearer ${options.token}` })
    .then(res => res.body)
}

function fetch (params = {}) {
  return find(params)
}

function get (params = {}) {
  const options = Object.assign({
    url: '', 
    token: null, 
    query: {},
  }, params)

  return find(options)
}

function create (params = {}) {
  const options = Object.assign({
    url: '',
    data: {}, 
    token: null, 
    query: {},
    files: null, 
  }, params)

  if (options.files) {
    const upload = request
      .post(`${BASE_URL}/${options.url}`)
      .query(options.query)
      .set({ Authorization: `Bearer ${options.token}` })

    for (let i = 0; i < options.files.length; i++) {
      const { name, file } = options.files[i]

      upload.attach(name, file)
    }

    if (options.data) {
      upload.field('fields', JSON.stringify(options.data))      
    }
    
    return upload.then(res => res.body)
  } else {
    return request.post(`${BASE_URL}/${options.url}`)
      .query(options.query)
      .set({ Authorization: `Bearer ${options.token}` })
      .send(options.data)
      .then(res => res.body)
  }
}

function patch (params = {}) {
  const options = Object.assign({
    url: '',
    data: {}, 
    token: null, 
    query: {},
  }, params)

  return request.patch(`${BASE_URL}/${options.url}`)
    .set({ Authorization: `Bearer ${options.token}` })
    .query(options.query)
    .send(options.data)
    .then(res => res.body)
}


function update (params = {}) {
  const options = Object.assign({
    url: '',
    data: {}, 
    token: null, 
    query: {},
  }, params)

  return request.put(`${BASE_URL}/${options.url}`)
    .set({ Authorization: `Bearer ${options.token}` })
    .query(options.query)
    .send(options.data)
    .then(res => res.body)
}

function remove (params = {}) {
  const options = Object.assign({
    url: '', 
    token: null, 
    query: {},
  }, params)

  return request.delete(`${BASE_URL}/${options.url}`)
    .query(options.query)
    .set({ Authorization: `Bearer ${options.token}` })
    .then(res => res.body)
}

module.exports = { create, find, get, patch, remove }