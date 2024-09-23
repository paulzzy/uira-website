class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <style>  
            nav {
              height: 10vh;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: #F5F2EE;
            }


          h3 {
            margin-left: 50px;
            font-size: 25px;
          }

          ul {
            margin-right: 50px;
            padding: 0;
          }
          
          a {
            font-weight: lighter;
            font-size: 15px;
            margin: 0 25px;
            color: #fff;
            // text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow:  12px 12px 2px 1px rgba(0, 0, 255, .2);
          }

        </style>
        <header>
          <nav>
            <h3>UIRA</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeBjPGxwt7D1XYR6ewPVUk0R59oDKLASUUjJCu4ki1wRcWT6Q/viewform?usp=sf_link">Stay Updated!</a></li>
              </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

                // <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeBjPGxwt7D1XYR6ewPVUk0R59oDKLASUUjJCu4ki1wRcWT6Q/viewform?usp=sf_link" class="button">Apply for Poster Day!</a></li>
                //              <li><a href="boardapp.html">Join Our Board!</a></li>
