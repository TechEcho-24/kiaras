export interface Product {
  id: string;
  name: string;
  slug: string;
  folderName: string;
  tag: string;
  collection: "Gourmet Gift Hampers" | "Festive Gifting" | "Custom Orders" | "Corporate Gifting" | "Wedding & Trousseau Packaging";
  price: string;
  tagline: string;
  description: string;
  highlights: string[];
  dimensions: string;
  materials: string;
  idealFor: string;
  images: string[];
  coverImage: string;
  interiorImage?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "shahi-jal-mahal",
    name: "Shahi Jal Mahal Luxury Hamper",
    slug: "shahi-jal-mahal",
    folderName: "Shahi Jal Mahal",
    tag: "Signature Heritage",
    collection: "Wedding & Trousseau Packaging",
    price: "Price on Request",
    tagline: "Palatial Miniature Art with Triple Golden Hammered Jars",
    description: "Inspired by the royal Jal Mahal palace in Rajasthan, this handcrafted heirloom box features a breathtaking hand-rendered painting of majestic blue elephants, peacocks, and blooming lotus ponds. Finished with gilded brass accents and housing three hammered gold-plated canisters.",
    highlights: [
      "Triple gold-embellished hammered airtight jars",
      "Hand-rendered Mughal miniature artwork on lacquered wood",
      "Padded silk velvet interior lining in royal ivory",
      "Bespoke laser-engraved monogram brass plate available",
      "Handcrafted gilded brass lock and hinges"
    ],
    dimensions: "16\" x 8\" x 5.5\"",
    materials: "Lacquered Teak Wood, Pure Brass Hardware, Silk Velvet, Food-Grade Golden Metal Jars",
    idealFor: "Royal Wedding Trousseau, VIP Guest Favors, Milestone Anniversaries",
    images: [
      "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1557.jpg",
      "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1578.jpg",
      "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1562.jpg",
      "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1566.jpg",
      "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1582.jpg"
    ],
    coverImage: "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1557.jpg",
    interiorImage: "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1578.jpg"
  },
  {
    id: "emerald-gold-haveli",
    name: "Emerald Gold Haveli Hamper",
    slug: "emerald-gold-haveli",
    folderName: "Emerald Gold Haveli",
    tag: "Bespoke Royal",
    collection: "Festive Gifting",
    price: "Price on Request",
    tagline: "Regal Pavilion Motif with Gourmet Dry Fruits & Chocolates",
    description: "An architectural marvel in packaging, the Emerald Gold Haveli depicts ornate jharokha arches adorned with peacocks and blooming flora. Inside, a satin-cushioned double compartment houses clear glass jars with gourmet dry fruits and artisanal chocolates.",
    highlights: [
      "Dual heavy glass jars with gold lids for nuts & dried berries",
      "Handmade Belgian chocolate confectionery tray insert",
      "Golden chandelier and palace arch art on pearlized finish",
      "Magnetic closure with decorative gold ribbon pull",
      "Customizable jar labels with client initials"
    ],
    dimensions: "15\" x 9.5\" x 4.5\"",
    materials: "Rigid Hardboard & Wood, Metallic Gold Paper Inlay, Satin Fabric, Glassware",
    idealFor: "Diwali Corporate Hampers, High-Profile Festive Gifting, Housewarming",
    images: [
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1784.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1811.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1785.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1793.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1802.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1808.jpg",
      "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1814.jpg"
    ],
    coverImage: "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1784.jpg",
    interiorImage: "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1811.jpg"
  },
  {
    id: "rose-ivory",
    name: "Rose Ivory Royal Trunk",
    slug: "rose-ivory",
    folderName: "Rose Ivory",
    tag: "Masterpiece",
    collection: "Wedding & Trousseau Packaging",
    price: "Price on Request",
    tagline: "3D High-Relief Sculpted Elephant & Blush Botanical Filigree",
    description: "A monumental work of luxury gifting art. The lid features an embossed 3D sculpted ivory elephant crowned in jewels, surrounded by delicate blooming English roses and baroque gold vine arabesques against a blushing ivory ground.",
    highlights: [
      "Signature high-relief 3D sculpted elephant medallion",
      "Crystalline gem embellishments and mother-of-pearl sheen",
      "Multi-utility keepsake box after festive use",
      "Plush velvet base with protective golden metal feet",
      "Ideal centerpiece for bridal trousseau displays"
    ],
    dimensions: "16\" x 9\" x 5\"",
    materials: "Resin Relief Sculpture, Solid Wood Base, Gilded Brass Trim, Ivory Silk Lining",
    idealFor: "Bridal Gifting, Royal Wedding Invitations, Heirloom Keepsakes",
    images: [
      "/Rose%20Ivory/Copy%20of%20Untitled%20Session14366.jpg",
      "/Rose%20Ivory/Copy%20of%20Untitled%20Session1519.jpg",
      "/Rose%20Ivory/Copy%20of%20Untitled%20Session1522.jpg",
      "/Rose%20Ivory/Copy%20of%20Untitled%20Session1525.jpg",
      "/Rose%20Ivory/Copy%20of%20Untitled%20Session1528.jpg"
    ],
    coverImage: "/Rose%20Ivory/Copy%20of%20Untitled%20Session14366.jpg"
  },
  {
    id: "sun-kissed-botanica",
    name: "Sun kissed Botanica Rattan Hamper",
    slug: "sun-kissed-botanica",
    folderName: "Sun kissed Botanica",
    tag: "Artisanal Chic",
    collection: "Gourmet Gift Hampers",
    price: "Price on Request",
    tagline: "Hand-Woven Rattan Cane Tray with Golden Lotus Canisters",
    description: "A contemporary classic blending natural hand-woven cane webbing with supple saddle-brown vegan leather. Accented with twin golden canisters crowned with lotus finials, delicate silk organza potlis, and handcrafted gourmet confections.",
    highlights: [
      "Natural wicker rattan cane weave with stitched leather rim",
      "Twin gold-finished metal jars with floral finials",
      "Shimmering sheer organza gift pouches with tassels",
      "Multi-tiered presentation for sweet and savory delicacies",
      "Reusable as a luxury living room or vanity decor tray"
    ],
    dimensions: "18\" diameter round tray x 4\" depth",
    materials: "Natural Cane Rattan, Premium Vegan Leather, Gold-Tone Brass Canisters",
    idealFor: "Luxe Festive Gifting, Baby Showers, Gourmet Food Hampers, Celebrations",
    images: [
      "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1754.jpg",
      "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1762.jpg",
      "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1764.jpg",
      "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1774.jpg",
      "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1782.jpg"
    ],
    coverImage: "/Sun%20kissed%20Botanica/Copy%20of%20Untitled%20Session1754.jpg"
  },
  {
    id: "blooming-kalpavriksha",
    name: "Blooming Kalpavriksha Keepsake",
    slug: "blooming-kalpavriksha",
    folderName: "Blooming Kalpavriksha",
    tag: "Heritage Motif",
    collection: "Festive Gifting",
    price: "Price on Request",
    tagline: "The Divine Wish-Fulfilling Tree in Rich Lacquer & Brass",
    description: "Representing abundance, prosperity, and blessings, the divine Kalpavriksha tree is depicted in vibrant floral bloom across an antique parchment-textured lid, flanked by jaali geometric trellis skirts and a vintage latch.",
    highlights: [
      "Auspicious Kalpavriksha Tree of Life motif",
      "Geometric lattice jaali border print with warm cream tone",
      "Heavy antiqued brass latch and reinforced corners",
      "Segmented interior for dry fruits, mithai, or silver coins",
      "Custom gift card holder integrated into lid"
    ],
    dimensions: "14\" x 8\" x 3.5\"",
    materials: "Engineered Wood, Protective Polyurethane Lacquer, Brass Clasp",
    idealFor: "Diwali, Griha Pravesh, Anniversaries, Auspicious Family Milestones",
    images: [
      "/Blooming%20Kalpavriksha/Copy%20of%20Untitled%20Session1981.jpg",
      "/Blooming%20Kalpavriksha/Copy%20of%20Untitled%20Session1985.jpg",
      "/Blooming%20Kalpavriksha/Copy%20of%20Untitled%20Session1989.jpg",
      "/Blooming%20Kalpavriksha/Copy%20of%20Untitled%20Session1992.jpg"
    ],
    coverImage: "/Blooming%20Kalpavriksha/Copy%20of%20Untitled%20Session1981.jpg"
  },
  {
    id: "dancing-feather",
    name: "Dancing Feather Gilded Chest",
    slug: "dancing-feather",
    folderName: "Dancing Feather",
    tag: "Bespoke Luxury",
    collection: "Custom Orders",
    price: "Price on Request",
    tagline: "Whimsical Peacock Arabesque with Pastel Flora & Gold Foil",
    description: "An ode to India's national bird in full majestic courtship display. The delicate plumage spreads into sinuous golden vines, accompanied by delicate wildflowers in shades of lavender, blush, and marigold.",
    highlights: [
      "Embossed gold foil peacock arabesque artwork",
      "Smooth ivory lacquer casing with golden rim piping",
      "Removable modular divider for diverse gifting items",
      "Wax seal authenticity ribbon included",
      "Personalized message sleeve option"
    ],
    dimensions: "15\" x 8.5\" x 4\"",
    materials: "Lacquered Wood, Metallic Gold Foil Inlay, Velvet Lining",
    idealFor: "Bespoke Anniversaries, Luxury Invitations, VIP Client Gifting",
    images: [
      "/Dancing%20Feather/Copy%20of%20Untitled%20Session1816.jpg",
      "/Dancing%20Feather/Copy%20of%20Untitled%20Session1820.jpg",
      "/Dancing%20Feather/Copy%20of%20Untitled%20Session1825.jpg",
      "/Dancing%20Feather/Copy%20of%20Untitled%20Session1835.jpg",
      "/Dancing%20Feather/Copy%20of%20Untitled%20Session1840.jpg"
    ],
    coverImage: "/Dancing%20Feather/Copy%20of%20Untitled%20Session1816.jpg"
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom Curved Trunk",
    slug: "cherry-blossom",
    folderName: "Cherry Blossom ",
    tag: "Modern Pastel",
    collection: "Gourmet Gift Hampers",
    price: "Price on Request",
    tagline: "Serene Turquoise Curved Silhouette with Sakura Bloom Art",
    description: "A harmonious synthesis of traditional trunk architecture and gentle Japanese sakura aesthetics. Finished in an elegant soft turquoise hue with rounded aerodynamic contours and delicate golden lattice jaali patterns.",
    highlights: [
      "Unique rounded curved trunk architecture",
      "Subtle turquoise pastel lacquer with hand-painted blossom boughs",
      "Antique brass filigree padlock closure",
      "Deep spacious interior suitable for luxury treats and wine",
      "High-end display piece for luxury vanities"
    ],
    dimensions: "16\" x 9.5\" x 6\"",
    materials: "Curved Steam-Bent Wood, Satin Lacquer, Antique Brass Fasteners",
    idealFor: "Spring Celebrations, Luxury Bridal Shower, Gourmet Confections",
    images: [
      "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2005.jpg",
      "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2011.jpg",
      "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2013.jpg",
      "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2016.jpg",
      "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2018.jpg"
    ],
    coverImage: "/Cherry%20Blossom%20/Copy%20of%20Untitled%20Session2005.jpg"
  },
  {
    id: "urban-raga",
    name: "Urban Raga Gourmet Chest",
    slug: "urban-raga",
    folderName: "Urban Raga",
    tag: "Executive Elegance",
    collection: "Corporate Gifting",
    price: "Price on Request",
    tagline: "Fluted Oval Trunk with 16-Cavity Gourmet Confection Grid",
    description: "Designed for premium corporate gifting and discerning celebrations. The Urban Raga box features an architectural terracotta jaali base, curved oval wings, and opens to reveal an organized 16-cavity gourmet chocolate tray tied with bespoke ribbon.",
    highlights: [
      "Complete 16-cavity sealed gourmet treat presentation",
      "Fluted oval shape with geometric terracotta jaali motif",
      "Dual opening lid mechanism with gold ornate lock",
      "Custom corporate branding insert cards and ribbon customization",
      "Food-grade luxury presentation trays"
    ],
    dimensions: "15.5\" x 10\" x 5\"",
    materials: "Solid Hardwood Frame, Terracotta Jaali Print, Silk Ribbon, Food-grade Cavity Tray",
    idealFor: "Corporate Leadership Hampers, Client Appreciation, Diwali Gourmet Sweets",
    images: [
      "/Urban%20Raga/Copy%20of%20Untitled%20Session1729.jpg",
      "/Urban%20Raga/Copy%20of%20Untitled%20Session1711.jpg",
      "/Urban%20Raga/Copy%20of%20Untitled%20Session1725.jpg",
      "/Urban%20Raga/Copy%20of%20Untitled%20Session1735.jpg",
      "/Urban%20Raga/Copy%20of%20Untitled%20Session1741.jpg"
    ],
    coverImage: "/Urban%20Raga/Copy%20of%20Untitled%20Session1729.jpg",
    interiorImage: "/Urban%20Raga/Copy%20of%20Untitled%20Session1729.jpg"
  },
  {
    id: "rooh-tote",
    name: "Rooh Tote Luxury Gift Hamper",
    slug: "rooh-tote",
    folderName: "Rooh Tote",
    tag: "Chic & Portable",
    collection: "Corporate Gifting",
    price: "Price on Request",
    tagline: "Tiered Presentation Box with Emerald Vegan Leather Tote Handles",
    description: "The peak of portable luxury. The Rooh Tote combines a tiered structural box covered in Rajasthani royal palace murals with emerald-green vegan leather straps, allowing effortless gifting at destination weddings and corporate galas.",
    highlights: [
      "Sturdy emerald vegan leather carry straps with brass rivets",
      "Two-tier nested structural storage system",
      "Royal palace courtyard fresco artwork with gold buta border",
      "Ideal for multi-item curated gifting",
      "No secondary gift bag required"
    ],
    dimensions: "14\" x 11\" x 6\" (Handle Drop: 10\")",
    materials: "Rigid Board, Vegan Leather Handles, Metallic Gold Foil Print",
    idealFor: "Destination Wedding Welcome Favors, Corporate Galas, Festive Gatherings",
    images: [
      "/Rooh%20Tote/Copy%20of%20Untitled%20Session1624.jpg",
      "/Rooh%20Tote/Copy%20of%20Untitled%20Session1625.jpg",
      "/Rooh%20Tote/Copy%20of%20Untitled%20Session1626.jpg",
      "/Rooh%20Tote/Copy%20of%20Untitled%20Session1633.jpg",
      "/Rooh%20Tote/Copy%20of%20Untitled%20Session1641.jpg"
    ],
    coverImage: "/Rooh%20Tote/Copy%20of%20Untitled%20Session1624.jpg"
  },
  {
    id: "ranga",
    name: "Ranga Royal Celebration Box",
    slug: "ranga",
    folderName: "Ranga",
    tag: "Festive Favorite",
    collection: "Festive Gifting",
    price: "Price on Request",
    tagline: "Vibrant Scarlet Leather Handles with Indigo Buta Base",
    description: "Celebratory and vivacious, the Ranga box pairs scarlet red carry straps with an auspicious royal indigo base adorned with golden butidar florets, capped with a courtly Mughal palace illustration.",
    highlights: [
      "Vibrant scarlet red faux leather straps with gold studs",
      "Deep indigo buta-printed base with gold accents",
      "Traditional Rajasthani palace fresco artwork",
      "Compact yet spacious for gourmet treats and dry fruits",
      "Signature Kiara's luxury gift finish"
    ],
    dimensions: "14\" x 10\" x 4.5\"",
    materials: "Rigid Composite Board, Vegan Leather, Gold Foil Stamping",
    idealFor: "Diwali, Raksha Bandhan, Eid Celebrations, Family Gifting",
    images: [
      "/Ranga/Copy%20of%20Untitled%20Session1666.jpg",
      "/Ranga/Copy%20of%20Untitled%20Session1670.jpg",
      "/Ranga/Copy%20of%20Untitled%20Session1671.jpg",
      "/Ranga/Copy%20of%20Untitled%20Session1678.jpg",
      "/Ranga/Copy%20of%20Untitled%20Session1684.jpg"
    ],
    coverImage: "/Ranga/Copy%20of%20Untitled%20Session1666.jpg"
  },
  {
    id: "rangeela",
    name: "Rangeela Sovereign Hamper",
    slug: "rangeela",
    folderName: "Rangeela",
    tag: "Color Celebration",
    collection: "Festive Gifting",
    price: "Price on Request",
    tagline: "Forest Green Straps with Mughal Jharokha Miniature Lid",
    description: "A celebration of colors and heritage craftsmanship. Featuring forest green ribbon handles, a cobalt blue patterned base, and an intricate painting of royal court pavilions.",
    highlights: [
      "Forest green ribbon handles with gold rivet fasteners",
      "Architectural palace jharokha artwork lid",
      "Vibrant multi-color Indian festive palette",
      "Lightweight yet remarkably sturdy construction",
      "Custom gift tags & printed cards available"
    ],
    dimensions: "14\" x 10\" x 4.5\"",
    materials: "Reinforced Rigid Box Board, Satin Straps, Gloss Lacquer",
    idealFor: "Festive Celebrations, Sangeet Favors, Corporate Employee Gifts",
    images: [
      "/Rangeela/Copy%20of%20Untitled%20Session1692.jpg",
      "/Rangeela/Copy%20of%20Untitled%20Session1695.jpg",
      "/Rangeela/Copy%20of%20Untitled%20Session1697.jpg",
      "/Rangeela/Copy%20of%20Untitled%20Session1700.jpg"
    ],
    coverImage: "/Rangeela/Copy%20of%20Untitled%20Session1692.jpg"
  },
  {
    id: "gulaal",
    name: "Gulaal Grandeur Hamper",
    slug: "gulaal",
    folderName: "Gulaal",
    tag: "Celebration Special",
    collection: "Wedding & Trousseau Packaging",
    price: "Price on Request",
    tagline: "Festive Joy with Warm Crimson Tones and Artisanal Finishes",
    description: "Named after the celebratory powder of joy and festivities, Gulaal exudes warmth and grandeur. Designed to be filled with artisanal sweets, fragrant incense, and handcrafted brass mementos.",
    highlights: [
      "Festive red and gold royal colorway",
      "Durable dual-rivet handle for secure transportation",
      "Interior fitted for mithai boxes and jar assortments",
      "Custom branded sleeve option for weddings & corporate events",
      "Refined smooth touch finish"
    ],
    dimensions: "14\" x 10\" x 5\"",
    materials: "Luxury Board, Vegan Leather, Gold Leaf Foil",
    idealFor: "Weddings, Sangeet Gifting, Holi Celebrations, Diwali",
    images: [
      "/Gulaal/Copy%20of%20Untitled%20Session1648.jpg",
      "/Gulaal/Copy%20of%20Untitled%20Session1651.jpg",
      "/Gulaal/Copy%20of%20Untitled%20Session1652.jpg",
      "/Gulaal/Copy%20of%20Untitled%20Session1656.jpg",
      "/Gulaal/Copy%20of%20Untitled%20Session1660.jpg"
    ],
    coverImage: "/Gulaal/Copy%20of%20Untitled%20Session1648.jpg"
  },
  {
    id: "shahi-sarovar",
    name: "Shahi Sarovar Heritage Trunk",
    slug: "shahi-sarovar",
    folderName: "Shahi Sarovar",
    tag: "Regal Heirloom",
    collection: "Wedding & Trousseau Packaging",
    price: "Price on Request",
    tagline: "Serene Lake Pichola Lotus & Royal Peacock Heirloom Trunk",
    description: "Echoing the tranquil beauty of Udaipur's royal lakes, Shahi Sarovar is adorned with pink lotuses, dancing peacocks, and a richly caparisoned ceremonial elephant. Inside, cushioned satin creates a palatial haven for treasured gifts.",
    highlights: [
      "Serene lotus pond and palace miniature art motif",
      "Solid wooden box construction with gold-toned metal trimming",
      "Deep interior fits heavy brass jars, dry fruits, or bridal accessories",
      "Collector's item designed to be cherished for generations",
      "Matching custom wedding stationery sets available"
    ],
    dimensions: "16\" x 8\" x 5.5\"",
    materials: "Wood Core, Protective Lacquer, Pure Brass Accents, Satin Fabric",
    idealFor: "Bridal Trousseau Box, Luxury Wedding Invitations, High-End Festive Keepsake",
    images: [
      "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1586.jpg",
      "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1592.jpg",
      "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1596.jpg",
      "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1601.jpg",
      "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1605.jpg"
    ],
    coverImage: "/Shahi%20Sarovar/Copy%20of%20Untitled%20Session1586.jpg"
  }
];

export const SIGNATURE_COLLECTIONS = [
  {
    title: "Gourmet Gift Hampers",
    description: "Delicious, handpicked treats and artisanal delights, beautifully packed for birthdays, anniversaries, and special events.",
    image: "/Urban%20Raga/Copy%20of%20Untitled%20Session1729.jpg",
    filter: "Gourmet Gift Hampers",
    count: 3
  },
  {
    title: "Festive Gifting",
    description: "Celebrate Diwali, Rakhi, Eid, and more with special hampers and festive gift boxes that spread joy and sparkle.",
    image: "/Emerald%20Gold%20Haveli/Copy%20of%20Untitled%20Session1784.jpg",
    filter: "Festive Gifting",
    count: 4
  },
  {
    title: "Custom Orders",
    description: "Dreaming of a unique creation? We personalize gifts for any theme, occasion, or recipient.",
    image: "/Dancing%20Feather/Copy%20of%20Untitled%20Session1816.jpg",
    filter: "Custom Orders",
    count: 3
  },
  {
    title: "Corporate Gifting",
    description: "Exclusive, branded gift boxes to show appreciation and strengthen business relationships with personalised messages.",
    image: "/Rooh%20Tote/Copy%20of%20Untitled%20Session1624.jpg",
    filter: "Corporate Gifting",
    count: 3
  },
  {
    title: "Wedding & Trousseau Packaging",
    description: "Elegant, customized trousseau boxes and wedding gifts designed to impress and become cherished keepsakes.",
    image: "/Shahi%20Jal%20Mahal/Copy%20of%20Untitled%20Session1557.jpg",
    filter: "Wedding & Trousseau Packaging",
    count: 4
  }
];

export const CLASS_APART_FEATURES = [
  {
    title: "Handcrafted Excellence",
    description: "Every hamper and box is made with care, detail, and high-quality materials.",
    icon: "hands-cradle"
  },
  {
    title: "Fully Customizable",
    description: "Safe and timely doorstep delivery throughout India/ Worldwide.",
    icon: "sparkles"
  },
  {
    title: "Shipping India / Worldwide",
    description: "Real people making great products",
    icon: "globe"
  },
  {
    title: "Trusted Experience",
    description: "Hundreds of happy clients and glowing reviews.",
    icon: "award"
  }
];
