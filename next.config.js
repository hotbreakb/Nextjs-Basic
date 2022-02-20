module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/old-lob/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/:params",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}${encodeURIComponent("&")}:params`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.MOVIE_API_KEY}${encodeURIComponent("&")}:params`,

      }
    ]
  },
}
