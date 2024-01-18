import './footer.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright © ${year}. All rights reserved.`}</footer>
};

export default Footer;