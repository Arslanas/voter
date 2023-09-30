const Button = ({text, onClick}) => {

    return <button className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-4 px-8 rounded-lg'}
        onClick={onClick}>{text}</button>;
}

export default Button;
