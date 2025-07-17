   const themeToggle = document.getElementById('themeToggle');
   themeToggle.addEventListener('click', () => {
       document.documentElement.classList.toggle('dark');
       localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
   });

   if (localStorage.getItem('theme') === 'dark' || 
       (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       document.documentElement.classList.add('dark');
   }

   document.querySelectorAll('.nav-item').forEach(item => {
       item.addEventListener('click', function(e) {
           e.preventDefault();
           document.querySelectorAll('.nav-item').forEach(i => {
               i.classList.remove('active', 'text-indigo-600', 'dark:text-indigo-400');
               i.classList.add('text-gray-600', 'dark:text-gray-300');
           });
           this.classList.add('active', 'text-indigo-600', 'dark:text-indigo-400');
           this.classList.remove('text-gray-600', 'dark:text-gray-300');
       });
   });