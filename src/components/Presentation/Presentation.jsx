import { useLocation } from 'react-router-dom';
const Presentation = () => {
    const imageUrl =
        "https://inpro.ar/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuperhero.dd52f068.jpg&w=1920&q=75";
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        isHomePage && (
            <div className="presentation-container">
                <img src={imageUrl} alt="Presentación" className="presentation-image" />
                <h1 className="Titel-presentation">¡Bienvenidos!</h1>
                <p className="Text-presentation">Aquí podrán comprar sus electrodomésticos y accesorios.</p>
            </div>
        )
    );
};

export default Presentation;
