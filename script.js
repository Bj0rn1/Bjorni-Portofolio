// mobile menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


// progress animation on scroll
const bars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const value = entry.target.dataset.value;
      entry.target.style.width = value + "%";
    }
  });
});

bars.forEach(bar=>observer.observe(bar));
