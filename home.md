---
layout: default
---

<p class="fully-activated hide">You're all done with setting up. We'll send you an edition at the beginning of next month. If you need to change anything then look in the menu.</p>

<section id="getting_started">

## Getting Started

<div class="onboarding-flow">

Because you are a dearly beloved βeta tester the subscription is only \$5AUD, and for you, that's for as long as this thing keeps going.

Before we can send you anything, we need a few things from you:

<ul>

<li><a href="editorial"><span class="check editorial_checked">❓</span><br>How long your articles should be?<br>🧾</a></li>

<li><a href="/connect-pocket"><span class="check pocket_access">❓</span><br>A connection to your Pocket account<br><svg class="logo-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 115 130" height="24px"><path fill="#EF4056" d="M84.058 83.308L58.54 107.324c-1.313 1.5-3.377 2.065-4.878 2.065-1.876 0-3.752-.564-5.253-2.065L23.266 83.308c-2.627-2.814-3.002-7.505 0-10.507 2.814-2.627 7.505-3.002 10.32 0l20.076 19.325L74.114 72.8c2.627-3.002 7.317-2.627 9.944 0 2.627 3.002 2.627 7.693 0 10.507M97.005 43.53H10.32C4.691 43.53 0 47.846 0 53.475v32.084c0 29.083 24.016 53.288 53.662 53.288 29.458 0 53.287-24.205 53.287-53.288V53.475c0-5.63-4.503-9.945-9.944-9.945"></path></svg></a></li>

<li><a href="payment"><span class="check payment">❓</span><br>Some payment and address details<br>💳🏡</a></li>

</ul>

</div>

<div id="activate-button" class="hide">

<p class="fully-setup">Once you've got three green ticks you can:</p>
<form action="/activate" method="POST" class="form" id="activate-form">
<button>Activate your subscription</button>
</form>
<p class="still-setting-up">
Collect the ticks and you will unlock greatness.
</p>

</div>

</section>

<section class="hide" id="tips">

## Tips

<figure>
<img src="./img/android_tag_at_save.png">
<figcaption>You can tag from inside the Pocket app or you can do it as you save it. (At least in Android.)

</figcaption>

</figure>

If you especially want a particular article to be in the upcoming edition,
then tag it with <code>wpMustPrint</code>. If you don't want something to be
printed, then tag it with <code>wpNoPrint</code>.

Articles with computer code can be hard to read because the lines are
sometimes really long, you can't exclude them yet but we're working on it.

Wikipedia articles are sometimes a bit of a challenge too because they have
can have huge tables and so many links to other parts of the page.

</section>

<section id="debug-data">

{% include debug-data.md %}

</section>

{% include base-scripts.md %}

<script src="js/home.js"></script>
