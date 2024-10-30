// navbar
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// typed
var typed = new Typed(".typed", {
  strings: [
    "Passionné d’informatique, de jeux vidéo et de technologie depuis mon plus jeune âge, j’ai longtemps travaillé dans le domaine industriel en tant qu’opérateur de production, tourneur fraiseur sur commande numérique. Diplômé d’un  baccalauréat professionnel technicien d’usinage, j’ai pu découvrir le codage sur tours à commande numérique lors de mes différents emplois dans le domaine. Aujourd’hui il m’apparait comme une évidence la relation entre coder un programme d’usinage et coder un site internet, le fait de faire faire une tache à une machine. J’ai donc fais le choix de prendre un nouveau départ et de renouer avec ma passion de l’informatique en alliant les compétences acquises dans d’autres domaines. En tant que personne autonome et autodidacte, j’ai commencé à me former par moi-même et différentes ressources m’ont permis de créer de toutes pièces le site que vous consulter actuellement. Voulant devenir professionnel de la création de site web, il m’est nécessaire d’obtenir un titre professionnel de développeur web et web mobile pour pouvoir me démarquer sur le marché de l’emploi et ainsi réussir ma quête de devenir développeur front-end.",
  ],
  typeSpeed: 10,
  backSpeed: 0,
  fadeOut: true,
  loop: false,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
