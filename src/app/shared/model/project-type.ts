export interface project {
  id?: number;
  project_number?: number;
  project_slug?: string;
  project_price?: number;
  short_description_ar?: string;
  short_description_en?: string;
  overview_description_ar?: string;
  overview_description_en?: string;
  video_iframe?: string;
  description_ar?: string;
  description_en?: string;
  default_description?: string;
  delivery_date?: string;
  meta_description_en?: string;
  meta_description_ar?: string;
  meta_keywords_en?: string;
  meta_keywords_ar?: string;
  meta_title_ar?: string;
  meta_title_en?: string;
  address_ar?: string;
  address_en?: string;
  default_address?: string;
  title_en?: string;
  title_ar?: string;
  default_title?: string;
  latitude?: number;
  longitude?: number;
  area?: number;
  is_featured?: number;
  is_published?: number;
  amenities?: Amenity[];
  amenity_ids?: number[];
  services?: Service[];
  service_ids?: number[];
  facilities?: Facility[];
  facility_ids?: number[];
  views?: View[];
  view_ids?: number[];
  purposes?: Purposes[];
  purpose_id?: number;
  areaUnit?: AreaUnit;
  area_unit_id?: number;
  country?: Country;
  country_id?: number;
  region?: Region;
  region_id?: number;
  city?: City;
  city_id?: number;
  areaPlace?: AreaPlace;
  area_place_id?: number;
  unitTypes?: UnitType[];
  unit_type_ids?: number[];
  logo?: string;
  featured_image?: string;
  about_image?: string;
  gallery_images?: string[];
  master_plan_images?: string[];
}

export interface Amenity {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  title: string;
  image: string;
  order: number;
}

export interface Service {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  image: string;
  order: number;
}

export interface Facility {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  image: string;
  order: number;
}

export interface View {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  image: string;
  order: number;
}

export interface Purposes {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  image: string;
  order: number;
}

export interface AreaUnit {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
  image: string;
  order: number;
}

export interface Country {
  id: number;
  name_en: string;
  name_ar: string;
  default_name: string;
  slug: string;
  code: string;
  order: number;
}

export interface Region {
  id: number;
  name_en: string;
  name_ar: string;
  default_name: string;
  slug: string;
  code: string;
  order: number;
}

export interface City {
  id: number;
  name_en: string;
  name_ar: string;
  default_name: string;
  slug: string;
  code: string;
  order: number;
}

export interface AreaPlace {
  id: number;
  name_en: string;
  name_ar: string;
  default_name: string;
  slug: string;
  code: string;
  order: number;
}

export interface UnitType {
  id: number;
  name_en: string;
  name_ar: any;
  default_name: string;
  description_en: string;
  description_ar: any;
  default_description: string;
  area_from: number;
  area_to: number;
  price_from: number;
  price_to: number;
  bedroom_from: number;
  bedroom_to: number;
  bathroom_from: number;
  bathroom_to: number;
  down_payment: number;
  number_of_installments_years_from: number;
  number_of_installments_years_to: number;
  number_of_units: number;
  project_id: number;
  currency: Currency;
  currency_id: number;
  areaUnit: AreaUnit;
  area_unit_id: number;
  order: number;
  paymentMethods: PaymentMethod[];
  payment_method_ids: number[];
  finishingTypes: FinishingType[];
  finishing_type_ids: number[];
  amenities: Amenity[];
  amenity_ids: number[];
  services: Service[];
  service_ids: number[];
  facilities: Facility[];
  facility_ids: number[];
  views: View[];
  view_ids: number[];
  purposes: Purposes;
  purpose_ids: number;
  purposeTypes: PurposeTypes;
  purpose_type_id: number;
  offeringTypes: OfferingType[];
  offering_type_ids: number[];
  furnishing_status: Status[];
  furnishing_status_ids: number[];
  featured_image: string;
  slider: any;
}

export interface Currency {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}

export interface PaymentMethod {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}

export interface FinishingType {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}

export interface PurposeTypes {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}

export interface OfferingType {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}

export interface Status {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  default_name: string;
}
