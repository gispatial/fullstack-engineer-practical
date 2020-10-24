import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
        id: "eCommerceDash",
        title: "DASHBOARD",
        type: "item",
        icon: <Icon.Folder size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"  },
  {
    type: "groupHeader",
    groupTitle: "SALES"
  },
  {
    id: "dataList",
    title: "Open Orders",
    type: "collapse",
    icon: <Icon.List size={20} />,
    badge: "primary",
    badgeText: "new",
  },
  {
    id: "thumbView",
        title: "Close Orders",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/thumb-view"
      },
  {
    id: "dataList",
    title: "Current Inventory",
    type: "collapse",
    icon: <Icon.List size={20} />,
    badge: "primary",
    badgeText: "new"
  },
  {
    id: "thumbView",
        title: "Reportings",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce-dashboard"
      },
      {
    type: "groupHeader",
    groupTitle: "DATA MANAGEMENT"
  },
  {
    id: "documentation",
    title: "Payments",
    icon: <Icon.Folder size={20} />,
    type: "external-link",
    permissions: ["admin", "editor"],
    navLink:
      "#"
  },
  {
    id: "raiseSupport",
    title: "SKU",
    icon: <Icon.LifeBuoy size={20} />,
    type: "external-link",
    newTab: true,
    permissions: ["admin", "editor"],
    navLink: "#"
  }
]

export default navigationConfig
