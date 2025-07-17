const elements = [
    { id: "house", color: "#007bff" },
    { id: "like", color: "#dc3545" },
    { id: "share", color: "#28a745" },
    { id: "gear", color: "#ffc107" },
    { id: "person", color: "#4b317c" }
];

elements.forEach(function({ id, color }) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("mouseenter", function() {
            element.style.border = `1px solid ${color}`;
            element.style.borderRadius = "8px";
        });

        element.addEventListener("mouseleave", function() {
            element.style.border = "";
            element.style.borderRadius = "";
        });
    }
});

const iconElements = [
    { id: "house", hoverClass: "bi bi-house-door-fill", originalClass: "bi bi-house-door" },
    { id: "like", hoverClass: "bi bi-heart-fill", originalClass: "bi bi-heart" },
    { id: "share", hoverClass: "bi bi-share-fill", originalClass: "bi bi-share" },
    { id: "gear", hoverClass: "bi bi-gear-fill", originalClass: "bi bi-gear" },
    { id: "person", hoverClass: "bi bi-person-fill", originalClass: "bi bi-person" }
];

iconElements.forEach(function({ id, hoverClass, originalClass }) {
    const element = document.getElementById(id).querySelector("i");
    if (element) {
        element.addEventListener("mouseenter", function() {
            element.className = hoverClass;
        });

        element.addEventListener("mouseleave", function() {
            element.className = originalClass;
        });
    }
});
