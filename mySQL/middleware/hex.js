//want to use this for process passwords

const passwordHex = (password) => {
  const salt = await bcrypt.genSalt()
  const hexPass = await
}
