/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio.jinproject.xyz',
  generateRobotsTxt: false, // 이미 수동으로 생성했으므로 false
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  transform: async (config, path) => {
    // 홈페이지는 우선순위를 높게 설정
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
