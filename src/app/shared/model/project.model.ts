export interface Project {
  title: string;
  price: number;
  location: string;
  image: string;
  features: {
    beds: number;
    baths: number;
    area: string;
  };
}
