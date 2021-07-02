export const rules  = 
{
    email       :   ()                                   =>  value => !value  || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email must be valid',
    equals      :   (valueToMatch, fieldNames="Fields")  =>  value =>  value === valueToMatch || `${fieldNames} must match`, 
   // file        :   (fieldName, ext)                  =>
   //                 {
   //                     const   exts    =   ext.split("/"); 
   //                     return  value   =>  !value || exts.includes(value.name.split('.').pop()) || `${fieldName} is not in valid format`;
   //                 },
   // fileSize    :   (fieldName, num)                  => 
   //                 {
   //                     return value => !value || value.size < num || `File size should be less than ${num}`;
   //                 },
    length      :   ({fieldName="Field", length})       =>  value => (!value || value.length == length) || `${fieldName} should be ${length} characters`,
    maxLength   :   ({fieldName="Field", length})       =>  value => (!value || value.length <= length) || `${fieldName} should be not be more than ${length} characters`,
    minLength   :   ({fieldName="Field", length})       =>  value => (!value || value.length >= length) || `${fieldName} should be not be less than ${length} characters`,
    required    :   (fieldName="Field")                 =>  value => !!value || `${fieldName} is required`
}

export const filters    =
{
    toUpperCase(e) 
    {
        return e.target.value = e.target.value.toUpperCase()
    }, 
    
    toLowerCase(e)
    {
        return e.target.value = e.target.value.toLowerCase()
    }
}