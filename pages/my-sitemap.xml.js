const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <loc
        >http://www.mancinifalegnameria.it/#home/google09a2778f10456fed.html</loc
      >
      <lastmod>2021-06-01</lastmod>
     <url>
       <loc>https://mancinifalegnameria.it</loc>
     </url>
     <url>
       <loc>https://mancinifalegnameria.it/#home</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/#chi-sono</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/#progetti</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/ambienti/camera-da-letto</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/ambienti/armadio</loc>
     </url>
     <url>
       <loc>https://mancinifalegnameria.it/ambienti/arredo-bagno</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/ambienti/console</loc>
     </url>
      <url>
       <loc>https://mancinifalegnameria.it/ambienti/porte</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
