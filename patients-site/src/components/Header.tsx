const Header = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <nav className="p-1 bg-gray-100/80 rounded-lg shadow-inner">
                <div className="flex space-x-1">
                    <h2 className="text-2xl font-bold">
                        Patients Site
                    </h2>
                </div>
            </nav>
        </div>
    );
}

export default Header;