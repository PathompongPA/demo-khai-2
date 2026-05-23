type prop = {
    index: number
    countNumber: number
    onSetCountNumber: (newValue: number) => void

}
export default function Counter({ index, countNumber, onSetCountNumber }: prop) {
    const isCounting = index === countNumber
    return (
        <div className="py-2 hover:cursor-pointer group  " onClick={() => { onSetCountNumber(index) }}>
            <div className={` overflow-hidden border-gray-950  group-hover:duration-300 group-hover:border-gray-300 bg-gray-200 `} data-is-counting={isCounting}  >
                <div className={` h-1 border-gray-200  opacity-0 w-6.25 duration-300 data-[is-counting=true]:animate-loading data-[is-counting=true]:bg-gray-800 origin-left `} data-is-counting={isCounting} ></div>
            </div>
        </div>
    )

};
