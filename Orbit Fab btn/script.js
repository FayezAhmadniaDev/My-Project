const root = document.getElementById("fab-root");
const wrapper = document.getElementById("fab-wrapper");
const toggle = document.getElementById("fab-toggle");
const icon = document.getElementById("fab-icon");
const items = [...root.querySelectorAll(".fab-item")];
const lines = [...root.querySelectorAll(".fab-line")];
const backdrop = document.getElementById("fab-backdrop");

const startAngle = -170;
const baseRadius = 120;
const step = 10;
let open = false;

const calcPos = (index, total, radius) => {
  const angleDeg = startAngle + (360 / total) * index;
  const angleRad = (angleDeg * Math.PI) / 180;
  return { x: radius * Math.cos(angleRad), y: radius * Math.sin(angleRad) };
};

function updatePositions() {
  const { width:w, height:h } = root.getBoundingClientRect();
  const cx = w/2, cy = h/2;

  items.forEach((item,i)=>{
    const radius = baseRadius + i*step;
    const {x, y} = calcPos(i, items.length, radius);
    const line = lines[i];

    if(open){
      item.style.transform = `translate(${x}px, ${y}px)`;
      item.style.opacity = "1";

      const len = Math.hypot(x, y) - item.offsetWidth/2 - 3;
      const angle = Math.atan2(y, x) * 180/Math.PI;

      line.style.left = `${cx}px`;
      line.style.top = `${cy}px`;
      line.style.width = `${len}px`;
      line.style.opacity = "1";
      line.style.transform = `translate(-0.5px,-50%) rotate(${angle}deg)`;
    } else {
      item.style.transform = `translate(0,0)`;
      item.style.opacity = "0";
      line.style.width = "0";
      line.style.opacity = "0";
      line.classList.remove("active");
    }
  });
}


function toggleMenu() {
  open = !open;
  icon.classList.toggle("fa-plus", !open);
  icon.classList.toggle("fa-xmark", open);
  backdrop.classList.toggle("hidden", !open);
  backdrop.style.opacity = open ? "1" : "0";
  wrapper.style.transform = open ? "rotate(360deg) scale(1.2)" : "rotate(-360deg) scale(0.8)";
  requestAnimationFrame(updatePositions);
}

toggle.addEventListener("click", toggleMenu);

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("scale-90");
    setTimeout(()=>item.classList.remove("scale-90"), 150);
    lines.forEach(l=>l.classList.remove("active"));
    lines[item.dataset.index].classList.add("active");
  });
});

updatePositions();
