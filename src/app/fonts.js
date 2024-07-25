import {
  Bebas_Neue,
  Inter,
  Mochiy_Pop_One,
  Poppins,
  Roboto_Serif,
  Roboto_Slab,
} from "next/font/google";

// Configure the Inter font with specific options
export const inter = Inter({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Configure the Poppins font with specific options
export const poppins = Poppins({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Configure the Roboto Serif font with specific options
export const RobotoSerif = Roboto_Serif({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Configure the Roboto Slab font with specific options
export const RobotoSlab = Roboto_Slab({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Configure the Mochiy Pop One font with specific options
export const MochiyPopOne = Mochiy_Pop_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Configure the Bebas Neue font with specific options
export const BebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
