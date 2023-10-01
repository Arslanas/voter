const Button = ({text, onClick}) => {

    return <button className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-2 px-4 rounded-lg'}
        onClick={onClick}>{text}</button>;
}

export default Button;
