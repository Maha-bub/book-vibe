import Image from "next/image";
import HeroImg from '@/assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className="hero container mx-auto rounded-2xl my-4 bg-slate-300 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    alt="Tailwind CSS hero component"
                    src={HeroImg}
                    className="max-w-lg rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold text-black">Books to freshen up <br /> your bookshelf</h1>
                    <p className="py-6 text-base-100">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;