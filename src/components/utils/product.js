const platforms = [
  { name: "Chillout VR", imgSrc: "/icons/platforms/chillout_vr.png" },
  { name: "Cluster", imgSrc: "/icons/platforms/cluster.png" },
  { name: "NoseVR", imgSrc: "/icons/platforms/nosevr.png" },
  { name: "Resonite", imgSrc: "/icons/platforms/resonite.png" },
  { name: "Spatial", imgSrc: "/icons/platforms/spatial.png" },
  { name: "Virtual Cast", imgSrc: "/icons/platforms/virtual_cast.png" },
  { name: "VRChat (PCVR)", imgSrc: "/icons/platforms/vrchat_blue.png" },
  { name: "VRChat (Quest)", imgSrc: "/icons/platforms/vrchat_green.png" },
  { name: "Other" }, // Other option
];

const categories = [ 
  { key: "avatars", label: "Avatars" },
  { key: "fashion", label: "Fashion" },
];

const subCategories = {
  avatars: [
    { key: "human_like", label: "Human-like" },
    { key: "anthro_furry", label: "Anthro & Furry" },
    { key: "robot_cyborgs", label: "Robot & Cyborgs" },
    { key: "others_avatars", label: "Others" },
  ],
  fashion: [
    { key: "clothes", label: "Clothes" },
    { key: "accessories", label: "Accessories" },
    { key: "others_fashion", label: "Others" },
  ],
};

const keywordsPool = [
  "modern",
  "classic",
  "trendy",
  "casual",
  "formal",
  "vintage",
  "futuristic",
  "minimalist",
  "colorful",
  "abstract",
  "detailed",
  "cyber",
  "streetwear",
  "artistic",
  "sleek",
  "eco-friendly",
  "handmade",
  "luxury",
  "affordable",
];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomPrice = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

function getProducts() {
  return Array.from({ length: 25 }, (_, i) => {
    const category = getRandomElement(categories);
    const subCategory = getRandomElement(subCategories[category.key]);
    const platform = getRandomElement(platforms); // Randomly select a platform
    const keywords = Array.from({ length: 3 }, () =>
      getRandomElement(keywordsPool)
    );

    return {
      id: `product-${i + 1}`,
      img: `https://via.placeholder.com/150?text=Product+${i + 1}`,
      imgAlt: `Product image ${i + 1}`,
      category: category.label,
      subCategory: subCategory.label,
      platform: platform.name, // Add platform name
      platformImg: platform.imgSrc || "", // Add platform image source, if available
      name: `Product Name ${i + 1}`,
      creatorName: `Creator Name ${i + 1}`,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
      pricing: getRandomPrice(10, 120), // Random price between 10 and 120
      pricingCurrency: "$",
      keywords,
    };
  });
}

export default getProducts;
