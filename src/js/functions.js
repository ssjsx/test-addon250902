import Util from '@/js/util.js'; 
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * @param {string} arg0 - 支持字符串参数
 * @param {number} arg1 - 支持数值参数
 * @param {boolean} arg2 - 支持bool参数
 * @returns {number} - 可以设置返回值类型
 */
function custom_function(arg0, arg1, arg2, arg3, arg4) {
    let argAndType = (arg) => `${arg}: ${typeof arg}`
    let argAndTypeList = [arg0, arg1, arg2, arg3, arg4].map(argAndType)
    let message = `这是一个加载项自定义函数(${argAndTypeList.join(', ')})`
    console.log(message)
    return message
}

/**
 * This is a custom test function
 * @customfunction
 * @param {string} arg0 - string
 * @param {number} arg1 - number
 * @param {boolean} arg2 - boolean
 * @returns {string} - return as a string
 */
function custom_test_function(arg0, arg1, arg2) {
    let argAndType = (arg) => `${arg}: ${typeof arg}`
    let argAndTypeList = [arg0, arg1, arg2].map(argAndType)
    Util.test2()
    let message = `This is a custom test function with input (${argAndTypeList.join(', ')})`
    console.log(message)
    return message
}
