const roleToRouter = {
    "customer": [
        {
            name: "Product",
        },
        {
            name: "ProductList"
        },
        {
            name: "AddProduct"
        }
    ],
    "admin": [
        {
            name: "Product",
        },
        {
            name: "ProductList"
        },
        {
            name: "AddProduct"
        },
        {
            name: "Category"
        }
    ]
}

export default function getMenuRouter(role, routes) {
    const allowRoutesName = roleToRouter[role].map(item => item.name);
    const resultRoutes = routes.filter(router => {
        if (allowRoutesName.indexOf(router.name) != -1) {
            const children = router.children;
            router.children = children.filter(r => allowRoutesName.indexOf(r.name) != -1)
            return true;
        }
        return false;
    });
    return resultRoutes;
};