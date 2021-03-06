import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header =() =>
<header class="head">
            <div class="head-text">
                <a href="#" class="mogo">MoGo</a>
                <nav class="main-nav hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                      <span></span>
                    </label>
                    <ul class="list1">
                        <li><a href="#" class="item1">ABOUT</a></li>
                        <li><a href="#" class="item1">SERVICE</a></li>
                        <li><a href="#" class="item1">WORK</a></li>
                        <li><a href="#" class="item1">BLOG</a></li>
                        <li><a href="#" class="item1">CONTACT</a></li>
                        <li><a href="#" class="item1"><img src="9img/h2.svg" alt="svg" class="svgimg"/></a></li>
                        <li><a href="#" class="item1"><img src="9img/h1.svg" alt="svg" class="svgimg"/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
        const Bunner =() =>
        <div class="banner">
            <div class="text-container">
                <div class="text1">Creative Template</div>
                <div class="text2">WELCOME TO MOGO</div>
                <div class="strip-1">_____</div>
                <a href="#" class="text3">LEARN MORE</a>
            </div>
            <div class="background-container">
                <img src="img/picture.png" alt="eagle" class="eagle"/>
            </div>
        </div>
        const Container2 =() =>
        <div class="container2">
            <div class="heading1">
                <div class="heading">We work with</div>
                <div class="heading">AMAZING SERVICES</div>
                <div class="strip-2">_____</div>
                <div class="card">
                    <div class="cards">
                        <div class="perenos">
                            <div class="card1">
                                <img src="icon\ALARM.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>PHOTOGRAPHY</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                            <div class="card1">
                                <img src="icon\LINE_GRAPH.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>WEB DESIGN</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                            <div class="card1">
                                <img src="icon\COMPUTER_OK.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>CREATIVETY</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="perenos">
                            <div class="card1">
                                <img src="icon\BOOK_2.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>SEO</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                            <div class="card1">
                                <img src="icon\HOME.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>CSS/HTML</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                            <div class="card1">
                                <img src="icon\IMAGE.svg" alt="icon"/>
                                <div class="cardtext">
                                    <h3>DIGITAL</h3>
                                    <div class="ctext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis accusamus recusandae beatae.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        const Container3 =()=>
        <div class="container3">
            <div class="cards2">
                <div class="card2">
                    <div class="number">42</div>
                    <div class="cardtext2">WEB DESIGN PROJECTS</div>
                </div>
                <div class="card2">
                    <div class="number">123</div>
                    <div class="cardtext2">HAPPY CLIENT</div>
                </div>
                <div class="card2">
                    <div class="number">15</div>
                    <div class="cardtext2">AWARD WINNER</div>
                </div>
                <div class="card2">
                    <div class="number">99</div>
                    <div class="cardtext2">CUP OF COFFE</div>
                </div>
                <div class="card2">
                    <div class="number">24</div>
                    <div class="cardtext2">MEMBERS</div>
                </div>
            </div>
        </div>
        const Container4 =()=>
        <div class="container4">
            <div class="pcont">
                <div class="heading2">
                    <div class="heading">Who we are</div>
                    <div class="heading">MEET OUR TEAM</div>
                    <div class="strip-2">_____</div>
                </div>
                <div class="text4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint incidunt facere tempore, alias quaerat, nisi, beatae officiis iure magnam labore consectetur nemo temporibus distinctio fugit hic repellat expedita perferendis et architecto ipsam tenetur.</div>
                <div class="cards3">
                    <div class="card3">
                        <div class="teamblock">
                            <div class="taemblockblock1"><img class="imgteam" src="9img/team1.png" alt="picture"/></div>
                            <ul class="listblock">
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/facebook.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/twitter.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/pinterest.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/instagram.svg" alt="picture"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="cardtext3">
                            <h3 class="zag">MATTHEW DIX</h3>
                            <div class="ctext2">Graphic Design</div>
                        </div>
                    </div>
                    <div class="card3">
                        <div class="teamblock">
                            <div class="taemblockblock2"><img class="imgteam" src="9img/team2.png" alt="picture"/></div>
                            <ul class="listblock">
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/facebook.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/twitter.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/pinterest.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/instagram.svg" alt="picture"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="cardtext3">
                            <h3 class="zag">CHRISTOPHER CAMPBELL</h3>
                            <div class="ctext2">Branding/UX design</div>
                        </div>
                    </div>
                    <div class="card3">
                        <div class="teamblock">
                            <div class="taemblockblock3"><img class="imgteam" src="9img/team3.png" alt="picture"/></div>
                            <ul class="listblock">
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/facebook.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/twitter.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/pinterest.svg" alt="picture"/>
                                    </a>
                                </li>
                                <li class="list2">
                                    <a href="#">
                                        <img src="icon/instagram.svg" alt="picture"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="cardtext3">
                            <h3 class="zag">MICHAEL FERTIG</h3>
                            <div class="ctext2">Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
function App() {
  return (
    <div className="App">
      <div class="all">
        <Header/>
        <Bunner/>
        <Container2/>
        <Container3/>
        <Container4/>
        
        <div class="icons">
            <div class="imgbox">
                <img src="icon/icon.png" alt="" class="icon"/>
            </div>
        </div>
        <div class="container5">
            <div class="pcont2">
                <div class="heading3">
                    <div class="heading">What we do</div>
                    <div class="heading">SOME OF OUR WORK</div>
                    <div class="strip-2">_____</div>
                </div>
                <div class="text5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint incidunt facere tempore, alias quaerat, nisi, beatae officiis iure magnam labore consectetur nemo temporibus distinctio fugit hic repellat expedita perferendis et architecto ipsam tenetur.</div>
            </div>
        </div>
        <div class="pictures">
            <div class="picturebox">
                <div class="pictureboxbox">
                    <img src="9img/p1.png" alt="picture" class="p1"/>
                </div>
                <div class="pictureboxbox">
                    <img src="9img/p2.png" alt="picture" class="p1"/>
                </div>
            </div>
            <div class="picturebox">
                <div class="pictureboxbox">
                    <img src="9img/p3.png" alt="picture" class="p1"/>
                </div>
                <div class="pictureboxbox">
                    <img src="9img/p4.png" alt="picture" class="p1"/>
                </div>
            </div>
            <div class="picturebox">
                <div class="pictureboxbox">
                    <img src="9img/p5.png" alt="picture" class="p1"/>
                </div>
            </div>
            <div class="picturebox">
                <div class="pictureboxbox">
                    <img src="9img/p6.png" alt="picture" class="p1"/>
                </div>
                <div class="pictureboxbox">
                    <img src="9img/p7.png" alt="picture" class="p1"/>
                </div>
            </div>
        </div>
        <div class="cardcit1">
            <div class="cardcit2">
                <div class="cardcit3">
                    <img class="cardimg" src="9img/noname.jpg" alt="picture"/>
                    <div class="textbox">
                        <cite class="textcit">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat nostrum in, nihil expedita eaque sint, doloremque nesciunt debitis, omnis dolorum at ullam suscipit officiis quaerat quibusdam. Laborum, dolores at?"</cite>
                        <div class="textbox2">
                            <div class="strip-3">_____</div>
                            <div class="name">Joshua Earle</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container6">
            <div class="contbox">
                <div class="pcont3">
                    <div class="heading4">
                        <div class="heading">Happy Clients</div>
                        <div class="heading">WHAT PEOPLE SAY</div>
                        <div class="strip-2">_____</div>
                        <div class="cards4">
                            <div class="card4">
                                <div class="picturebox3">
                                    <img src="img/men1.jpg" alt="" class="people i1"/>
                                </div>
                                <div class="mentextbox">
                                    <div class="headingtext1">MATTHEW DIX</div>
                                    <div class="headingtext2">Graphic Design</div>
                                    <div class="strip-4">_____</div>
                                    <div class="mentext">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur impedit optio quibusdam neque possimus!
                                    </div>
                                </div>
                            </div>
                            <div class="card4">
                                <div class="picturebox3">
                                    <img src="img/men2.jpg" alt="" class="people i2"/>
                                </div>
                                <div class="mentextbox">
                                    <div class="headingtext1">NICK CARVOUNIS</div>
                                    <div class="headingtext2">Graphic Design</div>
                                    <div class="strip-4">_____</div>
                                    <div class="mentext">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur impedit optio quibusdam neque possimus!
                                    </div>
                                </div>
                            </div>
                            <div class="card4">
                                <div class="picturebox3">
                                    <img src="img/men3.jpg" alt="" class="people i3"/>
                                </div>
                                <div class="mentextbox">
                                    <div class="headingtext1">JAELYNN CASTILLO</div>
                                    <div class="headingtext2">Graphic Design</div>
                                    <div class="strip-4">_____</div>
                                    <div class="mentext">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur impedit optio quibusdam neque possimus!
                                    </div>
                                </div>
                            </div>
                            <div class="card4">
                                <div class="picturebox3">
                                    <img src="img/men4.jpg" alt="" class="people i4"/>
                                </div>
                                <div class="mentextbox">
                                    <div class="headingtext1">MICE PETRUCCI</div>
                                    <div class="headingtext2">Graphic Design</div>
                                    <div class="strip-4">_____</div>
                                    <div class="mentext">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur impedit optio quibusdam neque possimus!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container7">
            <div class="pcont5">
                <div class="heading5">
                    <div class="heading">Our stories</div>
                    <div class="heading">LATEST BLOG</div>
                    <div class="strip-2">_____</div>
                </div>
                <div class="cards5">
                    <div class="card5">
                        <div class="minicard">
                            <div class="minicardbox">
                                <div class="number2">15</div>
                                <div class="cardtext4">Jan</div>
                            </div>
                        </div>
                        <img src="img/blog1.png" alt="" class="ofice"/>
                        <div class="cardtextblock1">
                            <div class="cardheading">LOREM IMPUS DOLOR SIT AMET</div>
                            <div class="cardtext5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus a eaque consequatur totam sunt?</div>
                        </div>
                        <hr class="hr1"/>
                        <div class="iconsbox">
                            <img src="blueicons/eye.png" alt="eye" class="eye"/>
                            <div class="icontext1">542</div>
                            <img src="blueicons/masage.png" alt="eye" class="masage"/>
                            <div class="icontext1">17</div>
                        </div>
                    </div>
                    <div class="card5">
                        <div class="minicard">
                            <div class="minicardbox">
                                <div class="number2">14</div>
                                <div class="cardtext4">Jan</div>
                            </div>
                        </div>
                        <img src="img/blog2.png" alt="" class="ofice"/>
                        <div class="cardtextblock1">
                            <div class="cardheading">SED DO EUSMIOT TEMPOR</div>
                            <div class="cardtext5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis maiores eligendi ex exercitationem enim.</div>
                        </div>
                        <hr class="hr1"/>
                        <div class="iconsbox">
                            <img src="blueicons/eye.png" alt="eye" class="eye"/>
                            <div class="icontext1">992</div>
                            <img src="blueicons/masage.png" alt="eye" class="masage"/>
                            <div class="icontext1">42</div>
                        </div>
                    </div>
                    <div class="card5">
                        <div class="minicard">
                            <div class="minicardbox">
                                <div class="number2">12</div>
                                <div class="cardtext4">Jan</div>
                            </div>
                        </div>
                        <img src="img/blog3.png" alt="" class="ofice"/>
                        <div class="cardtextblock1">
                            <div class="cardheading">INCLUDIDUNT UT LABORE ET DOLORE</div>
                            <div class="cardtext5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt natus necessitatibus totam accusantium.</div>
                        </div>
                        <hr class="hr1"/>
                        <div class="iconsbox">
                            <img src="blueicons/eye.png" alt="eye" class="eye"/>
                            <div class="icontext1">1650</div>
                            <img src="blueicons/masage.png" alt="eye" class="masage"/>
                            <div class="icontext1">98</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container8">
            <div class="pcont6">
                <div class="podcontainer1">
                    <div class="mogo2">MoGo</div>
                    <div class="foottext1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid magni, repellendus nam commodi ipsam reprehenderit dicta velit molestias consequuntur voluptatibus explicabo vitae, quaerat odit quidem perferendis nesciunt optio corrupti deleniti!</div>
                    <div class="textcontainer15">
                        <div class="text151">15k</div>
                        <div class="text152">folowers</div>
                    </div>
                    <hr/>
                    <div class="iconscontainer">
                        <div class="followus">Follow Us:</div>
                        <div class="soticons">
                            <img src="iconssot/1.png" alt="icon" class="soticon"/>
                            <img src="iconssot/2.png" alt="icon" class="soticon"/>
                            <img src="iconssot/3.png" alt="icon" class="soticon"/>
                            <img src="iconssot/4.png" alt="icon" class="soticon"/>
                            <img src="iconssot/5.png" alt="icon" class="soticon"/>
                            <img src="iconssot/6.png" alt="icon" class="soticon"/>
                            <img src="iconssot/7.png" alt="icon" class="soticon"/>
                            <img src="iconssot/8.png" alt="icon" class="soticon"/>
                        </div>
                    </div>
                    <div class="sub">
                        <input type="email" placeholder="Your Email..." class="input1"/>
                        <div class="subscribebox"><a href="#" class="subscribe">SUBSCRIBE</a></div>
                    </div>
                </div>
                <div class="podcontainer2">
                    <div class="blogbox">
                        <div class="footheading">BLOGS</div>
                        <div class="cards6">
                            <div class="card6">
                                <img src="blogs/blog1.png" alt="image" class="blogimg"/>
                                <div class="foodtextbox">
                                    <div class="blogtext">LOREM IMPSUM DOLOR SIT AMMET CONSECTETUR ADIPISICING.</div>
                                    <div class="foottext">Jan 9.2016</div>
                                </div>
                            </div>
                            <div class="card6">
                                <img src="blogs/blog2.png" alt="image" class="blogimg"/>
                                <div class="foodtextbox">
                                    <div class="blogtext">LOREM IMPSUM DOLOR SIT AMMET CONSECTETUR ADIPISICING.</div>
                                    <div class="foottext">Jan 9.2016</div>
                                </div>
                            </div>
                            <div class="card6">
                                <img src="blogs/blog3.png" alt="image" class="blogimg"/>
                                <div class="foodtextbox">
                                    <div class="blogtext">LOREM IMPSUM DOLOR SIT AMMET CONSECTETUR ADIPISICING.</div>
                                    <div class="foottext">Jan 9.2016</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="podcontainer3">
                    <div class="blogbox">
                        <div class="footheading">INSTAGRAM</div>
                        <div class="imgbox9">
                            <div class="imgs9">
                                <img src="9img/1.png" alt="image" class="img9"/>
                                <img src="9img/2.png" alt="image" class="img9"/>
                                <img src="9img/3.png" alt="image" class="img9"/>
                            </div>
                            <div class="imgs9">
                                <img src="9img/4.png" alt="image" class="img9"/>
                                <img src="9img/5.png" alt="image" class="img9"/>
                                <img src="9img/6.png" alt="image" class="img9"/>
                            </div>
                            <div class="imgs9">
                                <img src="9img/7.png" alt="image" class="img9"/>
                                <img src="9img/8.png" alt="image" class="img9"/>
                                <img src="9img/9.png" alt="image" class="img9"/>
                            </div>
                        </div>
                        <div class="more">View more photos</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container9">
            <div class="pcont7">
                <div class="heading5">
                    <hr class="foothr"/>
                    <img src="img/foot.png" alt="text" class="footer"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
