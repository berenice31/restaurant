export default (app, extension) => {
  const accepted = app.get('files')

  if (extension.match(new RegExp(accepted.image, 'i'))) {
    return 'image'
  }
  if (extension.match(new RegExp(accepted.video, 'i'))) {
    return 'video'
  }
  if (extension.match(new RegExp(accepted.audio, 'i'))) {
    return 'audio'
  }
  if (extension.match(new RegExp(accepted.document, 'i'))) {
    return 'document'
  }

  return 'unknown'
}
