This code example illustrates the basics of creating an application using Next.js.
In this example you will see:

1. how file-based routing works. To see this notice how 
the links to the files in /pages are linked to in /components/Header. Also
check out all the files in /pages. Navigate to http://localhost:3000/test_routing. 

2. how easy it is to access static resources like images. See this in /pages/index.js

3. how to use Next.js' Link API (see /components/Header)

4. how to use a shared 'Layout' component to apply styles accross pages. This
includes adding a link to React-Bootstrap so that React-Bootstrap components can be used accross 
pages. (See /components/MyLayout and /pages/index.js).


To run this code:
1. cd to project folder
2. npm install
3. npm run dev
4. http://localhost:3000/ and http://localhost:3000/test_routing