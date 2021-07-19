const getRssFeed = () => {
  fetch('http://localhost:8080/rss')
  .then(res => res.json())
  .then(facts => {
    renderPosts(facts);
  })
  .catch(err => {
    console.log(err);
  })
}
getRssFeed();

const renderPosts = (posts) => {
  const root = document.getElementById('root');
  posts.forEach((post, i) => {
      const div = document.createElement('div');

      const h2 = document.createElement('h2');
      h2.innerText = post.title
      div.appendChild(h2)

      const p = document.createElement('p');
      p.innerText = post.pubDate + ' | ' + post['dc:creator'] + ' | Categories:' + post.categories
      div.appendChild(p);

      const content = document.createElement('p');
      content.innerText = post.contentSnippet
      div.appendChild(content)

      root.appendChild(div)
  });

}
