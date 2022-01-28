const generate = document.getElementById('generate')
const check = document.getElementById('check')
const captcha_str = 'abcdefghijklmnopqrstuvwxyz'
let captcha_g = ''
document.getElementById('status').innerHTML = "Captcha Generator"
const captcha_generater = () => {
    for (let i = 0; i < 6; i ++) {
        captcha_g += captcha_str[Math.floor(Math.random() * captcha_str.length)].toUpperCase()
        captcha_g += captcha_str[Math.floor(Math.random() * captcha_str.length)]
        captcha_g += Math.floor(Math.random() * 10)
        if (captcha_g.length == 6) return captcha_g.toString()
    }
}
const captcha = () => {
    let capt = captcha_generater()
    document.getElementById('generated-captcha').value = capt
    document.getElementById('status').innerHTML = "Captcha Generated!"
    captcha_g = ''
}
const check_captcha = () => {
    let cap = document.getElementById('generated-captcha').value
    let userCaptcha = document.getElementById('entered-captcha').value
    if (userCaptcha.length > 6) document.getElementById('status').innerHTML = "Very long string"
    else if (userCaptcha == cap) document.getElementById('status').innerHTML = "Correct Captcha!!"
    else {
        document.getElementById('status').innerHTML = "Try Again!!"
        document.getElementById('entered-captcha').value = ""
    }
}
generate.addEventListener('click', captcha)
check.addEventListener('click', check_captcha)