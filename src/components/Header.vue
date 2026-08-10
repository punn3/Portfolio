<script setup >
const route = useRoute()
function activeClass(name){
    return route.hash == "#"+name
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg " style="width: 100%;">
                <div class="container-fluid">
                    <a class="nav-brand  heading-4-head" href="#">Puntareewan Portfoilo</a>

                    <button class="navbar-toggler togger-button" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse navbar-link d-none d-lg-flex" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#about" :class="{active:activeClass('about')}">About me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#skills" :class="{active:activeClass('skills')}">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#experience" :class="{active:activeClass('experience')}">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#project" :class="{active:activeClass('project')}">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#contact" :class="{active:activeClass('contact')}">Contact</a>
                            </li>
                        </ul>
                    </div>
        
                    <div class="offcanvas offcanvas-end d-lg-none nav-small" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <a class="nav-brand heading-4-head" href="#">Puntareewan</a>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#about" :class="{active:activeClass('about')}">About me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#skills" :class="{active:activeClass('skills')}">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#experience" :class="{active:activeClass('experience')}">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#project" :class="{active:activeClass('project')}">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link heading-5-head" href="#contact" :class="{active:activeClass('contact')}">Contact</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
