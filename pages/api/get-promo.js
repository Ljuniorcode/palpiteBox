import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../planilha-poc/credential.json'

const doc = new GoogleSpreadsheet('1qw--ONuxtWBleqGxFByGPeMgZGcOOZfjKmVIfK9zDyg')

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    console.log(sheet.title)
    const mostrarPromocaoCell = sheet.getCell(1, 0)

    const textoCell = sheet.getCell(1, 1)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'FALSE',
      message: ''
    }))
  }


}