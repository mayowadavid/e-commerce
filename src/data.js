const data = {
    images: [
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/chair.svg", product: "/assets/img/bh.png",  id: 1},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/shoe-prints.svg", product: "/assets/img/bth.png", id: 2}, 
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/shopping-bag.svg", product: "/assets/img/dresss.png", id: 3},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/shir1t.png", id: 4},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/shirt.png", id: 5},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/whitebh.png", id: 6},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/skirt.png", id: 7},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/bth.png", id: 8},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/bth.png", id: 9},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/whitebh.png", id: 10},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/bth.png", id: 11},
        {picture: "/assets/img/IMG-20190301-WA0015.png", icon: "/assets/img/weight.svg", product: "/assets/img/bth.png", id: 12}
    ]
}
export default data;

app.render(req, res, '/ProductSingle', req.query)