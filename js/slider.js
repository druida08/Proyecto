@import url(https://fonts.googleapis.com/css?family=Inconsolata);
@font-face {
  font-family: "Inconsolata";
  src: url(../fonts/inconsolata.ttf);
}
@font-face {
  font-family: "Poppins";
  src: url(../fonts/Poppins-Bold.ttf);
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Inconsolata";
}
img {
  display: block;
  width: 100%;
}
.main-header {
  padding: 0 20px;
}
.main-header__title{
  text-align: center;
  font-size: 2.5em;
  margin: 10px 0;
  color: #454546;
  font-family: "Poppins";
}
.main-header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-header__link {
  color: #333;
}

/* Estilos del Menu */
.main-nav {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  z-index: 999999;
}
.menu{
  position: absolute;
  top: 180px;
  left: 0;
  background: #212121;
  width: 100%;
  list-style: none;
  padding: 0px;
  margin: 0;
}
.menu__item {
  text-align: center;
  margin: auto;
}
.menu__link {
  padding: 20px;
  color: white;
  text-decoration: none;
  position: relative;
  display: block;
}
.menu__link:hover {
  background: white;
  color: #212121;
}

.mostrar{
  opacity: 1;
  visibility: visible;
}

.icon-menu{
  font-size: 1.5em;
  border: 1px solid #454546;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: auto;
}
.main-header__btn{
  display: block;
  padding: 10px 30px;
  color: #454546;
  border: 1px solid #454546;
  text-decoration: none;
}
.main-header__input{
  display: block;
  padding: 10px;
  width: 50%;
}



.main {
  padding: 0 20px;
}

/* ESTILOS DE SLIDER */
.container-slider{
  margin: 50px 0;
  position: relative;
  overflow: hidden;
}

.slider {
  display: flex;
  width: 400%;
  height: 300px;
  margin-left: -100%;
  position: relative;
}
.slider:before{
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.5);
  height: 100%;
}

.slider__section {
  width: 100%;
  position: relative;
}
.slider__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider__btn {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
.slider__btn:hover {
  background: #fff;
}
.slider__btn--left{
  left: 10px;
}
.slider__btn--right {
  right: 10px;
}
.slider__content{
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
  z-index: 999;
}
.slider__title{
  font-size: 2.2em;
  margin: 0;
}
.slider__txt{
  margin: 5px 0;
}
.btn-shop{
  display: block;
  border: 2px solid #FF4E00;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  width: 150px;
  margin: 20px auto;
  transition: all 0.5s;
}
.btn-shop:hover{
  background: #FF4E00;
  color: white;
}
/* ESTILOS DE PRODUCTOS */
.container-products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
.product {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  position: relative;
}
.product:before {
  content: "New";
  background: #FF4E00;
  padding: 10px;
  width: 60px;
  position: absolute;
  top: 20px;
  right: 10px;
  transform: rotate(-90deg);
  color: white;
}

.product__img{
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.product__title{
  text-align: center;
}
.product__price {
  color: #FF4E00;
  font-weight: bold;
}
.product__icon {
  display: block;
  margin-top: 10px;
}
.product:hover .product__icon {
  color: #FF4E00;
}
.container__testimonials{
  text-align: center;
  background: #F7F7F7;
  padding: 20px;
  margin: 20px 0;
}
.testimonial__txt{
  color: #777;
}
.container-editor{
  margin-top: 20px;
}

.editor__item{
  height: 200px;
  position: relative;
  overflow: hidden;
}
.editor__img  {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.editor__circle{
  width: 200px;
  height: 200px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -200px;
  right: -150px;
  color: white;
  padding: 20px;
  padding-bottom: 70px;
  padding-right: 50px;
  font-size: 1.1em;
  text-align: center;
  font-weight: bold;
  transition: all 0.5s;
}
.editor__item:hover .editor__circle{
  transform: scale(1.2);
  bottom: -90px;
  right: -50px;
}
.editor__item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  opacity: 0;
  transition: all 0.5s;
}
.editor__item:hover:before {
  opacity: 1;
}
.container-tips{
  margin: 20px 0;
  text-align: center;
}
.tip i{
  font-size: 2em;
  color: #333;
  padding: 20px 0;
}
.tip .btn-shop {
  color: #333;
}
.btn-shop:hover {
  color: white;
}

.main-footer{
  background: #151515;
  color: white;
  padding: 30px 20px;
}
.footer__title{
  border-bottom: 1px dotted #555;
  padding-bottom: 20px;
}
.footer__txt {
  color: #555;
}
.footer__link{
  color: #555;
  text-decoration: none;
  display: block;
  padding: 10px 0;
}

.footer__input{
  background: #151515;
  width: 100%;
  display: block;
  padding: 20px;
  border: 1px solid #555;
}
.copy {
  color: #555;
}

/*Estilos para tablet*/
@media screen and (min-width:768px) {
  .slider{
    height: 400px;
  }
  .editor__item{
    height: 250px;
  }
  .container-tips{
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
/*Estilos para web*/

@media screen and (min-width:1024px) {
  .container{
    width: 1000px;
    margin: auto;
  }
  .icon-menu {
    display: none;
  }
  .main-header .container--flex{
    display: flex;
    align-items: center;
  }
  .main-header__container{
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .main-header__txt{
    width: 100%;
  }
  .main-header__container:nth-child(2){
    order: -1;
    width: 25%;
  }
  .main-header__container:nth-child(3){
    width: 25%;
    padding: 0 20px;
  }
  .main-header__title {
    width: 100%;
    font-size: 4em;
    margin: 0;
    border-bottom: 1px solid #ccc;
  }
  .main-header__link {
    margin-bottom: 20px;
  }
  .main-header__btn{
    width: 130px;
    padding: 10px;
    margin-bottom: 20px;
  }
  .main-header__input{
    width: 85%;
  }
  .main-nav{
    visibility: visible;
    opacity: 1;
    width: 100%;
    margin-top: 20px;
  }
  .menu {
    position: static;
    width: 100%;
    display: flex;
    background: none;
  }
  .menu__link{
    color: #333;
  }
  .menu__link:hover{
    background: #333;
    color: white;
  }
  .container-products {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
  .product__img {
    height: 150px;
  }
  .container__testimonials{
    font-size: 1.3em;
  }
  .container-editor{
    display: flex;
    justify-content: space-between;
  }
  .editor__item{
    width: 48%;
  }
  .main-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .copy {
    grid-column-start: span 4;
    text-align: center;
  }
}

@media screen and (min-width:1280px) {
  .container{
    width: 1200px;
  }
  .main-header__container:nth-child(3){
    padding-left: 60px;
  }
  .main-header__container:nth-child(2){
    font-size: 1.3em;
  }
  .slider{
    height: 500px;
    font-size: 1.5em;
  }
}

@media screen and (min-width:1600px) {
  .container{
    width: 1500px;
  }
  .main-header__container:nth-child(3){
    padding-left: 150px;
  }
  .main-header__container:nth-child(2){
    font-size: 1.5em;
  }
  .slider{
    height: 600px;
  }
  .product__img {
    height: 200px;
  }
}
