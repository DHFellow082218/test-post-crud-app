export default
{
    required: function (str) {
        return [
            value => !!value || str + ' is required',
        ]
    },
    max: function (str, num) {
        return [
            value => (!value || value.length <= num) || str + ' should not be more than ' + num + ' characters',
        ]
    },
    min: function (str, num) {
        return [
            value => (!value || value.length >= num) || str + ' should not be less than ' + num + ' characters',
        ]
    },
    length: function (str, num) {
        return [
            value => (!value || value.length == num) || str + ' should be ' + num + ' characters',
        ]
    },
    email: function () {
        return [
            value => !value || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email must be valid'
        ]
    },
    file: function (str, ext) {
        var exts = ext.split("/")
        return [
            value => !value || exts.includes(value.name.split('.').pop()) || str + ' is not in valid format'
        ]
    },
    fileSize: function (str, num) {
        return [
            value => !value || value.size < num || 'File size should be less than ' + str
        ]
    }
}