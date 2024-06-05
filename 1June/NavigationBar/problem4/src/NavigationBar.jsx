
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav style={{display:'flex', justifyContent: 'space-around', fontSize: '20px'}}>
     
        <ul onClick={() => navigate('/')}>Home</ul>
        <ul onClick={() => navigate('/about')}>About</ul>
        <ul onClick={() => navigate('/products')}>Products</ul>
        <ul onClick={() => navigate('/contact')}>Contact</ul>
    
    </nav>
  );
};

export default NavigationBar