export const PageColor = () => {

    let urlPath = window.location.pathname;
    // console.log(`Url Path is :${urlPath}`);

    if (urlPath == "/charts") {
        return "#43aa8b"
    }
    if (urlPath == "/news") {
        return "#e9c46a"
    }
    if (urlPath == "/about") {
        return "#f4a261"
    }
    return "#717688"
}

export const FooterBgImage = () => {

    let urlPath = window.location.pathname;

    if (urlPath == "/charts") {
        return 'linear-gradient(90deg, rgba(67,170,139,1) 50%, rgba(67,170,139,1) 50%)'
    }
    if (urlPath == "/news") {
        return 'linear-gradient(90deg, rgba(233,196,106,1) 50%, rgba(233,196,106,1) 50%)'
    }
    if (urlPath == "/about") {
        return 'linear-gradient(90deg, rgba(244,162,97,1) 50%, rgba(244,162,97,1) 50%)'
    }
    return 'linear-gradient(127deg, rgba(113,118,136,1) 0%, rgba(113,118,136,1) 0%)'
}