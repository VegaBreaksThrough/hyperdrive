import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "HyperDrive",
    pageTitleSuffix: " | HyperDrive",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "fr-CA",
    baseUrl: "vegabreaksthrough.github.io/hyperdrive",
    ignorePatterns: ["private", "templates", ".obsidian", ".trash"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",
          lightgray: "#eee8d5",
          gray: "#b8b8b8",
          darkgray: "#586e75",
          dark: "#073642",
          secondary: "#268bd2",
          tertiary: "#2aa198",
          highlight: "rgba(38, 139, 210, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#002b36",
          lightgray: "#073642",
          gray: "#657b83",
          darkgray: "#93a1a1",
          dark: "#eee8d5",
          secondary: "#268bd2",
          tertiary: "#2aa198",
          highlight: "rgba(38, 139, 210, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
