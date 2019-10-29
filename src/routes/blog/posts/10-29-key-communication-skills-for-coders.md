---
title: "8 Key Communication Skills for Coders"
date: "2019-10-29T08:38:00.000Z"
category: "speaking, writing, listening"
changelog: true
---
Jerod, Feross, Divya and I recently had a conversation about communication skills for software developers on JSParty #93.

This is a topic that has come up a lot on JSParty, so it was great to do a whole episode focused on tips and best practices, and the results were too good to leave buried in a show transcript so I thought I'd pull them out into an article.

<!-- more --> 

[Jerod](https://twitter.com/jerodsanto), [Feross](https://twitter.com/feross), [Divya](https://twitter.com/shortdiv) and I recently had a conversation about communication skills for software developers on [JSParty #93](https://changelog.com/jsparty/93).

This is a topic that has come up a lot on JSParty, so it was great to do a whole episode focused on tips and best practices, and the results were too good to leave buried in a [show transcript](https://changelog.com/jsparty/93) so I thought I'd pull them out into an article.


## 1. Comments should provide context for code.

Feross did a great job explaining this one:

> You don’t want the comments to be at the same level as the code itself. Repeating the code obviously is not useful to anybody. But I think comments that are higher-level than the code can make sense, as well as ones that are lower-level than the code. What I mean by that is – like, higher-level than the code would be like explaining the motivation for the code, like why are we doing it this way, maybe what other approaches were tried, or what are we trying to accomplish at a high level here; it’s giving people context.

> And then lower-level than the code can also make sense. I’ve seen comments like – say that you have a variable name that is not specifying the units. Maybe you’re getting an argument into a function and you don’t really know what are the units of this, or what are valid values, like “Can it be null? Can it be undefined?”, stuff like that. I would call that a comment that’s lower-level than the code; it tells you details that are not actually in the code itself.


## 2. Use documentation to explain the bigger picture

So often documentation is used only to create a 'reference' guide for developers, but while references can be useful this leaves new developers at a loss for the 'why' and 'how' to use your library.

Divya explained how Vue.js takes a different approach to their documentation:

> The Vue docs were written in a way that was easily – it was almost like an introduction to Vue… So you could read the docs, and actually as you got to the end of it, understand exactly how things worked.

> It was not necessarily the case where you have to read from cover-to-cover, but it was easy to pick up and then understand the flow of how everything works… Because the way that the documentation was organized kind of built on previous documentation. So as you’re jumping through, and if weren’t using it as a reference, you could easily jump from one piece to another and understand how exactly a specific function or a specific component would be architected, or Vue patterns etc. Which I think is really interesting, because that’s a very novel way of thinking about it, rather than thinking of documentation as like “Oh, I want to help a developer who’s working on this thing use this framework”, rather than “I wanna help them understand why they’re using this particular pattern.”


## 3. Prioritize and give weight to your feedback

It's not always clear how much weight to give to particular pieces of feedback, especially when you're getting a lot of it! How do you differentiate between "this is super important and you must fix it" as compared to "this is a minor nitpick, take it or leave it?"

Divya shared a powerful technique called a 'feedback ladder' that she uses at Netlify:

> For example, if something needs to be changed within a PR, you would prefix it with “boulder.” I think there’s also “mountain”, and it means this huge, huge change, that needs a conversation… And then “boulder” is like “This is a change that you need to make before this PR is merged.”

> And then I think there’s “pebble”, which is a tiny change, maybe a stylistic tweak… And I think “sand” is the smallest, which is often to your own discretion, “Do whatever you want. Take it or leave it” type feedback

This allows the person receiving the feedback to instantly know which pieces are most important and must be addressed and resolved, and which are simply stylistic preferences.

## 4. Create fast feedback loops with stakeholders

Many of us have had the experience of having a conversation, working on something for a week or two, and then coming back and hearing that what we've done is not what the stakeholder expected as well.

To prevent this problem, Jerod had a simple solution:

> Well, faster feedback loops, for one. So don’t go work two weeks under an assumption, if you can. Get that four-hour session in and return back and say “Is this down the right path?” For example, I think that’s something that we’ve established as good - the faster your feedback loop to yourself, and then also to others who are gonna be using it, the less time you will waste on the wrong path.

## 5. Replay and summarize your understanding

Another key aspect to making sure you're on the same page with a stakeholder is to replay back what you think you understood so they can confirm it.

As I described in the podcast:

> One thing that is kind of in that “Get it in writing” thing, but is kind of a variant on active listening, that I’ve used anyway, is when somebody is describing to me what they want, I will try to say back to them what I heard. But I will deliberately not repeat exactly what they said, because that makes sense to them. I’ll try to rephrase it in the way that I would think about it or approach it, and if they hear that and say “Yes, that is correct”, we at least have a better chance of both having the same mind frame on it… Whereas if I repeat back the exact language they said - or this is the challenge with getting it in writing… If I get them to write down exactly what they said, that still means the same to them, even if I’m interpreting it somewhere else. So make sure that we try that translation back and forth from your language to my language, and are in agreement that both of those languages seem to be saying the same thing.

## 6. Figure out the goals of the people you're talking to

People understand the world [from their own perspectives](https://www.speakwritelisten.com/blog/10-3-perspective-is-priceless/), which means that in order to get them to hear, you need to understand where they are coming from.

Jerod highlights the most important way to find out someone's goals:

> The way you find out is by asking questions. One of the keys to being a great communicator - we think about the output side of communication so much. “How do I write this? How do I say this? What hand signals do I provide?” But a lot of great communication is actually listening. You have to listen, and sometimes that requires practice and patience, and effort to say “I’m not listening, I’m actually just waiting for my turn to talk”, and so I’m missing out on all sorts of context that this person is providing to me, which I can then ingest and use to be a better communicator.

> So listening is hard to do, especially in long form, especially when you just can’t wait to say that thing that you’ve been thinking about for this whole time… But if you don’t have the context of the person and if you can’t gauge their technical level, you ask them.

## 7. Get stakeholders on board by highlighting their own points

One of the most challenging things communicating with stakeholders can be pushing back effectively. And a key technique for doing this is using the stakeholder's own points and language to make your points.

Divya explains:

> The other thing I really like about when you communicate with stakeholders - this has to do with active listening - is this way of attributing specific questions of feedback to people. So it’s similar to this replaying back a question, but it’s more like “To your point about this thing, this is what I see.” So it makes people feel heard, rather than like “I’m gonna come in as obviously the expert who knows more than you do, and tell you what exactly you need to do.” It’s identifying “You’re obviously the stakeholder and I’m building this thing for your use case, which means you’re obviously the expert, and I’m the architect/engineer who’s building stuff. So let me identify your problem.”

> Essentially, just say that “Your problem is important” and how exactly you’re gonna solve it, and identifying – whenever you have those conversations to specific people, it makes it for a more fruitful discussion. And I think also in general people think well of you when you do that. I never realized how much of an impact that makes. I often just do it out of habit, because I’m like “Oh, to the point that you’re making about this, blah-blah-blah”, and they’re like “Oh, you really listened to what I was saying. You actually truly understand what I’m saying, and broke down and explained the problem and the solution so well.” Which I think is great, and it’s a wonderful way of communicating and making sure that someone feels heard.


## 8. Uncover users problems, gently discard their solutions

A key insight for communicating with listeners is to use the half-baked solutions they bring you to [uncover their problems](https://www.speakwritelisten.com/blog/10-24-search-for-problems-when-people-bring-solutions).

Jerod goes into more detail:

> Users will often bring you a solution, when what they actually have is a problem, and they will describe it to you as a thing that you should do. Like, “Here’s what you should do” and it’s like “Move a thing” or “Change this…” And that can be helpful, it can be not helpful…

> A lot of times their solutions are not good, but their problems are real, and good. If it’s their problem for you, and you’re on the business side of the software, so to speak, that’s good for you to fix that problem, because they are your customer and they are your user. So a skill to have as a coder who’s talking to users is the ability to translate their solution and to drill down with them. You don’t have to do this immediately when you hear the first sentence, but to work with them to figure out what it is that they’re trying to solve, because it’s a very real need there… And gracefully - in the case that their solution is often bad - gracefully discard the solution, and offer perhaps a more obvious or better solution, or maybe say “I’ll get back to you with options on ways of solving this…” But to be able to tease apart and find out what is the actual problem here – because they’re not gonna say “Hey, I’ve got this problem”, they’re gonna say “Hey, here’s what you should do. You should change this”, or “I have an idea for the website”, or whatever. And I was gonna say developers don’t do that as much, because they know, but no - we do that all the time; we just give you advice.

--

OK, that's my wrap-up. If you're interested in the people behind the tips, or want to dig deeper into these communication skills, you can listen to the entire episode right here 👇

<audio data-theme="day" data-src="https://changelog.com/jsparty/93/embed" src="https://cdn.changelog.com/uploads/jsparty/93/js-party-93.mp3" preload="none" class="changelog-episode" controls></audio><p><a href="https://changelog.com/jsparty/93">JS Party 93: Remember, people are human</a> – Listen on <a href="https://changelog.com/">Changelog.com</a></p>
