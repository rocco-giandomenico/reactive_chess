function Chessboard() {

    // -------------------------------------------------------------------------
    // RETURN

    return (
        <div className="bg-base-200 flex-1">
            <div class="flex items-center justify-center p-4">
                <div class="card card-border border-base-300 shadow-sm w-[50%] h-full flex flex-col">
                    <div class="card-body flex flex-col">
                        <h2 class="card-title">Chessboard</h2>
                    
                        <div class="relative flex-1 flex items-center justify-center">
                            
                            <div class="grid grid-cols-8 gap-0 w-full max-w-full max-h-full aspect-square border-2 border-base-300">
                                {Array.from({ length: 64 }).map((_, index) => {
                                    const row = Math.floor(index / 8);
                                    const col = index % 8;
                                    const isBlack = (row + col) % 2 === 1;
                                    return (
                                    <div
                                        key={index}
                                        class={`w-full h-full ${
                                        isBlack ? "bg-base-300" : "bg-base-100"
                                        }`}
                                    ></div>
                                    );
                                })}


                                <div class="absolute w-[12.5%] h-[12.5%] top-0 left-0 flex items-center justify-center bg-red-500">
                                    ♜
                                </div>

                                
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Chessboard