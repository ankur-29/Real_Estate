import { BsFillHousesFill, BsHouseFill } from "react-icons/bs";
import { HiOfficeBuilding, HiHome, HiMap, HiKey } from "react-icons/hi";
import { MdNotifications, MdAccountBox, MdFavorite } from "react-icons/md";

export const HOME_LINKS = [
  {
    icon: BsHouseFill,
    name: "Sale",
    param: "?category=sale",
  },
  {
    icon: HiKey,
    name: "Rent",
    param: "?category=rent",
  },
  {
    icon: HiHome,
    name: "House",
    param: "?category=sale&type=house",
  },
  {
    icon: HiOfficeBuilding,
    name: "Workplace",
    param: "?category=sale&type=workspace",
  },
  {
    icon: HiMap,
    name: "Land",
    param: "?category=sale&type=land",
  },
];

export const USER_MENU_LINKS = [
  {
    icon: MdAccountBox,
    name: "account",
  },
  {
    icon: MdNotifications,
    name: "notifications",
  },
  {
    icon: BsFillHousesFill,
    name: "listings",
  },
  {
    icon: MdFavorite,
    name: "favorites",
  },
];

export const THEME_OPTIONS = ["light", "dark"];
