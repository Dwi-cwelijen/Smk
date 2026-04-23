import '../../App.css'

export default function NotFound() {
    return (
        <div className=" h-screen flex flex-col gap-2 items-center pt-25 w-full bg-[url('img/not-found/img3.jpg')] bg-cover bg-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-500 to-red-800 bg-[length:200%_auto] animate-shimmer font-serif font-bold text-6xl">NOT FOUND</h1>
            <p className="text-white text-3xl font-mono font-bold drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse">
                404 - Anda Tersesat di Kawasan Terlarang
            </p>
        </div>
    );
}
