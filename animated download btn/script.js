var btnElem = document.getElementById("download");
var progressBar = document.getElementById("progress");
var progressContainer = document.getElementById("progressContainer");
var completionMessage = document.getElementById("completionMessage");

btnElem.addEventListener("click", function () {
  btnElem.innerHTML = '<i class="fas fa-spinner fa-spin text-xl"></i>';
  btnElem.classList.add("bg-[#ef4444]");
  btnElem.disabled = true;

  progressContainer.classList.remove("hidden");

  var progress = 0;
  var interval = setInterval(function () {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      setTimeout(function () {
        btnElem.innerHTML = '<i class="fas fa-check text-xl"></i>';
        btnElem.classList.remove("bg-[#ef4444]");
        btnElem.classList.add("bg-[#a16207]");

        completionMessage.classList.remove("hidden");
      }, 500);
    }
  }, 300);

  setTimeout(function () {
    location.reload();
  }, 7000);
});
