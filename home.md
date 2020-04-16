---
layout: default
---

<p class="fully-activated hide">You're all done with setting up. We'll send you an edition at the beginning of next month. If you need to change anything then look in the menu.</p>

<section id="getting_started" class="hide">

## Getting Started

<div class="onboarding-flow">

Before we can send you anything, we need two things from you:

<ul>

<li>
<strong>First this:</strong>

<div>
<span class="check pocket_access">❓</span><br>A connection to your Pocket account<br><svg class="logo-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 115 130" height="24px"><path fill="#EF4056" d="M84.058 83.308L58.54 107.324c-1.313 1.5-3.377 2.065-4.878 2.065-1.876 0-3.752-.564-5.253-2.065L23.266 83.308c-2.627-2.814-3.002-7.505 0-10.507 2.814-2.627 7.505-3.002 10.32 0l20.076 19.325L74.114 72.8c2.627-3.002 7.317-2.627 9.944 0 2.627 3.002 2.627 7.693 0 10.507M97.005 43.53H10.32C4.691 43.53 0 47.846 0 53.475v32.084c0 29.083 24.016 53.288 53.662 53.288 29.458 0 53.287-24.205 53.287-53.288V53.475c0-5.63-4.503-9.945-9.944-9.945"></path></svg>
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
<span class="check payment">❓</span><br>Some payment and address details<br>💳🏡

<div class="subscribe-with-stripe">
  <a href="payment-beta" class="button disabled" id="stripe-link">
    Subscribe with
    <img alt="Stripe" src="./img/Stripe logo - slate_sm.png" />
  </a>
  
  
</div>
</div>

<div class="beta-message">Because you are <a href="payment-alpha" class="stealth-link">a</a> dearly beloved <a href="payment-beta" class="stealth-link">&beta;</a>eta tester the subscription is $5AUD, and for you, that's for as long as this thing keeps going.</div>

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
