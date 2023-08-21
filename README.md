
<h1 style='text-align: center'>Supabase + <span class='text-gradient'>Astro</span> = ❤️  </h1>

This is a basic astro template with supabase SSR integration.  

The auth flow is made on the client,  
tokens are then passed to the server through cookies,  
the authentication for private pages (only the profile page in this example) is performed on the server.

NB: This template is an opinionated take for supabse integration, any feedback is welcome!

## Prerequisites
The template builds on top of Astro's default blank theme, the structure should be self explanatory but if you have any doubts you'll probably find the answersa in the <a href='https://docs.astro.build/en/getting-started/'>astro docs.</a>

It has been built using the <a href='https://supabase.com/docs/guides/cli/local-development' >supabase local development setup</a>,  
if you want to see something interisting this is a requirement 😊 .

An boilerplate .env file with placeholders is provided, you'll need to add you supabase keys there.

---
it is made of 3 pages:

 - home (current page): which has no authentication requirements.
 - profile: reachable only if authenticated, otherwise the user will be redirected to <a href="login">login</a>.
 - login: if authentication is already in place it will redirect to <a href="profile">profile</a>.
