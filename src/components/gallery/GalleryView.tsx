"use client";

import { gallery } from "@/resources";
import type { Gallery } from "@/types";
import { Column, Grid, MasonryGrid, Media } from "@once-ui-system/core";
import styles from "./GalleryView.module.scss";

type Series = NonNullable<Gallery["series"]>[number];

// `spaced` adds the 8px gap below a set placed above the grid; the grid already ends with one
function SeriesBlock({ set, spaced }: { set: Series; spaced?: boolean }) {
  // Two views sit side by side; three or more show the first large with the rest stacked
  if (set.images.length < 3) {
    return (
      <Grid className={styles.pair} marginBottom={spaced ? "8" : undefined}>
        {set.images.map((image) => (
          <Media
            key={image.src}
            enlarge
            sizes="(max-width: 768px) 100vw, 50vw"
            radius="m"
            aspectRatio="16 / 9"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </Grid>
    );
  }

  const [main, ...angles] = set.images;
  return (
    <Grid className={styles.series} marginBottom={spaced ? "8" : undefined}>
      <Column className={styles.main}>
        <Media
          enlarge
          priority
          fill
          fillHeight
          sizes="(max-width: 768px) 100vw, 66vw"
          radius="m"
          src={main.src}
          alt={main.alt}
        />
      </Column>
      {angles.map((image) => (
        <Media
          key={image.src}
          enlarge
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          radius="m"
          aspectRatio="16 / 9"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </Grid>
  );
}

export default function GalleryView() {
  const series = gallery.series ?? [];
  const top = series.filter((set) => set.placement !== "bottom");
  const bottom = series.filter((set) => set.placement === "bottom");

  return (
    <Column fillWidth>
      {top.map((set) => (
        <SeriesBlock key={set.images[0].src} set={set} spaced />
      ))}
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {gallery.images.map((image, index) => (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={image.src}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MasonryGrid>
      {bottom.map((set) => (
        <SeriesBlock key={set.images[0].src} set={set} />
      ))}
    </Column>
  );
}
