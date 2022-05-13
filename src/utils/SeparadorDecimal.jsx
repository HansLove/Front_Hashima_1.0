export const SeparadorDecimal=(num)=>{
    try {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    } catch (error) {
        console.log('error en SeparadorDecimal: ',error)
        return '0'
    }
         
}