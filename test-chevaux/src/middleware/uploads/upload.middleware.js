import Multer from 'multer'
import getFileType  from '@utils/get-file-type'

export function multer (options) {
  const params = Object.assign({
    storage: Multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
      cb(null, true)
    },
  }, options) 

  return Multer(params)
} 

export function upload (options) {
  return multer(options)
}

export function getFiles (...fields) {
  return function getFiles (req, res, next) {
    const files = []
    
    for (let i = 0; i < fields.length; i++) { 
      const fieldName = fields[i]
      const file = (req.file?.fieldname === fieldName ? req.file : null) 
                  || req?.files?.some(file => field.fieldname === fieldName) 

      if (file) {
        req.feathers[fieldName] = file 
        files.push(file)
      }
    }

    if (files.length) {
      const body = req.body 
  
      if (body.fields) {
        try {
          const fields = JSON.parse(body.fields)
  
          if (typeof fields !== 'object') {
            req.body = JSON.parse(fields)
          } else {
            req.body = fields
          }
        } catch (error) {
          
        }
      } else {
        for (const key in req.body) {
          const field = req.body[key]
          let value = req.body[key]
  
          try {
            value = JSON.parse(field)
          } catch (error) {
            if (!isNaN(new Date(field).getTime())) {
              value = new Date(field)
            }
          }
  
          req.body[key] = value
        }
      }
    }
    
    next()
  }
}

export function filesize (number) {
  if (number < 1024) {
    return number + ' octets'
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + ' Ko'
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + ' Mo'
  }
}