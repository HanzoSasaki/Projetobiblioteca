
 function handleFormSubmit(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {

      if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
    
      } else {
        alert('Nome de usuário ou senha inválidos!');
      }
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }

  document.getElementById('login-form').addEventListener('submit', handleFormSubmit);

  function setPassword() {
    let accountName = prompt("Please enter your account name");
    let accountPassword = prompt("Please enter your account password");
     
    if (!accountName || !accountPassword) {
       alert("Account name and password can't be empty.");
       return;
    }
     
    localStorage.setItem(accountName, accountPassword);
    alert("Password has been saved.");
   }
   
   function getPassword() {
    let accountName = prompt("Please enter your account name");
     
    if (!accountName) {
       alert("Account name can't be empty.");
       return;
    }
     
    let password = localStorage.getItem(accountName);
     
    if (password === null) {
       alert("No password found for this account name.");
    } else {
       alert("Password for " + accountName + " is " + password);
    }
   }
