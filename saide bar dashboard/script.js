const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('menu-btn');
const content = document.querySelector('.content');

// Toggle the sidebar visibility
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('expand');
  content.classList.toggle('sidebar-expanded');
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  
  // Close all active submenus when the sidebar is toggled
  if (!sidebar.classList.contains('expand')) {
    document.querySelectorAll('.menu-section.active').forEach(activeSection => {
      activeSection.classList.remove('active');
    });
  }
});

// Handle submenu toggles
document.querySelectorAll('[data-toggle="submenu"]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Only toggle submenu if the sidebar is expanded
    if (sidebar.classList.contains('expand')) {
      const section = btn.parentElement;

      // Close all other open submenus
      document.querySelectorAll('.menu-section.active').forEach(activeSection => {
        if (activeSection !== section) {
          activeSection.classList.remove('active');
        }
      });

      // Toggle the current submenu
      section.classList.toggle('active');
    }
  });
});


