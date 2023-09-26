const Center = ({children}) => {

    return <div className={'flex justify-center'}>
        <div className={'flex flex-col h-screen justify-center items-center gap-y-40'}>
            {children}
        </div>
    </div>;
}

export default Center;
