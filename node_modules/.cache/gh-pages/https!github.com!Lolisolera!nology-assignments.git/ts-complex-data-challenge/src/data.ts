type Company = {
  name: string;
  industry: string;
  start: number;
  end?: number;
};

export const companies: Company[] = [
  { name: "Money 4 U", industry: "Finance", start: 1981, end: 2004 },
  { name: "The Clothes Bay", industry: "Retail", start: 1992, end: 2008 },
  { name: "Luxurious Limousines", industry: "Auto", start: 1999, end: 2007 },
  { name: "Sunglasses House", industry: "Retail", start: 1989, end: 2010 },
  { name: "Vantage Solutions", industry: "Technology", start: 2009, end: 2014 },
  { name: "Money Banking", industry: "Finance", start: 1987, end: 2010 },
  { name: "Triple Motors", industry: "Auto", start: 1986, end: 1996 },
  { name: "Mech Smart", industry: "Technology", start: 2011, end: 2016 },
  { name: "Ice-Cream Lettuce", industry: "Retail", start: 1981, end: 1989 },
];
