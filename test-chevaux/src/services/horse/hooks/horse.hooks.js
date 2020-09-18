export function log (message) {
  return function log (context) {
    // context.data = req.body
    // context.params = 
    // context.result = res.body
    console.log(`Hook ${message}`)
  }
}

export function format () {
  return async function format (context) {
    const { result } = context
    
    

    return context
  }
}