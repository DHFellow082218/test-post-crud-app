export const rules  = 
{
    email       :   ()                                   =>  value => !value  || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email must be valid',
    equals      :   (valueToMatch, fieldNames="Fields")  =>  value =>  value === valueToMatch || `${fieldNames} must match`, 
    fileType    :   (fileName="File", extensions)             => 
                    {
                        return  value   =>  !value || extensions.includes(value.name.split('.').pop()) || `${fileName} is not in valid format`;
                    }, 
    fileSize    :   (fileName="File", fileSize, unit='bytes')     => 
                    {
                        let bytes  = 0; 

                        switch(unit) 
                        {
                            case "KB":
                                bytes = 1000 * fileSize;  
                                break; 

                            case "MB": 
                                bytes = 1000000 * fileSize;  
                                break; 

                            case "GB": 
                                bytes = 1000000000 * fileSize; 
                                break; 

                            default  : 
                                bytes = 1 * fileSize; 
                                break; 
                        }

                        return value => !value || value.size < bytes || `File size should be less than ${fileSize} ${unit}`;
                    },
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