const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credential.json')

const doc = new GoogleSpreadsheet('1qw--ONuxtWBleqGxFByGPeMgZGcOOZfjKmVIfK9zDyg')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
  } catch (err) {
    console.log(err)
  }
}
run()