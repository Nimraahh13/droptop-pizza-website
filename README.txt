DROP & TOP PIZZA - WEBSITE (Supabase version)
=============================================
No PHP or MySQL needed. Plain HTML + CSS + JavaScript, with Supabase as the database.

SETUP (one time, about 10 minutes)
1. Open your Supabase project > SQL Editor > New query.
   Paste everything from supabase-setup.sql and click Run.
   (This creates the tables, security rules and the full menu.)
2. Supabase > Project Settings > API. Copy the "Project URL" and the "anon public" key.
   Open js/supabase-config.js and paste them in. NEVER use the service_role key.
3. Create the owner login:
   Supabase > Authentication > Users > Add user > enter your email + strong password
   (tick "Auto confirm user"). Then in SQL Editor run (with your email):
   insert into admins (user_id) select id from auth.users where email = 'you@example.com';
4. Supabase > Authentication > Sign In / Providers: turn OFF "Allow new users to sign up"
   (only you should have an account).

TRY IT ON YOUR COMPUTER
Open the folder in VS Code, install the "Live Server" extension, right-click index.html > Open with Live Server.

PUT IT ONLINE (free options)
Upload the whole folder to Netlify (drag & drop at app.netlify.com/drop), Vercel, GitHub Pages or any normal hosting.
Customer site:  https://yourdomain.com/
Owner panel:    https://yourdomain.com/admin/login.html   (not linked anywhere on the customer site)

PAGES
index.html, menu.html, cart.html, checkout.html, order-success.html, contact.html
admin/login.html, admin/index.html (orders + new order alert, refreshes every 30s),
admin/order.html (full order + print), admin/menu.html (edit prices, hide/show, add items)

SECURITY
- Prices are always taken from the database when an order is placed, never from the browser.
- Customers can only place orders; they cannot read or change any orders.
- Only accounts listed in the admins table can see orders or edit the menu.
