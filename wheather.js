let city = document.querySelector('.city'),
btn = document.querySelector('#btn'),
temp = document.querySelector('.temp'),
input = document.querySelector('#input'),
loader = document.querySelector('#loader')
API_key = 'e7b0d101c09859e4dca2fc973500c19d'


btn.addEventListener('click', (e)=>{
  e.preventDefault()
  city.innerHTML = ''
  temp.innerHTML = ''
  country = input.value
  loader.style.display = 'inline-block'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_key}`)
  .then(res=> res.json())
  .then(data=> {
      loader.style.display = 'none'
      city.innerHTML = data.name
      temp.innerHTML = (data.main.temp_min/10).toFixed(0)+'°C/'+(data.main.temp_max/10).toFixed(0)+'°C'
  })
  .catch(err=>{
    loader.style.display = 'none'
    temp.innerHTML = ''
    city.innerHTML = 'Sorry not found city'
  })
})
