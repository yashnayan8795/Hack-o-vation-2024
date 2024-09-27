import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Our PR Team Stopped a Crisis in Its Tracks",
    paragraph:
      "Sarah, PR Manager at a multinational company, sharesWe rely on the News Sentiment Analyzer to monitor news articles and public opinion about our brand. Last month, the tool flagged a sudden spike in negative sentiment after a product recall story began circulating. Thanks to the automatic email alert, we were able to respond within hours, issuing a public statement and avoiding a PR disaster.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sarah",
      image: "/images/blog/author-01.png",
      designation: "PR Manager at a multinational company",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Staying Ahead of the Curve with Sentiment Tracking",
    paragraph:
      "I use the platform to keep an eye on public sentiment around new legislation. Recently, a bill I was working on started gaining media attention, and thanks to the sentiment analyzer, I was able to see early signs of negative reactions. With that insight, we adjusted our communication strategy, helping to clarify the bill's intentions before things spiraled.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Mark",
      image: "/images/blog/author-02.png",
      designation: "a government policy analyst",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Turning Negative News into Actionable Insights",
    paragraph:
      "Our team uses the News Sentiment Analyzer to track mentions of our brand across online news. When a viral video criticizing our customer support went live, the platform flagged it almost immediately. We received an email alert and quickly addressed the issue before it became a bigger concern, showing our commitment to solving problems in real-time.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Olivia",
      image: "/images/blog/author-03.png",
      designation: "a customer service head at a retail chain",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
