document.querySelectorAll('.btn-setas').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault()

    const carouselList = document.getElementById('carouselList');
    const firstItem = carouselList.getElementsByTagName('li')[0];
    const shiftWidth = firstItem.offsetWidth;


    carouselList.style.transform = `translateX(-${shiftWidth}px)`;


    setTimeout(() => {
      carouselList.style.transition = 'none';
      carouselList.appendChild(firstItem);
      carouselList.style.transform = 'none';

    
      setTimeout(() => {
        carouselList.style.transition = 'transform 0.6s ease';
      }, 50);
    }, 500);
  });
});

document.getElementById("t2").onclick = function() {
  scrollToDestination();
};

function scrollToDestination() {
  const destination = document.getElementById("t2f");
  destination.scrollIntoView({
      behavior: "smooth"
  });
}

document.getElementById("t3").onclick = function() {
  scrollToDestination();
};

function scrollToDestination() {
  const destination = document.getElementById("t3f");
  destination.scrollIntoView({
      behavior: "smooth"
  });
}


// Quando o usuário rola a página, execute a função
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Se a página for rolada mais de 20px do topo, mostre o botão
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Se a página for rolada mais de 20px do topo, mostre o botão
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// Quando o usuário clicar no botão, role suavemente para o topo do documento
document.getElementById("backToTopBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}