export type Rating = number | 'N/A';
export type Website = { label: string; url: string };
export type AgeRating = { label: string; url: string; };
export type Company = { label: 'Developer' | 'Publisher'; name: string; };

export type ReleaseDate = string | 'Unknown';
export type YearsPast = number | '';
export type Release = { releaseDate: ReleaseDate; yearsPast: YearsPast; };

export type Filters = { play: boolean; wish: boolean; };

export type Price = number | 'n/a';
export type PriceCategory = 'loose' | 'cib' | 'newg' | '';

export type GamePrice = {
	loose: Price;
	cib: Price;
	newg: Price;
	category: {
		main: PriceCategory;
		wish: PriceCategory;
	};
};

export type GameItem = {
	id: number,
	slug: string;
	title: string;
	summary: string;
	genres: string[];
	filters: Filters;
	rating: Rating;
	ageRatings: AgeRating[];
	screenshot: string;
	cover: string;
	release: Release;
	websites: Website[];
	company?: Company;
	price?: GamePrice;
};
