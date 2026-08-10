<template>
    <div id="portfolio-page">
        <header class="header_section">
            <div class="container">
                <div class="header_content py-2">
                    <h1>My Flexbox Portfolio</h1>
                </div>
            </div>
        </header>
        <header class="navbar_section">
            <div class="container">
                <nav class="navbar navbar-dark bg-393E46 navbar_content">
                    <!-- <span class="icon-question"></span> -->
                    <a class="navbar-brand" href="#">Home</a>
                    <a class="navbar-brand" href="#">About</a>
                    <a class="navbar-brand" href="#">Project</a>
                    <a class="navbar-brand" href="#">contact</a>
                    <!-- <span class="material-symbols-outlined">
                        home</span> -->
                </nav>
            </div>
        </header>
        <section class="pt-1 " >
            <div class="portfolio_content">
                <div class="row_content row g-3">
                    <div class="col-12 col-md-6">
                        <div class="card card_content p-2">
                            <div class="card-body">
                                <h3 class="card-title">About Me</h3>
                                <p class="card-text">hello, I am a beginner web developer with a passion for creating
                                    beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and
                                    bootstrap frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="card card_content" >
                            <div class="card-body" >
                                <h3 class="card-title">My Gallery</h3>
                                <div class="row g-3 image_gallery">
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/31567324/pexels-photo-31567324/free-photo-of-breathtaking-snowy-mountain-landscape-with-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/7054237/pexels-photo-7054237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                            alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/1517162/pexels-photo-1517162.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                            alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/31567324/pexels-photo-31567324/free-photo-of-breathtaking-snowy-mountain-landscape-with-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/7054237/pexels-photo-7054237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                            alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img src="https://images.pexels.com/photos/1517162/pexels-photo-1517162.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                            alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer_section">
            <div class="container">
                <div class="footer_content py-3">
                    <p class="m-0">&copy; 2025 My Portfolio</p>
                </div>
            </div>
    
        </footer>
    </div>
</template>


<route lang="yaml">
meta:
    layout: flex-port
</route>