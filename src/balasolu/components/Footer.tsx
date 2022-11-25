import Image from 'next/image';

const Footer = () => {
    const year = new Date().getFullYear();
    /**
                    <a href="">
                        <Image src="" alt="" className="w-16 h-auto m-1 p-1" />
                    </a>
                    <a href="">
                        <Image src="" alt="" className="w-16 h-auto m-1 p-1" />
                    </a>
     */
    return (
        <div className="flex bg-slate-200 rounded-xl m-1 p-8 md:p-0 dark:bg-slate-800 bg-opacity-90">
            <div className="p-0 md:p-8 text-center space-y-4">
                <div className="flex justify-center items-center">

                </div>
                <div>
                    <p className="text-lg font-medium">
                        all rights reserved © {year}
                    </p>
                </div>
                <div className="font-bold">
                    <div className="text-slate-700 dark:text-slate-500">
                        <a href="https://balasolu.com">balasolu | dreams realized</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer