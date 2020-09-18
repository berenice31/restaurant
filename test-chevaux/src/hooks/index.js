import Debug from 'src/services/horse/service/@debug'

const debug = Debug('hooks')

export function handleErrorMessage (transformations = {}) {
  return function handleErrorMessage (context) {
    const overridenMessage = transformations[context?.error?.message]

    if (overridenMessage || overridenMessage === '') {
      context.error.message = overridenMessage
    }
    
    return context
  }
}
