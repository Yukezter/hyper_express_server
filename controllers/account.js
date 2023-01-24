export const link = (req, res) => {
  res.status(200).send('link!')
}

export const link_callback = (req, res) => {
  res.status(200).send('link_callback!')
}

export const unlink = (req, res) => {
  res.status(200).send('unlink!')
}

export const set_password = (req, res) => {
  res.status(200).send('set_password!')
}

export const update_profile = (req, res) => {
  res.status(200).send('update_profile!')
}
