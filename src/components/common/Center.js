const Center = ({children}) => {

    return <div className={'flex justify-center'}>
        <div className={'flex flex-col mt-28 mb-28 items-center'}>
            {children}
        </div>
    </div>;
}

export default Center;
