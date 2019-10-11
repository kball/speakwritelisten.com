
[Jerod](https://twitter.com/jerodsanto), [Feross](https://twitter.com/feross), [Divya](https://twitter.com/shortdiv) and I recently had a conversation about communication skills for software developers on [JSParty #93](https://changelog.com/jsparty/93)

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
