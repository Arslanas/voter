const Center = ({children}) => {

    return <div className={'flex justify-center'}>
        {/*<div className={'flex flex-col mt-28 mb-20 items-center p-10  rounded-3xl border-8 border-slate-100 shadow-xl'}>*/}
        <div className={'flex flex-col mt-28 mb-20 items-center p-10  rounded-3xl border-8 border-sky-100 shadow-xl bg-white'}>
                {children}
        </div>
    </div>;
}

export default Center;
