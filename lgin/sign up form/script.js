// Login Form Variables
let loginForm = document.getElementById('login-form')
let loginUsernameInput = document.getElementById('login-username-input')
let loginPasswordInput = document.getElementById('login-password-input')
let hideLoginForm = document.getElementById('hide-login-form')
let submitLogin = document.getElementById('submit-login')

// Sign-up Form Variables
let signupForm = document.getElementById('signup-form')
let signupUsernameInput = document.getElementById('signup-username-input')
let signupPasswordInput = document.getElementById('signup-password-input')
let hideSignupForm = document.getElementById('hide-signup-form')
let submitSignup = document.getElementById('submit-signup')

// Hide and show forms
hideLoginForm.addEventListener('click',()=>{
    loginForm.style.display = 'none'
    signupForm.style.display = 'flex'
})

hideSignupForm.addEventListener('click',()=>{
    signupForm.style.display = 'none'
    loginForm.style.display = 'flex'
})

// Sign-up codes 
submitSignup.addEventListener('click',(event)=>{
    event.preventDefault()
    users.push({
        username:signupUsernameInput.value,
        userpass:signupPasswordInput.value
    })
    
    
    localStorage.setItem('users',JSON.stringify(users))

    signupForm.style.display = 'none'
    loginForm.style.display = 'flex'

    signupUsernameInput.value = ''    
    signupPasswordInput.value = ''

})

// Login codes 
submitLogin.addEventListener('click',(event)=>{
    event.preventDefault()
    let userFounder = users.filter(user => user.username == loginUsernameInput.value && user.userpass == loginPasswordInput.value)
    if (userFounder[0]!=null) {

        localStorage.removeItem('loggedInUser')
        localStorage.setItem('loggedInUser',JSON.stringify(userFounder))

        window.location.replace('../../Main page/index.html') 
    }else{
        document.getElementById('err').innerHTML = 'No Account Founded'
        setTimeout(() => {
            document.getElementById('err').innerHTML = ''
        }, 3000);
        
    }

    loginUsernameInput.value = ''
    loginPasswordInput.value = ''
})