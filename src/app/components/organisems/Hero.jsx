import Button from "../atoms/Button";
import hero from "/assets/hero/hero1.jpg";

function Hero() {
    return (
        <>
            <section className="relative h-screen">
                <div className="absolute z-20 flex flex-col w-full gap-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <header className="px-5 text-center text-neutral-100">
                        <h1 className="text-2xl font-bold sm:text-4xl xl:text-8xl">
                            Selamat datang di loundry Kelompok 5
                        </h1>
                        <p className="mt-2 text-lg sm:text-xl xl:text-3xl sm:mt-5 sm:px-14 xl:px-40">
                            Kami senang Anda memilih kami untuk merawat sepatu kesayangan
                            Anda. Kami siap memberikan layanan terbaik untuk sepatu Anda!
                        </p>
                    </header>
                    <div className="mx-auto lg:text-4xl">
                        <Button to={"/service"}>Learn More</Button>
                    </div>
                </div>
                <img
                    src={hero}
                    alt="klin8"
                    className="absolute z-10 object-cover w-full h-full brightness-50"
                />
            </section>
        </>
    );
}

export default Hero;