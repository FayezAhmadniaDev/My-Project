(() => {
  const tabs = Array.from(document.querySelectorAll(".tab-btn"));
  const panels = Array.from(document.querySelectorAll(".panel"));
  const card = document.getElementById("card");
  const inputFile = document.getElementById("avatarInput");
  const avatarBtn = document.getElementById("avatarBtn");
  const avatarIcon = document.getElementById("avatar");
  const fileName = document.getElementById("fileName");
  const recentCheckbox = document.getElementById("recent24h");
  let current = 0;
  let darkMode = false;

    function showPanel(index) {
        if (index === current) return;
            const direction = index > current ? 1 : -1;
            const currentPanel = panels[current];
            const nextPanel = panels[index];

        currentPanel.style.transform = `translateX(${-100 * direction}%)`;
        currentPanel.style.opacity = 0;

        nextPanel.classList.remove("panel-hidden");
        nextPanel.style.transform = `translateX(${100 * direction}%)`;
        nextPanel.style.opacity = 0;

        setTimeout(() => {
            nextPanel.style.transition = "transform 0.4s ease, opacity 0.4s ease";
            nextPanel.style.transform = "translateX(0)";
            nextPanel.style.opacity = 1;
        }, 20);

        setTimeout(() => currentPanel.classList.add("panel-hidden"), 400);

        tabs.forEach((btn, i) => {
            const selected = i === index;
            btn.setAttribute("aria-selected", selected);
            btn.tabIndex = selected ? 0 : -1;
            btn.classList.toggle("light-bg-tab-active", selected && !darkMode);
            btn.classList.toggle("dark-bg-tab-active", selected && darkMode);
            btn.classList.toggle("light-bg-tab-inactive", !selected && !darkMode);
            btn.classList.toggle("dark-bg-tab-inactive", !selected && darkMode);
    });

    current = index;
  }

    tabs.forEach((btn, i) => btn.addEventListener("click", () => showPanel(i)));

    avatarBtn.addEventListener("click", () => inputFile.click());
    inputFile.addEventListener("change", () => {
        if (inputFile.files.length) {
            fileName.textContent = inputFile.files[0].name;
            avatarIcon.innerHTML = `<img src="${URL.createObjectURL(inputFile.files[0])}" class="w-full h-full object-cover rounded-full"/>`;
        } else {
            fileName.textContent = "No file chosen";
            avatarIcon.innerHTML = `<i class="fa-solid fa-user"></i>`;
        }
    });

    recentCheckbox.addEventListener("change", () => {
    const now = new Date();
    Array.from(document.getElementById("activityList").children).forEach(li => {
        const time = new Date(li.dataset.time);
        li.style.display = !recentCheckbox.checked || now - time <= 24*60*60*1000 ? "list-item" : "none";
    });
  });

    document.getElementById("saveProfile").addEventListener("click", () => alert("Profile changes saved!"));
    document.getElementById("saveSettings").addEventListener("click", () => alert("Settings saved!"));

    document.getElementById("darkModeToggle").addEventListener("change", (e) => {
        darkMode = e.target.checked;
        card.classList.toggle("dark-bg-card", darkMode);
        card.classList.toggle("light-bg-card", !darkMode);

    tabs.forEach(btn => {
        btn.classList.toggle("dark-bg-tab-active", darkMode && btn.getAttribute("aria-selected")==="true");
        btn.classList.toggle("dark-bg-tab-inactive", darkMode && btn.getAttribute("aria-selected")==="false");
        btn.classList.toggle("light-bg-tab-active", !darkMode && btn.getAttribute("aria-selected")==="true");
        btn.classList.toggle("light-bg-tab-inactive", !darkMode && btn.getAttribute("aria-selected")==="false");
    });

    document.querySelectorAll("button").forEach(b => {
        if(b.id.startsWith("save") || b.id === "avatarBtn"){
            b.classList.toggle("dark-btn", darkMode);
            b.classList.toggle("light-btn", !darkMode);
        }
    });
    
    document.querySelectorAll("select").forEach(s => {
        s.classList.toggle("dark-btn", darkMode);
        s.classList.toggle("light-btn", !darkMode);
    });
  });

})();
