const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credential.json')

const doc = new GoogleSpreadsheet('1qw--ONuxtWBleqGxFByGPeMgZGcOOZfjKmVIfK9zDyg')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: 'luciano',
      Email: 'contato@palpitebox.com',
      Whatsapp: '62 987456321',
      Cupom: 'fullstack',
      Promo: 'NOV2020'
    })


  } catch (err) {
    console.log(err)
  }
}
run()