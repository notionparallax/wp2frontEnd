---
layout: default
---

<p class="fully-activated">You're all done with setting up. If you need to change anything then look in the menu.</p>

<section id="getting_started">

## Getting Started

Before we can send you anything, we need a few things from you:

- <span class="check address1"           >❓</span>[Your address](address)
- <span class="check editorial_checked"  >❓</span>[How long your articles should be](editorial)
- <span class="check pocket_access_token">❓</span>[A connection to your Pocket](pocket)
- <span class="     "                    >✔️</span>[Some payment](payment Details) <span class="whisper">For the moment it's free!</span>

<p class="fully-setup">Once you've got four green ticks you can:</p>
<form action="/activate" method="POST" class="form" id="activate-form">
<button>Activate your subscription</button>
</form>
<p class="still-setting-up">
Collect the ticks and you will unlock greatness.
</p>

</section>

<section>

## Tips

<figure>
<img src="{{ site.baseurl }}/img/android_tag_at_save.png">
<figcaption>You can tag from inside the Pocket app or, at least in Android, you can do it as you save it.

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

<section>

## Editorial

Each edition I'd like to read <a href="/editorial"><span class="minutes_of_content_wanted">X</span></a> minutes of great content.

I'd like the articles to be between <a href="/editorial"><span class="shortest_article">X</span> and <span class="longest_article">Y</span></a> minutes long.

I <a href="/editorial"><span class="allow_code">don't</span> want</a> articles with computer code in them.

<!-- <li>weeks_to_select_from: <span class="weeks_to_select_from"></span></li> -->
</section>

<section>

## Profile

- name: <span class="name">A. Cool-name</span>
- email: <span class="email">Anna@kool.kom</span>
- picture: <img class="img-circle profile-preview" src="https://placebear.com/100/100">
- user_id: <span class="user_id">asd6s9f6bdf875bdb7as</span>

</section>

<section>

## Address

<a href="/address">
    <span class="name">A. Cool-name</span>
    <br><span class="address1">Flat 6</span>
    <br><span class="address2">Cool House</span>
    <br><span class="city">Cool Town</span>
    <br><span class="zip">C001</span>
    <br><span class="state">KY</span>
    <br><span class="country">Australia</span></a>

</section>

<section>

## Pocket

- pocket_request_token: <span class="pocket_request_token">ccccccc</span>
- pocket_access_token: <span class="pocket_access_token">ddddddd</span>

---

Here's some articles you saved recently:

<ul id="articlelist"></ul>

</section>

<section>

## Payment

Surprise! It's free for now because you're an alpha user. It'll be $10 an 
issue for everyone else when it comes out of alpha, but it'll be $5 an issue
for you, forever!

- currency: <span class="currency">AUD</span>
- price: <span class="price">\$0</span>

</section>

<script src="js/home.js"></script>
