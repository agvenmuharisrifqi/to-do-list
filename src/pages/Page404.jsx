function Page404(props) {
    return (
        <div style={{ 'backgroundColor': 'whitesmoke' }} className="p-8 h-full my-4 rounded-md flex justify-center items-center flex-col">
            <div className="relative h-[150px] md:h-[250px] w-full flex justify-center">
                <h3 className="text-base font-bold text-center">
                    OOPS! PAGE NOT FOUND
                </h3>
                <h1 className="absolute -bottom-10 md:-bottom-16">
                    <span className="text-[150px] tracking-[-20px] font-extrabold md:text-[250px] md:tracking-[-40px]" style={{ 'textShadow': '-8px 0 0 #fff' }}>4</span>
                    <span className="text-[150px] tracking-[-20px] font-extrabold md:text-[250px] md:tracking-[-40px]" style={{ 'textShadow': '-8px 0 0 #fff' }}>0</span>
                    <span className="text-[150px] font-extrabold md:text-[250px]" style={{ 'textShadow': '-8px 0 0 #fff' }}>4</span>
                </h1>
            </div>
            <h2 className="text-base font-bold text-center">
                WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
            </h2>
        </div>
    )
}

export default Page404;