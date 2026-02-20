/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio.jinproject.xyz',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  transform: async (config, path) => {
    // 홈페이지는 최우선
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // 주요 페이지는 높은 우선순위
    const mainPages = ['/career', '/skills', '/qna', '/project', '/contact'];
    if (mainPages.includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // 프로젝트 상세 등 나머지 페이지
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
