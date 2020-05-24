---
layout: default
title: Home 🏡
---

<p class="fully-activated hide">You're all done with setting up. We'll send you an edition at the beginning of next month. If you need to change anything then look in the menu.</p>

<section id="getting_started" class="hide">

## Getting Started

<div class="onboarding-flow">

Before we can send you anything, we need two things from yo<a href="payment-beta" class="stealth-link">u</a>:

<ul>

<li>
<strong>First this:</strong>

<div>
<span class="check pocket_access">❓</span>A connection to your Pocket account
</div>
<div class="auth-with-pocket">
  <a href="" class="button disabled" id="pocket-auth-link">
    Authenticate with
    <img alt="pocket" src="https://getpocket.com/i/v3/pocket_logo.png" />
  </a>
</div>

</li>

<li>
<strong>Then this:</strong>

<div>
<span class="check payment">❓</span>Some payment and address details

<div class="subscribe-with-stripe">
  <a href="payment" class="button disabled" id="stripe-link">
    Subscribe with
    <img alt="Stripe" src="./img/Stripe logo - slate_sm.png" style="transform: translateY(0.2em) scale(1.8);"/>
  </a>

</div>
</div>

</li>

</ul>

</div>

</section>

<section id="regular-home" class="hide">

Welcome to Walden Pond. There's a bunch of things to explore in the menu, up there ↗.

If there isn't much in your Pocket yet, take a look in your emails for some places that might have something you'll want to read and some tips on how to make saving things easier.

I'd love to hear about how this is all going for you! Give me suggestions and I'll do my best to make them happen.

</section>

<section id="history-data">

<div id="articles-container" class="articles-container">

{% include pocket_article_template.html %}

</div>

</section>

{% include base-scripts.md %}

<script src="js/home.js"></script>
<script src="js/finalise-pocket.js"></script>
<script src="js/pocket.js"></script>
