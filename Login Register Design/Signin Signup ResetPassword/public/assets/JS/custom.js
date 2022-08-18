
//================Hide and Show Password=========================
  function hideShow() {
    var x = document.getElementById("myPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function hideShow2() {
    var x = document.getElementById("confirm_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function hideShow3() {
    var x = document.getElementById("checkPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//============Page show====================
  function signup() {
    const signUpButton = document.getElementById('signUp');
    signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
  }
  function login() {
    const signInButton = document.getElementById('signIn');
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
  }

  function signupMobile() {
    const signUpButton = document.getElementById('signUpMobile');
    signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
  }
  function loginMobile() {
    const signInButton = document.getElementById('signInMobile');
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
  }


