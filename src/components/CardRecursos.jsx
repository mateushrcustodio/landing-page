function CardRecursos({ Icon, title, description }) {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col text-center bg-lightgray p-6 rounded-2xl h-full justify-between
                shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex justify-center items-center rounded-full mx-auto mb-4 p-3">
                    <Icon size={48} color="#B58025" strokeWidth={1.5} />
                </div>
                <div>
                    <h5 className="my-2 text-xl font-semibold text-neutral-900">{title}</h5>
                    <p className="text-sm px-2 text-neutral-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardRecursos;