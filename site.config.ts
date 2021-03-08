export const config = {
  siteMeta: {
    title: "Super Tech Blog",
    teamName: "SUPER STUDIO, INC.",
    description: "株式会社SUPER STUDIOのテックブログです．「コト、モノにかかわる全ての人々の顧客体験を最大化する」その裏側を支える技術や，会社にコミットしているエンジニアの知見・日常などを共有します．",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://akira-matsumoto-ss.github.io/ss_tech_blog"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://super-studio.jp",
    },
    {
      title: "note",
      href: "https://note.com/super_studio/m/m557a7e30ad51",
    },
    {
      title: "ecforce",
      href: "https://ec-force.com/",
    },
    {
      title: "Apollo D2C",
      href: "https://apollo-d2c.com/",
    },
  ],
};
