function propertyList(propId) {
  let ans;
  const properties = [
    {
      id: "prop1",
      address: "Discovery Dock East, South Quay Square",
      type: "flat",
      bedrooms: 2,
      price: "750,000",
      lat: "51.50129000",
      lng: "-0.01816800",
      description:
        "With unprecedented views of the London Eye and the Horse Guards this superb three bedroom apartment offers bespoke interiors throughout and is set in one of the most prestigious blocks in Westminster."
    },
    {
      id: "prop2",
      address: "Marine Parade East, Clacton-On-Sea",
      type: "flat",
      bedrooms: 2,
      price: "199,950",
      lat: "51.79257200",
      lng: "1.16707500",
      description:
        "The attention to detail and hand selected materials are inclusive of timber, natural stone and impeccable craft elements."
    },
    {
      id: "prop3",
      address: "Robinhood Lane Hall Green, Birmingham",
      type: "house",
      bedrooms: 3,
      price: "240,000",
      lat: "52.42375600",
      lng: "-1.84638800",
      description:
        "This property was designed by renowned architect Sir Terry Farrell, considered to be one of London’s best Central London's scheme."
    },
    {
      id: "prop4",
      address: "Primrose Grove, Selby",
      type: "house",
      bedrooms: 2,
      price: "75,000",
      lat: "53.78595000",
      lng: "-1.08516200",
      description:
        "The apartments at Lyons Place are spacious, light and quiet, designed with an elegant, understated flair and fine attention to detail."
    },
    {
      id: "prop5",
      address: "South Church, Bishop Auckland",
      type: "house",
      bedrooms: 3,
      price: "215,000",
      lat: "54.64915000",
      lng: "-1.66710100",
      description:
        "This property was designed by renowned architect Sir Terry Farrell, considered to be one of London’s best Central London's scheme."
    },
    {
      id: "prop6",
      address: "Upper Grosvenor Road, Tunbridge Wells, Kent",
      type: "flat",
      bedrooms: 1,
      price: "170,000",
      lat: "51.14547300",
      lng: "0.27270600",
      description:
        "This property was designed by renowned architect Sir Terry Farrell, considered to be one of London’s best Central London's scheme."
    }
  ];

  propId === undefined
    ? (ans = properties)
    : (ans = [properties.find(prop => propId === prop.id)]);

  return ans;
}

module.exports = propertyList;
