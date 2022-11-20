// let lang = prompt('')


// if (lang === 'Salom'){
//     alert(lang + ' Siz Ozbekmisiz ?')
// }else if( lang === 'Привет'){
//     alert(lang + ' Вы Россиянены ? ')
// }else if(lang === 'Hi' || lang === 'Hello'){
//     alert(lang + ' Are you American')
// }else{
//     alert('Xato')
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// for(let i =0; i < 10; i++){
//     console.info(i)
// }


// function amount(a,b){
//     let c = a + b
//     return c


// function num(){
//     let a = 0
//     for (let i = 0; i <= 10; i++ ){


//         a = a + i
//     }
//     return(a) 
// }
// let t = num()

// console.info(t)




/* Abyekt */

// const user = 'Abdulloh'

// // user +=  ' webcoder '

// const name = user + ' webcoder '

// console.info(name)


// const obj = {}                            /* typeof malumot turini bilish imkonini beradi   */
// console.info(typeof obj)

// if(typeof obj === 'object'){
//     console.info('malumot turi obyekt')
// }else if (typeof obj === 'string'){
//     console.info('malumot turi String')   
// }else if (typeof obj === 'number'){
//     console.info('malumot turi son')   
// }


// console.info(user)

// const isName = 'name' in user 
// console.info(isName)
// console.info(isfrom)


// for(const key in user){
//     console.info( key, user [key])
// }


// }

// user.from = 'Tashkent'

// const myFrom = 'from'

// console.info(user[myFrom])

// const user = {
//     /* klyuch: znacheniya */
//     name: 'Abdulloh',
//     age :16,
// 'salom dunyo': 'sengaham'



// for(const in user ){
//     console.info(kalit: ${key}\n qiymat: ${user[key]})
// }

// /* metod */


//     const user = {
//         name: 'Abdulloh',
//         age: 16,
//         from: 'tashkent',
//         addAge: function(){
//             console.info(this)
//         }
//     }

//     user.addAge()


// console.info(user.age)


// const users = {
//     '1': {
//         name: 'fromtend',
//         age: 16
//     },
//     '2':{
//         name: 'backend',
//         age:17
//     }
// }


// console.info(users)

// for(const key in users){
//     console.info(users[key].age)
// }



// console,info(users)



// const users = {}

// const id = '3'
// users[id] = {
//     name: 'Abdulloh',
//     age: 32
// }




// let user = prompt()

// if (user === prompt) {
//     console.info(' String')
// } else if (user === +prompt) {
//     console.info(' Number')
// } 
// console.info(typeof user)




// const obj = prompt                           /* typeof malumot turini bilish imkonini beradi   */
// console.info(typeof obj)

// if(typeof obj === 'object'){
//     console.info('malumot turi obyekt')
// }else if (typeof obj === 'string'){
//     console.info('malumot turi String')   
// }else if (typeof obj === 'number'){
//     console.info('malumot turi son')   
// }
















let bank = prompt('Tilni tanlang / Выберите язык \nUz / Ru')

if (bank === 'Uz') {

    let num = prompt('Xizmat turini tanlang \n\n\nNaqt pul yechish - #1 / Hisobni tekshirish - #2 / Kartani qaytib olish - #3')
    if (num == 1) {
        alert('\nMarhamat pulingizni oling !')
    } if (num == 2) {
        alert('\n Marhamat Hisobingiz :')
    }

    if (num == 3) {
        alert('\n Marhamat kartangizni oling')

    }

} else if (bank === 'Ru') {

    let int = prompt('Выберите тип услуги \n\n\nСнятие наличных - #1 / Проверка счета - #2 / Возвращение карты - #3')
    if (int == 1) {
        alert('\nВозьми деньги ')
    } if (int == 2) {
        alert('\nВаш счет составляет :')
    } if (int == 3) {
        alert('\nВозьмите Карту')
    }

} else {
   alert( 'xato / ошибка')
}

