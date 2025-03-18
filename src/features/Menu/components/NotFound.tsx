import food_cart from '../../../assets/images/food_cart.svg';

export default function NotFound() {
    return (
        <section className="bg-[#F9FAFB] antialiased md:py-8 w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4">
                    <img src={food_cart} />
                    <h2 className="text-2xl font-bold">Enable to fetch Menu Items right now <span className="text-[#d00000]">!</span></h2>
                    <p className="text-gray-500 text-center max-w-md">
                        It looks like there is some issue fetching menu items.<br /> <span className="text-[#850a0a]">Please scan QR code again.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
