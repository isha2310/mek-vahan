const LoginAPI = (user) => {
    
    return  fetch(`https://mekvahan.com/api/android_intern_task`, {
        method: 'POST',
        headers: {
            Accept:"application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((res) => {
        return res.json()
    }).catch((e) => {
        return e.json()
    })
}

export default LoginAPI