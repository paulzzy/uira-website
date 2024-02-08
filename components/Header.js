class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <style>  
          h3 {
            display: flex;
            justify-content: flex-start;
          }
          nav {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color:  #F5F2EE;
          }

          h3 {
            justify-content: flex-start;
          }

          ul {
            padding: 0;
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }

        </style>
        <header>
          <nav>
            <h3>UIRA</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeBjPGxwt7D1XYR6ewPVUk0R59oDKLASUUjJCu4ki1wRcWT6Q/viewform?usp=sf_link" >Apply for Poster Day!</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);