const signInEmailInput = document.getElementById("signInEmail");
const signInPasswordInput = document.getElementById("signInPassword");
const signUpNameInput = document.getElementById("signUpName");
const signUpEmailInput = document.getElementById("signUpEmail");
const signUpPasswordInput = document.getElementById("signUpPassword");
const signInProgress = document.getElementById("signInProgress");
const signUpsProgress = document.getElementById("signUpsProgress");
const signInShowPassword = document.getElementById("signInEyeIcon");
const signUpShowPassword = document.getElementById("signUpEyeIcon");
const rightContainer = document.getElementById("rightContainer");
const leftContainer = document.getElementById("leftContainer");
const signUpLoginBtn = document.getElementById("signUp");
const labelHElem = document.getElementById("labelHElem");
const labelPElem = document.getElementById("labelPElem");
const signupContainer = document.getElementById("signupContainer");
const mobileSignUpBtn = document.getElementById("mobileSignUp");
const mobileSignInBtn = document.getElementById("mobileSignIn");

const updateProgress = (inputs, progressBar) => {
  let filled = 0;
  inputs.forEach((input) => {
    if (input.value) filled++;
  });
  let progress = Math.round((filled / inputs.length) * 100);
  progressBar.style.width = progress + "%";
};

const toggleShowPassword = (passwordInput, eyeIcon) => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    eyeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.5a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 12.544 12.544M21 21l-3-3" />`;
  } else {
    passwordInput.type = "text";
    eyeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />`;
  }
};

const switchContainer = () => {
  rightContainer.classList.toggle("active");
  signupContainer.classList.toggle("hidden");
  signupContainer.classList.toggle("show");
  leftContainer.classList.toggle("hidden");
  if (rightContainer.classList.contains("active")) {
    signUpLoginBtn.classList.remove(
      "bg-gradient-to-r",
      "from-green-500",
      "to-teal-500"
    );
    signUpLoginBtn.classList.add(
      "bg-gradient-to-r",
      "from-indigo-500",
      "to-purple-500"
    );
    labelHElem.textContent = "Already have an account?";
    labelPElem.textContent =
      "Sign in now to access your account, manage your preferences, and enjoy all our services!";
    signUpLoginBtn.textContent = "Sign In";
  } else {
    signUpLoginBtn.classList.remove(
      "bg-gradient-to-r",
      "from-indigo-500",
      "to-purple-500"
    );
    signUpLoginBtn.classList.add(
      "bg-gradient-to-r",
      "from-green-500",
      "to-teal-500"
    );
    labelHElem.textContent = "New here?";
    labelPElem.textContent =
      "Create your free account and join us today. We’d love to have you on board and share amazing experiences together!";
    signUpLoginBtn.textContent = "Sign Up";
    signupContainer.style.visibility = "visible";
  }
};

function toggleMobileContainers(showSignup) {
  if (showSignup) {
    leftContainer.classList.add("hidden");
    signupContainer.classList.remove("hidden"); 
  } else {
    signupContainer.classList.add("hidden");
    leftContainer.classList.remove("hidden");
  }
}

signInEmailInput.addEventListener("input", () =>
  updateProgress([signInEmailInput, signInPasswordInput], signInProgress)
);
signInPasswordInput.addEventListener("input", () =>
  updateProgress([signInEmailInput, signInPasswordInput], signInProgress)
);

signUpNameInput.addEventListener("input", () =>
  updateProgress(
    [signUpNameInput, signUpEmailInput, signUpPasswordInput],
    signUpsProgress
  )
);
signUpEmailInput.addEventListener("input", () =>
  updateProgress(
    [signUpNameInput, signUpEmailInput, signUpPasswordInput],
    signUpsProgress
  )
);
signUpPasswordInput.addEventListener("input", () =>
  updateProgress(
    [signUpNameInput, signUpEmailInput, signUpPasswordInput],
    signUpsProgress
  )
);

signInShowPassword.addEventListener("click", () =>
  toggleShowPassword(signInPasswordInput, signInShowPassword)
);

signUpShowPassword.addEventListener("click", () =>
  toggleShowPassword(signUpPasswordInput, signUpShowPassword)
);
signUpLoginBtn.addEventListener("click", switchContainer);
mobileSignUpBtn.addEventListener("click", () => toggleMobileContainers(true));
mobileSignInBtn.addEventListener("click", () => toggleMobileContainers(false));

