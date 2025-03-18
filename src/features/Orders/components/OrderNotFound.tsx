import order_not_found from '../../../assets/images/order_not_found.png'
export default function OrderNotFound() {
    return (
        <section className="bg-[#F9FAFB] antialiased md:py-8 w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4">
                    <img src={order_not_found} width={100} height={100}/>
                    <h2 className="text-2xl font-bold">Enable to fetch Orders right now!</h2>
                    <p className="text-gray-500 text-center max-w-md">
                        It looks like there is some issue fetching order.<br /> <span className="text-[#850a0a]">Order somethigng now!</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
