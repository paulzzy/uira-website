class Carousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <script src="components/CarouselScript.js" type="text/javascript" defer></script>
            <style>  
                .carousel {
                    width: 65vw;
                    height: 65vh;
                    position: relative;
                    margin: auto;
                }

                .carousel > ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: 200ms opacity ease-in-out;
                    transition-delay: 200ms;
                    
                }

                .slide > img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 30px;
                }

                .slide[data-active] {
                    opacity: 1;
                    transition-delay: 0ms;
                }

                .carousel-button {
                    position: absolute;
                    z-index: 2;
                    background: none;
                    border: none;
                    font-size: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, .5);
                    cursor: pointer;
                    border-radius: 30px;
                    padding: 30px;
                    background-color: rgba(0, 0, 0, .1);
                }

                .carousel-button:hover,
                .carousel-button:focus {
                    color: white;
                    background-color: rgba(0,0,0,.2);
                }

                .carousel-button:focus {
                    outline: 1px solid black;
                }

                .carousel-button.prev {
                    left: 1rem;
                }

                .carousel-button.next {
                    right: 1rem;
                }
            </style>

            <div class="carousel" data-carousel>
                <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
                <ul data-slides>
                    <li class="slide" data-active>
                        <img src="images/carousel/P1002627.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002630.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002632.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002636.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002638.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002639.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002645.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002648.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002649.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1002653.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1012736.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1012747.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1012748.JPG">
                    </li>
                    <li class="slide">
                        <img src="images/carousel/P1012749.JPG">
                    </li>
                </ul>
            </div>
      `;
    }
}

customElements.define('carousel-gallery', Carousel);

// <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeBjPGxwt7D1XYR6ewPVUk0R59oDKLASUUjJCu4ki1wRcWT6Q/viewform?usp=sf_link" class="button">Apply for Poster Day!</a></li>
//              <li><a href="boardapp.html">Join Our Board!</a></li>
