import { useSelector } from 'react-redux';
import './Header.css'
export default function Header(){
    const names=useSelector((state)=>state.changer.detail.proName);
    return(
        <div className="header">
            <h1 className="heading"> Header {names}</h1>
        </div>
    );
}