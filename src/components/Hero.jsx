import { useState } from 'react'

function Hero() {
    const [count, setCount] = useState(0)

    return (
        <div className="hero bg-base-200 flex-1">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src="" alt="" />
                    <h1 className="text-5xl font-bold">Reactive Chess</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae aperiam, alias nam tempora inventore culpa fuga eum repellat rem.
                    </p>
                    <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                        Get Started {count}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero