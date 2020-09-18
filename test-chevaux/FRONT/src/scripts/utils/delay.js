export default function (delay = 2000, startedAt = 0) {
  let duration = delay 

  if (startedAt) {
    duration = Math.max(0, delay - ((Date.now() - startedAt) / 1000))  
  }

  return new Promise(resolve => setTimeout(resolve, duration))
}
