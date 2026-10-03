import { Column } from "@once-ui-system/core";

interface YouTubeEmbedProps extends React.ComponentProps<typeof Column> {
  /** YouTube video ID, e.g. the `PKCgRCNnps0` in youtu.be/PKCgRCNnps0 */
  videoId: string;
  title: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, ...flex }) => {
  return (
    <Column
      fillWidth
      radius="l"
      border="neutral-alpha-weak"
      overflow="hidden"
      style={{ aspectRatio: "16 / 9" }}
      {...flex}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </Column>
  );
};
