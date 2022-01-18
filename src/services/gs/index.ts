import { useCallback } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export default function useGetGSData()
    {
        return useCallback(
            //returns a promise function
            async (
                sheetid: string="1ZoxqPw-JVqWes54FHlTCiXN7sHebiu_2_cdMgzh2lqg",
                sheetindex:Number=0):Promise<Array<any>>=>{
                const doc = new GoogleSpreadsheet(sheetid)
                return new Promise(async (resolve, reject)=>{
                    try {
                        await doc.useServiceAccountAuth({
                        client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
                        private_key: process.env.REACT_APP_PRIVATE_KEY?.replace(/\\n/g, '\n')});
                        await doc.loadInfo();
                        const sheet = doc.sheetsByIndex[sheetindex];
                        console.log(`retrieving sheet index: ${sheetindex} of sheet: ${sheet.title}`)
                        const rows = await sheet.getRows();

                        // gets keys from header row
                        const keys = Object.getOwnPropertyNames(rows[0])
                                            .filter(
                                                ( keys ) => !["_sheet", "_rowNumber", "_rawData"].includes( keys )
                                                )
                        
                        resolve(
                            // return array of data objects
                            rows.map((value, i)=>{
                                let obj = {}
                                keys.forEach((k)=>{
                                    obj[k] = value[k]
                                })
                                return obj
                            })
                        )
                    } catch (e) {
                        console.error('Error in gs auth: ', e);
                        reject()
                    }
                    
                    
                })
        }, [])

}