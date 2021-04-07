// Must be a minimum of 8 characters
function validatePassword (password) {
    const lowerCase = ('abcdefghijklmnopqrstuvwxyz')
    const upperLetter = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    const numeric = ('123456789')
    const specialCharacter = ('!@#$%^&*=+')
    let isLongEnough = false
    let hasLowerCase = false
    let hasUpperCase = false
    let hasNumeric = false
    let hasSpecialCharacter = false
    for (let i =0; i < password.length; i++) {  
    if (password.length >= 8) isLongEnough = true
    if (lowerCase.includes(password[i])) hasLowerCase = true
    if (upperLetter.includes(password[i])) isLongEnough = true
    if (numeric.includes(password[i])) hasNumeric = true
    if (specialCharacter.includes(password[i])) hasSpecialCharacter = true
          }
          return isLongEnough && hasLowerCase && hasUpperCase && hasNumeric && hasSpecialCharacter
        }   
    
    
   // module.exports = validatorPassword
    
       console.log(validatePassword([true, false]))



// function validatePassword (pasword) {
//     if (password.length >= 8) {
//     return false
//    }
// // Must contain at least one lower case letter
// function validatePassword (lowerCase) {
//     const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
//     if (lowerCase.length >= 1) {
//     return false
// }
// // Must contain at least one upper case letter
// function letter (upperCase) {
//     const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'
//     if (upperCase.length >= 1) {
//     return false
// }
// // Must contain at least one numeric value
// function numeric (numericValue) {
//     const number = '123456789'
//     if (numericValue.length >= 1) {
//     return false
// }
// // Must contain at least one special character
// function charcter (specialCharcter) {
//     const characters = '!@#$%^&*=+'
//     if (Character.indexOf[i] >= 0) {
//         return false
//     }
// }
// // Return true when the password given 
// //meets requirements.
// function meetRequirements(pasword8)
// const passwordMeet = lowerLetter.concat(upperLetter, numericValue, specialCharcter)
// for (let i =0; i < password8.length;i++) {
//     if (passwordMeet.indexOf(password8)[i] >= 0) {
//         return true
//     }
  
// console.log(meetRequirements([P455w0rd1, false])

