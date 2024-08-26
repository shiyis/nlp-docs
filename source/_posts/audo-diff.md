---
title: Auto Differentiation
date: 2024-07-14 13:40:00
categories:
  - Math
tags:
  - auto-diff
  - math
---


### Intro to Automatic Differentiation  

In this blog, we will go through the foundations behind Automatic Differentiation.

<p style="margin-left:1px;  margin-top: 30px">


<iframe id="iframe-yt-video" width="100%" height="520" src="https://www.youtube.com/embed/56WUlMEeAuA?autoplay=1" frameborder="0" ></iframe>

</p>

#### The Breakdown of The Video Into Parts

<ul class="video-timestamps">
  <li><a href="#" onclick="seekTo(0)">0:00 - Introduction</a></li>
  <li><a href="#" onclick="seekTo(60)">1:00 - First Topic</a></li>
  <li><a href="#" onclick="seekTo(120)">2:00 - Second Topic</a></li>
  <li><a href="#" onclick="seekTo(180)">3:00 - Third Topic</a></li>
</ul>

<script>
  function seekTo(seconds) {
    const iframe = document.getElementById('iframe-yt-video');
    const player = new YT.Player(iframe, {
      events: {
        'onReady': function(event) {
          event.target.seekTo(seconds, true);
        }
      }
    });
  }

  // Load the IFrame Player API code asynchronously.
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>


Important transcripts of the video  

<span class="label label-danger">Q</span> What are the gists that are covered in this video?</span>

<span class="label label-success">A</span> At the heart of my endeavors lies a profound appreciation for machine learning, deep learning, and Natural Language Processing. As an advocate for data-driven decision-making, I thrive on unraveling the complexities of algorithms and patterns, harnessing their power to transform raw data into actionable intelligence. From predictive modeling in finance to image recognition tasks using deep learning architectures, I relish the challenge of pushing the boundaries of what’s possible with data.

<span class="label label-danger">Q</span> What is my expertise in Natural Language Processing?</span>
