const _htmlCode = `<section class="banner">
<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Home"></g> <g id="Print"></g> <g id="Mail"></g> <g id="Camera"></g> <g id="Video"></g> <g id="Film"></g> <g id="Message"></g> <g id="Telephone"></g> <g id="User"></g> <g id="File"></g> <g id="Folder"></g> <g id="Map"></g> <g id="Download"></g> <g id="Upload"></g> <g id="Video_Recorder"></g> <g id="Schedule"></g> <g id="Cart"></g> <g id="Setting"></g> <g id="Search"></g> <g id="Pencils"></g> <g id="Group"></g> <g id="Record"></g> <g id="Headphone"></g> <g id="Music_Player"></g> <g id="Sound_On"></g> <g id="Sound_Off"></g> <g id="Lock"></g> <g id="Lock_open"></g> <g id="Love"></g> <g id="Favorite"></g> <g id="Film_1_"></g> <g id="Music"></g> <g id="Puzzle"></g> <g id="Turn_Off"></g> <g id="Book"></g> <g id="Save"></g> <g id="Reload"></g> <g id="Trash"></g> <g id="Tag"></g> <g id="Link"></g> <g id="Like"></g> <g id="Bad"></g> <g id="Gallery"></g> <g id="Add"></g> <g id="Close"></g> <g id="Forward"></g> <g id="Back"></g> <g id="Buy"></g> <g id="Mac"> <path d="M28,3H16H4C2.3,3,1,4.3,1,6v14c0,1.6,1.3,3,3,3h7v4H9c-0.5,0-1,0.5-1,1s0.5,1,1,1h7h7c0.5,0,1-0.5,1-1 s-0.5-1-1-1h-2v-4h7c1.7,0,3-1.4,3-3V6C31,4.3,29.7,3,28,3z" fill="#0E9688"></path> <path d="M28,3H16v2v11v7v6h7c0.5,0,1-0.5,1-1s-0.5-1-1-1h-2v-4h7c1.7,0,3-1.4,3-3V6C31,4.3,29.7,3,28,3z" fill="#0E9688"></path> <path d="M23,27h-2v-4h-5h-5v4H9c-0.5,0-1,0.5-1,1s0.5,1,1,1h7h7c0.5,0,1-0.5,1-1S23.5,27,23,27z" fill="#673AB7"></path> <path d="M28,5H16H4C3.5,5,3,5.5,3,6v10h13h13V6C29,5.5,28.5,5,28,5z" fill="#FFC10A"></path> </g> <g id="Laptop"></g> </g></svg>
      <div class="banner-content">
        <h2>Hellooo !</h2>
        <p>
          I'm Code Editor which works offline too. Edit respective html, css and js placeholders and see magic !
        </p>
      </div>
    </section>
    <svg
    class="wave"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z"
        />
      </defs>
      <g class="waves">
        <use
          xlink:href="#gentle-wave"
          x="50"
          y="0"
          fill="#03ffff"
          fill-opacity=".2"
        />
        <use
          xlink:href="#gentle-wave"
          x="50"
          y="3"
          fill="#03ffff"
          fill-opacity=".5"
        />
        <use
          xlink:href="#gentle-wave"
          x="50"
          y="6"
          fill="#03ffff"
          fill-opacity=".9"
        />
      </g>
    </svg>
  </body>`;

const _cssCode = `body {
    margin: 0;
    font-family: "Euclid Circular A", "Poppins";
  }
  
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 50px;
    padding: 0 80px;
    text-align: center;
    height: 100vh;
    background: #050808;
  }
  
  .banner > img {
    width: 60vw;
    transition: 0.1s linear;
  }
  
  .banner h2 {
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 10px;
  }
  
  .banner p {
    margin: 0;
    line-height: 1.65;
    font-size: 17px;
    opacity: 0.7;
  }
  
  @media (width >= 420px) {
    .banner > img {
      width: 40vw;
    }
  }
  
  @media (width >= 648px) {
    .banner {
      text-align: left;
      flex-direction: row;
      justify-content: space-between;
    }
  
    .banner > img {
      width: 10vw;
      left: 100px;
    }
  }
  
  .waves > use {
    animation: move-forever 2s -2s linear infinite;
  }
  
  .waves > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 6s;
  }
  .waves > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 3s;
  }
  
  @keyframes move-forever {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
  
  .wave {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30vw;
    max-height: 200px;
  }`;

const _jsCode = `const body = document.querySelector('body')
body.style.color = "#ddfdfd"
body.style.background = "#050808"`;

export { _htmlCode, _cssCode, _jsCode };
