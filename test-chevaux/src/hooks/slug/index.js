import slugify from 'nb-slug'
import { Types } from 'mongoose'

const ObjectId = Types.ObjectId

export const setSlug = function(field, target = 'slug') {
  return function(hook) {
    if (hook.data[field]) {
      hook.data[target] = slugify(hook.data[field])
      return Promise.resolve(hook)
    } else {
      return Promise.resolve(hook)
    }
  }
}

export const getBySlugOrId = function(options) {
  return function(hook) {
    let query = {}

    if (ObjectId.isValid(hook.id)) {
      query.$or = [{
        _id: hook.id
      }, {
        slug: hook.id
      }]
    } else {
      query.slug = hook.id
    }

    return hook.service.find({
      query,
      paginate: false
    }).then(result => {
      if(result.length === 1) {
        hook.result = result[0]
      }

      return Promise.resolve(hook)
    })
  }
}
