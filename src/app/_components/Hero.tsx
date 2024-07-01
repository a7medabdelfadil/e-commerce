const Hero = () => {
    return (
        <section className="bg-background text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-300 via-primary to-purple-600 bg-clip-text text-transparent sm:text-5xl"
                    >
                        Discover Amazing Deals.
                        <span className="sm:block"> Shop Smarter. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-lg sm:text-xl leading-relaxed">
                        Find the latest trends and best prices. Elevate your shopping experience with us.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border transition border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Start Learning
                        </a>

                        <a
                            className="block w-full rounded border transition border-primary px-12 py-3 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
