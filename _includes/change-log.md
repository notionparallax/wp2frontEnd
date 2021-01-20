## What's changed?

### December

I'd neglected this a little as I didn't think anyone really cared, but people have been looking at it lately, so I'll do my best to be more diligent.

#### In the zine:

There's been a major change to how the magazine gets built. Before there was very little pre-processing of the HTML that I get from Pocket, and then there was a _lot_ of post-processing with JavaScript. I've flipped that and now the pre-processing is much more dramatic. This makes it a bit slower for me, but the quality of the HTML that is rendered in the magazine is _much_ higher. This seems to protect against the strange empty columns problem that occasionally showed up. It also means that the footnote URLS are much more robust.

There's an article title in the right margin of each spread. This can sometimes look a bit tatty because it wraps strangely, but we'll get to that later.

The PDF that I send to the printer is now made with Firefox, not with chrome. It renders much more reliably, but at the cost of not having widow and orphan control on the paragraphs. (That's been an open bug for 14 years!)

#### On the website:

This update.

There is also some more js that controls the payments page which should stop people signing up for two subscriptions when they mean to change the one they have.

### June

#### In the zine:

- Another new printer! Colour covers, writing on the spine, Custom Packing slips, more potential for customising the format in the future. (Anyone feel like a green, line bound edition, with gold foil block lettering?)
  ![](https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.15752-9/106074191_2759750760927006_2981368718359004560_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=h8DCTaFyRfIAX9HuuDA&_nc_ht=scontent.fsyd4-1.fna&oh=fd16fb212e60567c7812f33b8314e875&oe=5F1C1EF6)
  Fingers crossed that this printer is a bit more reliable than the last one.
- Progress on stopping headings from getting stuck at the bottom of pages. This is a big issue that's taking a while to get perfect. I wrote an issue for paged.js [here](https://gitlab.pagedmedia.org/tools/pagedjs/issues/212) and with [Julie Blanc](https://twitter.com/julieblancfr)'s help we got an _almost_ perfect solution. There's a little bit more to do, but I think I understand it now.
- <figure class="half-width right">
  ![](https://gitlab.pagedmedia.org/tools/pagedjs/uploads/5f9bbc828a9be06bd2e7dc1060221edb/image.png)

  </figure>
  [Baseline grid](https://gdpsu.typepad.com/354/2017/10/achieving-harmony-more-meaningful-typography-and-the-art-of-fine-typography.html): There should now be a much more consistent vertical rhythm to the pages. It's not perfect yet, but it's getting there! (This was _[frustrating!](https://stackoverflow.com/questions/62380128/css-background-image-repeats-not-playing-nicely-with-python-http-server-and-chro)_)

  You probably won't even notice on the printed page!

- Short links: There are often some _nasty_ links inside articles. Usually because nobody cares what's hidden _inside_ the link, just what you can see. You can go to the waldenpond.press website and expand the link.

    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m playing around with the way that links get shown.<br>Do you think that the shortened links are helpful? The idea is to make them more typable so you&#39;d do: <a href="https://t.co/gZUzxQdsIE">https://t.co/gZUzxQdsIE</a><br>but the root is still there so you don&#39;t get any nasty surprises. <a href="https://t.co/52wLllxtYr">pic.twitter.com/52wLllxtYr</a></p>&mdash; WaldenPond (@WaldenPondZine) <a href="https://twitter.com/WaldenPondZine/status/1269616178827149312?ref_src=twsrc%5Etfw">June 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So, other than the nice new cover, you won't _see_ much of a difference. This month has been about removing issues that might be annoying and are a fly in the ointment of your reading experience. There have been a _lot_ of little changes.

#### On the website:

Other than link shortening, I haven't touched the website much.

- some of the text's contrast ratio was too low, so that's been bumped up a bit.
- Some image files have been downsampled to fit their display size. Before you'd download a 3mb image ever time you visit the page. Sorry.

Now the print side of things is under control the web side might get a bit more exciting!

### May

#### In the zine:

- Because there's a new printer:
  - the booklets are now 6&times;9 inches, and not A5. You probably wouldn't notice the difference if they weren't side by side.
  - There's a new binding style, perfect bound, not saddle stitch (which is a printing euphemism for "stapled").
  - editions can be much longer now. I've got a 10 hour edition on order as a test!
- Started using Mako templates. You won't see any difference, but it makes for much cleaner markup, which leads to fewer bugs.
- Link markers, the superscript numbers<sup>1</sup> that tell you what the URL for the link is, don't break away from their word any more. Sometimes you'd get the link on the next line which was waaay confusing.
- New curation algorithm. I was using a home baked algo, but now I'm using the [Google OR Tools Knapsack solver](https://developers.google.com/optimization/bin/knapsack) which will allow for all kinds of fun things in the future.
- Plus the standard, obsessive, layout tweaking that I do instead of sleeping or eating.

#### On the website:

- [There's a new editorial feature that let you control the subjects of your editions](https://twitter.com/WaldenPondZine/status/1264813627069984768).
- The payment page now allows you to change your subscription type. If you want a 4 hour book one month, then a 1 hour PDF the next, that's cool, you can manage that now.
- A bunch of little fixes to make it a bit nicer to use.

### April

#### In the zine:

- There are lots of little typography upgrades. Em dashes&mdash;my
  favourite&mdash;are now rendered much more neatly. Same goes for fractions,
  e.g. <sup>1</sup>&frasl;<sub>3</sub> and en dashes, e.g. 1<span class="wp-ndash">&ndash;</span>13
- The mysterious numbers underneath images in New Yorker articles have gone.
- Articles that have more than one author are now properly attributed.
- A bunch of tiny changes that should add up to having a more enjoyable read.

#### On the website:

- The sign up flow has changed a little. It's still a bit crusty, but much less so than before.
- There is a graph on the <em>Editorial details</em> page. This means that you don't need me to check if your filters leave you with enough content.
- There is a <em>Tips</em> page that has a bunch of suggestions that might mean that you get more out of Walden Pond.
- You can now pick your paper colour on the <em>Editorial details</em> page.
