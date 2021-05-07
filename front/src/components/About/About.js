import React from 'react'
import './About.css'
function About() {
    return (
        <div>
            <div id="main">
                <div id="about-sidebar">
                    <ul>
                        <li><a href="">Take the tour</a></li>
                        <li><a href="">Flickr blog</a></li>
                        <li><a href="">Community guidelines</a></li>
                        <li><a href="">Jobs</a></li>
                    </ul>
                    <p id="log-sign">
                        <a href=""><img src="https://combo.staticflickr.com/pw/images/tour/en-us/create-account-button.png" alt=" "></img></a>
                        <br />
                        <a href="">or Sign in</a>
                    </p>
                    <h6 style={{fontWeight:'bold'}}>Need help?</h6>
                    <p id="sub-nav">
                        <a href="">Visit our FAQ</a>
                        <br />
                        <a href="">Get help by email</a>
                    </p>
                </div>
                <div id="about-main">
                    <h1 class="pink">About Flickr</h1>
                    <h2>Flickr - almost certainly the best online photo management and sharing application in the world - has 
                     <i> two main goals</i> :
                    </h2>
                    <blockquote >

                        <h6><b class="pink">1.</b> We want to <b>help people make their photos available to the people who matter to them</b>.</h6>

                        <p>Maybe they want to keep a blog of moments captured on their cameraphone, or maybe they want to show off their best pictures or video to the whole world in a bid for web celebrity. Or maybe they want to securely and privately share photos of their kids with their family across the country. Flickr makes all these things possible and more!</p>
                        <p>To do this, we want to <b>get photos and video into and out of the system in as many ways as we can</b>: from the web, from mobile devices, from the users' home computers and from whatever software they are using to manage their content. And we want to be able to push them out in as many ways as possible: on the Flickr website, in RSS feeds, by email, by posting to outside blogs or ways we haven't thought of yet. What else are we going to use those smart refrigerators for?</p>

                        <h6><b class="pink">2.</b> We want to <b>enable new ways of organizing photos and video</b>.</h6>

                        <p>Once you make the switch to digital, it is all too easy to get overwhelmed with the sheer number of photos you take or videos you shoot with that itchy trigger finger. Albums, the principal way people go about organizing things today, are great -- until you get to 20 or 30 or 50 of them. They worked in the days of getting rolls of film developed, but the "album" metaphor is in desperate need of a Florida condo and full retirement.</p>
                        <p>Part of the solution is to make the process of organizing photos or videos collaborative. In Flickr, you can give your friends, family, and other contacts permission to organize your stuff - not just to add comments, but also notes and tags. People like to ooh and ahh, laugh and cry, make wisecracks when sharing photos and videos. Why not give them the ability to do this when they look at them over the internet? And as all this info accretes as metadata, you can find things so much easier later on, since all this info is also searchable.</p>
                    </blockquote>
                    <p>Flickr continues to evolve in myriad ways, all of which are designed to make it easier and better. Check out the <a href="">Flickr Blog</a> to stay apprised of the latest developments. The fact that you've read to the end of this entire document and are hanging out at the bottom of this page with nothing but this silly text to keep you company is proof of a deep and abiding interest on your part. What are you waiting for?
                        <a href=""><b>Sign up now!</b></a>
                    </p>
                    <h2  class="pink">The Team</h2>
                    <div class="team">
                       <div class="team-flex">
                            <div class="mem-flex">
                                <a href=""><img src="https://farm66.staticflickr.com/65535/buddyicons/60065287@N00_r.jpg?1613071862#60065287@N00" alt=" "></img></a>
                                <small class="grey">Farah</small>
                            </div>
                            <div class="mem-flex">
                                <a href=""><img src="https://farm66.staticflickr.com/65535/buddyicons/60065287@N00_r.jpg?1613071862#60065287@N00" alt=" "></img></a>
                                <small class="grey">Roaa</small>
                            </div>
                            <div class="mem-flex">
                                <a href=""><img src="https://farm66.staticflickr.com/65535/buddyicons/60065287@N00_r.jpg?1613071862#60065287@N00" alt=" "></img></a>
                                <small class="grey">Habiba</small>
                            </div>
                            <div class="mem-flex">
                                <a href=""><img src="https://farm66.staticflickr.com/65535/buddyicons/60065287@N00_r.jpg?1613071862#60065287@N00" alt=" "></img></a>
                                <small class="grey">Samar</small>
                            </div>
                            <div class="mem-flex">
                                <a href=""><img src="https://farm66.staticflickr.com/65535/buddyicons/60065287@N00_r.jpg?1613071862#60065287@N00" alt=" "></img></a>
                                <small class="grey">Khadija</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
