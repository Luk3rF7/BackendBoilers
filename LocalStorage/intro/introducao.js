// todo LocalStorage lugar onde guardo 
// salva no localStorage:
function saveItem(item) {
  localStorage.setItem('item salvo: ', item)
}

//recuperando do localStorage:
function getItemStore() {
  return localStorage.getItem('item salvo')
}

saveItem('item salvo no localStorage')//
getItemStore()//

// todo SessionStorage: lugar onde deixo por um tempo

function itemSession(item) {
  sessionStorage.setItem('item', item);
}

//pega item da session
function getItemSession() {
  return sessionStorage.get('item')
}

itemSession('item session')
getItemSession()
