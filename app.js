let notifications = document.querySelector('.notifications');
    
    let success = document.getElementById('success');
    let error = document.getElementById('error');
    let warning = document.getElementById('warning');
    let info = document.getElementById('info');
    
let madeByLine = document.querySelector('.copyright'); 


function createTost(type, icon, title, text){
    let newTost = document.createElement('div');
    newTost.innerHTML = `<div class="toster ${type}">
    <div class="icon">
        <i class="${icon}"></i>
       </div>
    <div class="tosterHeading">
         <h1>${title}</h1>
         <p>${text}</p>
       </div>
    <i class="fa-solid fa-xmark" onclick=(this.parentElement.remove())></i>
  </div>`
  notifications.append(newTost);
  // newTost.setTimeOut = setTimeout(()=>newTost.remove(), 5000)
}    


success.onclick = function(){
  // old way
  // let type = 'success'
  // let icon = 'fa-solid fa-circle-check'
  // let title = 'Success'
  // let text = 'This is a Success toast.'

  // new way
  const [type, icon, title, text] = ["success", "fa-solid fa-circle-check", "Success", "This is a Success toast."];
  createTost(type, icon, title, text)

  madeByLine.classList.add('copyright-success')
  setTimeout(() => { madeByLine.classList.remove('copyright-success') }, 5000);
}


error.onclick = function(){
  // let type = 'error'
  // let icon = 'fa-solid fa-circle-exclamation'
  // let title = 'Error'
  // let text = 'This is a Error toast.'

  const [type, icon, title, text] = ["error", "fa-solid fa-circle-exclamation", "Error", "This is a Error toast."];
  createTost(type, icon, title, text)

  madeByLine.classList.add('copyright-error')
  setTimeout(() => { madeByLine.classList.remove('copyright-error') }, 5000);
}

warning.onclick = function(){
  // let type = 'warning'
  // let icon = 'fa-solid fa-triangle-exclamation'
  // let title = 'Warning'
  // let text = 'This is a Warning toast.'

  const [type, icon, title, text] = ["warning", "fa-solid fa-triangle-exclamation", "Warning", "This is a Warning toast."];
  createTost(type, icon, title, text)

  madeByLine.classList.add('copyright-warning')
  setTimeout(() => { madeByLine.classList.remove('copyright-warning') }, 5000);
}

info.onclick = function(){
  // let type = 'info'
  // let icon = 'fa-solid fa-circle-info'
  // let title = 'Info'
  // let text = 'This is a Info toast.'

  const [type, icon, title, text] = ["info", "fa-solid fa-circle-info", "Info", "This is a Info toast."];
  createTost(type, icon, title, text)

  madeByLine.classList.add('copyright-info')
  setTimeout(() => { madeByLine.classList.remove('copyright-info') }, 5000);
}