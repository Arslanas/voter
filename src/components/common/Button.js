const Button = ({text, onClick}) => {

    return <button className={'bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-2 px-4 rounded-lg'}
        onClick={onClick}>{text}</button>;
}

export default Button;
