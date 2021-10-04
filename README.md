## Assignment a4 - Components

https://a4-william-white.glitch.me

Include a very brief summary of your project here and what you changed / added to assignment #3. Briefly (3–4 sentences) answer the following question: did the new technology improve or hinder the development experience?

Unlike previous assignments, this assignment will be solely graded on whether or not you successfully complete it. Partial credit will be generously given.

My project is a remake of my assignment a2, using svelte as a base.  What has changed from assignment a2 is that the display of entries now exists as a list, where the given values are shown in brackets except for the derived field.  The values are displayed via string concatenation, and the text of the entries is bolded.  It functions very similarly to my original a2, however, the code is much cleaner, and much more compact.

I would say that svelte improved the development experience.  I ran into some very annoying bugs during development, but that was more an issue of me being forgetful than it was a fault on the part of svelte.  I found the approach of having CSS, HTML, and JS in one file to be surprisingly manageable compared to how it normally would be, thanks to how svelte structured itself.  The reactive aspect of svelte was also incredibly helpful - the {#await [promise] then [actions]} and {#each [actions] as [object]} blocks were much more intuitive than chained arrow functions (at least for me, initially), in addition to being more compact.
