function Footer() {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - <b>Rocco Giyseppe Giandomenico</b></p>
                <p>The source code is released under the MIT license</p>
                <p>v0.0.1</p>
            </aside>
        </footer>
    )
}

export default Footer