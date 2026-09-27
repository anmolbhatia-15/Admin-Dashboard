import {
    LayoutDashboard,
    Package,
    Settings,
    ShoppingCart,
    User,
    Users
} from "lucide-react";

export const navigation = [
    {
        title: "Main Menu",
        items: [
            {
                label: "Dashboard",
                path: "/dashboard",
                icon: LayoutDashboard
            },
            {
                label: "Users",
                path: "/users",
                icon: Users
            },
            {
                label: "Products",
                path: "/products",
                icon: Package
            },
            {
                label: "Orders",
                path: "/orders",
                icon: ShoppingCart
            },
            {
                label: "Settings",
                path: "/settings",
                icon: Settings
            }
        ]
    },
    {
        title: "Account",
        items: [
            {
                label: "Profile",
                path: "/profile",
                icon: User
            }
        ]
    }
];

export const pageTitles = {
    "/dashboard": "Dashboard",
    "/users": "Users",
    "/products": "Products",
    "/orders": "Orders",
    "/settings": "Settings",
    "/profile": "Profile"
};