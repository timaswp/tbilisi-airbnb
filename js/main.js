var navLinks = document.querySelectorAll('nav a');
var sections = document.querySelectorAll('section');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetSection = document.querySelector(targetId);
    var targetTop = targetSection.offsetTop;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

window.addEventListener('scroll', function() {
  var currentPos = window.pageYOffset;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
});

// Получаем элемент textarea
const commentInput = document.getElementById('comment');

const commentInput2  = document.getElementById('comment2');
const commentInput3 = document.getElementById('comment3');
const commentInput4 = document.getElementById('comment4');
const commentInput5 = document.getElementById('comment5');
const commentInput6 = document.getElementById('comment6');
const commentInput7 = document.getElementById('comment7');

// При изменении значения сохраняем его в localStorage
commentInput.addEventListener('input', () => {
  localStorage.setItem('comment', commentInput.value);
});

commentInput2.addEventListener('input', () => {
    localStorage.setItem('comment2', commentInput2.value);
});
commentInput3.addEventListener('input', () => {
    localStorage.setItem('comment3', commentInput3.value);
});
commentInput4.addEventListener('input', () => {
    localStorage.setItem('comment4', commentInput4.value);
});
commentInput5.addEventListener('input', () => {
    localStorage.setItem('comment5', commentInput5.value);
});
commentInput6.addEventListener('input', () => {
    localStorage.setItem('comment6', commentInput6.value);
});
commentInput7.addEventListener('input', () => {
    localStorage.setItem('comment7', commentInput7.value);
});

// При загрузке страницы восстанавливаем сохраненное значение
window.addEventListener('load', () => {
  const savedComment = localStorage.getItem('comment');
  if (savedComment) {
    commentInput.value = savedComment;
  }
});

window.addEventListener('load', () => {
  const savedComment2 = localStorage.getItem('comment2');
  if (savedComment2) {
    commentInput2.value = savedComment2;
  }
});
window.addEventListener('load', () => {
  const savedComment3 = localStorage.getItem('comment3');
  if (savedComment3) {
    commentInput3.value = savedComment3;
  }
});
window.addEventListener('load', () => {
  const savedComment4 = localStorage.getItem('comment4');
  if (savedComment4) {
    commentInput4.value = savedComment4;
  }
});
window.addEventListener('load', () => {
  const savedComment5 = localStorage.getItem('comment5');
  if (savedComment5) {
    commentInput5.value = savedComment5;
  }
});
window.addEventListener('load', () => {
  const savedComment6 = localStorage.getItem('comment6');
  if (savedComment6) {
    commentInput6.value = savedComment6;
  }
});
window.addEventListener('load', () => {
  const savedComment7 = localStorage.getItem('comment7');
  if (savedComment7) {
    commentInput7.value = savedComment7;
  }
});