
<h1 style='text-align: center'>Supabase + <span class='text-gradient'>Astro</span> = ❤️  </h1>

This is a basic astro template with supabase SSR integration.  

The auth flow is made on the client,  
tokens are then passed to the server through cookies,  
the authentication for private pages is performed on the server.


## Prerequisites
The template builds on top of Astro's default blank theme, the structure should be self explanatory but if you have any doubts you'll probably find most answers in the <a href='https://docs.astro.build/en/getting-started/'>astro docs.</a>

For the service I'm using the <a href='https://supabase.com/docs/guides/cli/local-development' >supabase local development setup</a>.   
Supabase should be configured with "user management data" template (in the SQL editor), in alternative you can run the sql queries following [this](https://supabase.com/docs/guides/getting-started/tutorials/with-react#set-up-the-database-schema) guide (just for the supabase configuration).   

A boilerplate .env file with placeholders is provided, you'll need to add your supabase keys there.

## Disclaimer
NB: This template is an opinionated take, any feedback is welcome!

## Structure
3 pages are provided:

 - home (current page): which has no authentication requirements.
 - profile: reachable only if authenticated.
 - login: if authentication is already in place it will redirect to the home page.
