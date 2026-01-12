import BannerCarousel, { BannerItem } from "../common/BannerCarousel";

type Props = {
  items: BannerItem[];
};

export default function BannerSection({ items }: Props) {
  return <BannerCarousel items={items} />;
}

export type { BannerItem };
