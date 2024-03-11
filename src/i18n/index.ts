import spanish from './es.json'
import  english from './en.json'

const LANGUEGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const getI18N = (
    {currentLocale ='es'}: 
    {currentLocale ?: string | undefined}
)=>{
    if(currentLocale === LANGUEGES.ENGLISH) return  english
    if (currentLocale === LANGUEGES.SPANISH) return spanish
    return spanish
}