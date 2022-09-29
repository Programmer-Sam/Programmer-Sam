<!DOCTYPE html>
<html>
    <header>
        <title> Project</title>
        <link rel="stylesheet" href="css-js/webStyle.css">
        <script src="css-js/webScript.js"></script> 
    </header>
    <body onLoad="txtAppear()">
        <div id="display-container">
            <div id="sidebar-grid">
                <div><button id="sidebar-button" onclick="sideEnlarge()">Open/ Close Sidebar</button></div>
                <div><img id="pfp" src="pictures/KLC-photo.jpg"></div>
            </div>
            <div id="top-bar">
                    <p class="title-text">Ka Lok Chau</p>
            </div>
        </div>

        <div class="content">
            <div id="sidebar">
                <div class="sidebar-items"><a href="web.html"><p id="home-link"></p></a></div>
                <div class="sidebar-items"><a target="_blank" href="pages/projects.html"><p id="project"></p></a></div>
                <div class="sidebar-items"><a href="pages/cv.html"><p id="cv"></p></a></div>
                <div class="sidebar-items"><a href="pages/contact.html"><p id="contact"></p></a></div>
            </div>
            <div class="content-grid">
                <a target="_blank" href="pages/projects.html">
                <div class="contentBoxes">
                    <div><img src="pictures/q-learning_pic.png" class="contentBoxPictures"></div>
                    <div class="overwrite-a">Personal project: <br>AI algorithm to drive around a track</div>
                </div></a>
                <a target="_blank" href="pages/projects.html">
                <div class="contentBoxes">
                    <div><img src="pictures/food-finder.png" class="contentBoxPictures"></div>
                    <div class="overwrite-a">University group project: <br>Creating a webpage<br> </div>
                </div></a>
                <a target="_blank" href="pages/projects.html">
                <div class="contentBoxes">
                    <div><img src="pictures/asteroids.png" class="contentBoxPictures"></div>
                    <div class="overwrite-a">A-level Coursework <br> Recreation of the retro-game Asteroids</div>
                </div></a>
                <div class="contentBoxes">
                    <div>Not Yet Updated...</div>
                    <div>Not Yet Updated...</div>
                </div>
                <div class="contentBoxes">
                    <div>Not Yet Updated...</div>
                    <div>Not Yet Updated...</div>
                </div>
                <div class="contentBoxes">
                    <div>Not Yet Updated...</div>
                    <div>Not Yet Updated...</div>
                </div>
            </div>
        </div>
    </body>
</html>
