import { Church } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logo({ variant = 'light' }) {
    const textColorClass = variant === 'dark' ? 'text-white' : 'text-neutral-800';

    return (
        <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10">
                {/*<Church size={24} className={textColorClass}/>*/}
                <img 
                    src="/svg-sem-fundo.svg" 
                    alt="Logo Anima" 
                    className="w-full h-full"
                />
            </div>
            <span className={`text-xl font-semibold tracking-tight ${textColorClass}`}>
                Anima
            </span>
        </Link>
    );
};

export default Logo; 